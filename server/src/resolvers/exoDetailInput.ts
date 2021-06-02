import { Field, InputType } from "type-graphql";

@InputType()
export class exoDetailsInput {
  @Field()
  sets: number;
  @Field()
  reps: number;
  @Field()
  weight: number;
  @Field()
  grade: number;
  @Field({ nullable: true })
  rest: number;
  @Field({ nullable: true })
  feedback: string;
}
