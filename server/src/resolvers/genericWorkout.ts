import {
  Resolver,
  Query,
  UseMiddleware,
  Ctx,
  FieldResolver,
  Root,
  ObjectType,
  Field,
  Arg,
  Int,
} from "type-graphql";
import { GenericWorkout } from "../entities/GenericWorkout";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";
import { GenericWorkoutDetail } from "../entities/GenericWorkoutDetail";
import { FieldError } from "./FieldError";
import { getRepository } from "typeorm";

@ObjectType()
export class GenericWorkoutResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => GenericWorkout, { nullable: true })
  genericWorkout?: GenericWorkout;
}

@Resolver(GenericWorkout)
export class GenericWorkoutResolver {
  @FieldResolver(() => [GenericWorkoutDetail], { nullable: true })
  genericWorkoutDetails(
    @Root() genericWorkout: GenericWorkout,
    @Ctx() { genericWorkoutLoader }: MyContext
  ) {
    return genericWorkoutLoader.load(genericWorkout.id);
  }

  @Query(() => GenericWorkout, { nullable: true })
  @UseMiddleware(isAuth)
  async genericWorkout(
    @Arg("genericWorkoutId", () => Int) genericWorkoutId: number
  ) {
    const genericWorkout = await GenericWorkout.findOne(genericWorkoutId);
    return genericWorkout;
  }

  @Query(() => [GenericWorkout], { nullable: true })
  @UseMiddleware(isAuth)
  async genericWorkouts() {
    const genericWorkouts = await getRepository(GenericWorkout)
      .createQueryBuilder("genericWorkout")
      .getMany();
    return genericWorkouts;
  }

  //TO-DO for an admin panel
  // @Mutation(() => GenericWorkoutResponse)
  // @UseMiddleware(isAuth)
  // async createGenericWorkout(
  //   @Arg("options") options: GenericWorkoutInput,
  //   @Ctx() { req }: MyContext
  // ): Promise<GenericWorkoutResponse> {
  //   const genericWorkout = new GenericWorkout();
  //   genericWorkout.userId = req.session.userId;
  //   genericWorkout.genericWorkoutType = options.genericWorkoutType;
  //   genericWorkout.name = options.name;
  //   await genericWorkout.save();
  //   options.genericWorkoutDetails.forEach(async (item) => {
  //     const genericWorkoutDetail = new GenericWorkoutDetail();
  //     genericWorkoutDetail.exoId = parseInt(item.exoId, 10);
  //     genericWorkoutDetail.exoDetail = item.exoDetail;
  //     genericWorkoutDetail.genericWorkout = genericWorkout;

  //     await genericWorkoutDetail.save();
  //   });
  //   return { genericWorkout };
  // }

  //TO-DO for an admin panel
  // @Mutation(() => GenericWorkoutResponse)
  // @UseMiddleware(isAuth)
  // async editGenericWorkout(
  //   @Arg("id", () => Int) id: number,
  //   @Arg("options") options: GenericWorkoutInput,
  //   @Ctx() { req }: MyContext
  // ): Promise<GenericWorkoutResponse> {
  //   const genericWorkout = await GenericWorkout.findOne(id);
  //   if (!genericWorkout) {
  //     return {
  //       errors: [
  //         {
  //           field: "genericWorkoutType",
  //           message: "Could not retrieve genericWorkout",
  //         },
  //       ],
  //     };
  //   }
  //   if (genericWorkout.userId !== req.session.userId) {
  //     throw new Error("not authorized");
  //   }

  //   genericWorkout.genericWorkoutType = options.genericWorkoutType;
  //   genericWorkout.name = options.name;
  //   await genericWorkout.save();
  //   await GenericWorkoutDetail.delete({ genericWorkoutId: id });
  //   options.genericWorkoutDetails.forEach(async (item) => {
  //     const genericWorkoutDetail = new GenericWorkoutDetail();
  //     genericWorkoutDetail.exoId = parseInt(item.exoId, 10);
  //     genericWorkoutDetail.exoDetail = item.exoDetail;
  //     genericWorkoutDetail.genericWorkout = genericWorkout;

  //     await genericWorkoutDetail.save();
  //   });
  //   return { genericWorkout };
  // }

  //TO-DO for an admin panel
  // @Mutation(() => Boolean)
  // @UseMiddleware(isAuth)
  // async deleteGenericWorkout(
  //   @Arg("id", () => Int) id: number
  // ): Promise<boolean> {
  //   // not cascade way
  //   const genericWorkout = await GenericWorkout.findOne(id);
  //   if (!genericWorkout) {
  //     return false;
  //   }

  //   await GenericWorkoutDetail.delete({ genericWorkoutId: id });
  //   await GenericWorkout.delete({ id });

  //   return true;
  // }
}
