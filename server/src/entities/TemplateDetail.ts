import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import {Template} from "./Template";
import {exoDetails} from "./exoDetail";

@ObjectType()
@Entity()
export class TemplateDetail extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  exoId!: number;

  @Field(() => [exoDetails])
  @Column('jsonb')
  exoDetail!: exoDetails[]; 

  @Field()
  @Column()
  templateId: number;

  @Field(() => Template)
  @ManyToOne(() => Template, (template) => template.templateDetails)
  template: Template;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
