import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import {TemplateDetail} from "./TemplateDetail";

@ObjectType()
@Entity()
export class Template extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  userId!: number;

  @Field()
  @Column( )
  name: string;

  @Field()
  @Column()
  templateType!: string;

  @Field(() => [TemplateDetail])
  @OneToMany(() => TemplateDetail, (templateDetail) => templateDetail.template)
  templateDetails: TemplateDetail[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
