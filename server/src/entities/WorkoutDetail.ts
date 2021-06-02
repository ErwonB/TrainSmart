import { ObjectType, Field, Int } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import {Workout} from "./Workout";
import {exoDetails} from "./exoDetail";

@ObjectType()
@Entity()
export class WorkoutDetail extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  exoId!: number;

  @Field(() => [exoDetails])
  @Column('jsonb')
  exoDetail!: exoDetails[]; 

  @Field(() => Int)
  @Column()
  workoutId: number;

  @Field(() => Workout)
  @ManyToOne(() => Workout, (workout) => workout.workoutDetails)
  workout: Workout;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
