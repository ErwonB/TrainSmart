import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  PrimaryColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Profile extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id!: number;

  @Field()
  @Column({ default : 'EN' })
  lang_cd!: string;

  @Field()
  @Column()
  trainingFrequency!: number;

  @Field()
  @Column()
  trainingType!: string;

  @Field()
  @Column({ default: 'M' })
  sex!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
