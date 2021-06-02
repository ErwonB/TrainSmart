import { InputType, Field } from "type-graphql";
@InputType()
export class ProfileInput {
  @Field()
  lang_cd: string;
  @Field()
  trainingFrequency: number;
  @Field()
  trainingType: string;
  @Field()
  sex: string;
}
