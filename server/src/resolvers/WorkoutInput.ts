import { InputType, Field } from "type-graphql";
import {WorkoutDetailInput} from "./WorkoutDetailInput";
@InputType()
export class WorkoutInput {
  @Field()
  workoutDt: Date;
  @Field()
  workoutType: string;
  @Field(() => String, {nullable: true})
  workoutDesc: string;
  @Field(() => [WorkoutDetailInput])
  workoutDetails: WorkoutDetailInput[];
}
