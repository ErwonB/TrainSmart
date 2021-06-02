import { Field, InputType } from "type-graphql";
import { Entity, Column } from "typeorm";
import { exoDetailsInput } from "./exoDetailInput";

@InputType()
@Entity()
export class TemplateDetailInput {
  @Field()
  @Column()
  exoId!: string;

  @Field(() => [exoDetailsInput])
  @Column("jsonb")
  exoDetail!: exoDetailsInput[];
}
