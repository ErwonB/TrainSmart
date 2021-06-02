import {
  Resolver,
  Query,
  UseMiddleware,
  Ctx,
  FieldResolver,
  Root,
  ObjectType,
  Field,
  Mutation,
  Arg,
  Int,
} from "type-graphql";
import { Workout } from "../entities/Workout";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";
import { WorkoutDetail } from "../entities/WorkoutDetail";
import { FieldError } from "./FieldError";
import { WorkoutInput } from "./WorkoutInput";
import { getConnection } from "typeorm";
import { getWeek } from "../utils/getWeek";

@ObjectType()
class PaginatedWorkout {
  @Field(() => [Workout])
  workouts: Workout[];
  @Field()
  hasMorePrev: boolean;
  @Field()
  hasMoreNext: boolean;
  @Field()
  weekNb: string;
  @Field()
  nextCursorValue: string;
}

@ObjectType()
export class WorkoutResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Workout, { nullable: true })
  workout?: Workout;
}

@Resolver(Workout)
export class WorkoutResolver {
  @FieldResolver(() => [WorkoutDetail], { nullable: true })
  workoutDetails(
    @Root() workout: Workout,
    @Ctx() { workoutLoader }: MyContext
  ) {
    return workoutLoader.load(workout.id);
  }

  @FieldResolver(() => String)
  weekNb(@Root() workout: Workout) {
    return getWeek(workout.workoutDt.toISOString().split("T")[0]);
  }

  @Query(() => Workout, { nullable: true })
  @UseMiddleware(isAuth)
  async workout(@Arg("workoutId", () => Int) workoutId: number) {
    const workout = await Workout.findOne(workoutId);
    return workout;
  }

  @Query(() => PaginatedWorkout, { nullable: true })
  @UseMiddleware(isAuth)
  async workouts(
    @Arg("sens", () => Int, { nullable: true }) sens: number | null,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null,
    @Ctx() { req }: MyContext
  ) {
    const replacements: any[] = [req.session.userId];
    let realSens;
    if (!sens) {
      realSens = 0;
    } else if (sens >= 0) {
      realSens = 1;
    } else {
      realSens = -1;
    }

    if (cursor) {
      replacements.push(cursor);
    } else {
      replacements.push(new Date(new Date().setDate(new Date().getDate())));
    }
    replacements.push(realSens);

    const workouts = await getConnection().query(
      `
       select w.*
       from Workout w
       where "userId" = $1
       and date_trunc('week', w."workoutDt") = date_trunc('week', cast($2 as DATE) + ($3*7))
        order by w."workoutDt" asc, w.id asc;
		`,
      replacements
    );

    const hasMore = await getConnection().query(
      `
        select 1 from Workout w where "userId" = $1 
        and date_trunc('week', w."workoutDt")  
        ${realSens == 1 ? `>=` : `<=`} 
        date_trunc('week', cast($2 as DATE) + ($3*14))
        group by 1;
        `,
      replacements
    );
    const weekNb = cursor
      ? getWeek(new Date(cursor).toISOString().split("T")[0]) + realSens
      : getWeek(
          new Date(new Date().setDate(new Date().getDate()))
            .toISOString()
            .split("T")[0]
        );

    let nextCursorValue = "";
    if (cursor) {
      let nextDtCursorValue = new Date(cursor);
      nextDtCursorValue.setDate(nextDtCursorValue.getDate() + realSens * 7);
      nextCursorValue = nextDtCursorValue.toISOString().split("T")[0];
    } else {
      nextCursorValue = new Date(new Date().setDate(new Date().getDate()))
        .toISOString()
        .split("T")[0];
    }

    return {
      workouts: workouts,
      hasMorePrev:
        (hasMore.length > 0 && (realSens == -1 || realSens == 0)) ||
        realSens == 1
          ? true
          : false,
      hasMoreNext:
        (hasMore.length > 0 && realSens == 1 && sens) || realSens == -1
          ? true
          : false,
      weekNb: weekNb,
      nextCursorValue: nextCursorValue,
    };
  }

  @Mutation(() => WorkoutResponse)
  @UseMiddleware(isAuth)
  async createWorkout(
    @Arg("options") options: WorkoutInput,
    @Ctx() { req }: MyContext
  ): Promise<WorkoutResponse> {
    const workout = new Workout();
    workout.userId = req.session.userId;
    workout.workoutDt = options.workoutDt;
    workout.workoutType = options.workoutType;
    workout.workoutDesc = options.workoutDesc ? options.workoutDesc : "";
    await workout.save();
    options.workoutDetails.forEach(async (item) => {
      const workoutDetail = new WorkoutDetail();
      workoutDetail.exoId = parseInt(item.exoId, 10);
      workoutDetail.exoDetail = item.exoDetail;
      workoutDetail.workout = workout;

      await workoutDetail.save();
    });
    return { workout };
  }

  @Mutation(() => WorkoutResponse)
  @UseMiddleware(isAuth)
  async editWorkout(
    @Arg("id", () => Int) id: number,
    @Arg("options") options: WorkoutInput,
    @Ctx() { req }: MyContext
  ): Promise<WorkoutResponse> {
    const workout = await Workout.findOne(id);
    if (!workout) {
      return {
        errors: [
          { field: "workoutType", message: "Could not retrieve workout" },
        ],
      };
    }
    if (workout.userId !== req.session.userId) {
      throw new Error("not authorized");
    }

    workout.workoutDt = options.workoutDt;
    workout.workoutType = options.workoutType;
    workout.workoutDesc = options.workoutDesc ? options.workoutDesc : "";
    await workout.save();
    await WorkoutDetail.delete({ workoutId: id });
    options.workoutDetails.forEach(async (item) => {
      const workoutDetail = new WorkoutDetail();
      workoutDetail.exoId = parseInt(item.exoId, 10);
      workoutDetail.exoDetail = item.exoDetail;
      workoutDetail.workout = workout;

      await workoutDetail.save();
    });
    return { workout };
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteWorkout(@Arg("id", () => Int) id: number): Promise<boolean> {
    // not cascade way
    const workout = await Workout.findOne(id);
    if (!workout) {
      return false;
    }

    await WorkoutDetail.delete({ workoutId: id });
    await Workout.delete({ id });

    return true;
  }
}
