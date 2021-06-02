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
import {GenericWorkoutDetail} from "./GenericWorkoutDetail";

@ObjectType()
@Entity()
export class GenericWorkout extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  trainingType!: string;

  @Field()
  @Column()
  trainingFrequency!: number;

  @Field(() => [GenericWorkoutDetail])
  @OneToMany(() => GenericWorkoutDetail, (genericWorkoutDetail) => genericWorkoutDetail.genericWorkout)
  genericWorkoutDetails: GenericWorkoutDetail[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
