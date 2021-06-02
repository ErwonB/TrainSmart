import { InputType, Field } from "type-graphql";
import { TemplateDetailInput } from "./TemplateDetailInput";
@InputType()
export class TemplateInput {
  @Field()
  templateType: string;
  @Field(() => String)
  name: string;
  @Field(() => [TemplateDetailInput])
  templateDetails: TemplateDetailInput[];
}
