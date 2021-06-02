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
import {WorkoutDetail} from "./WorkoutDetail";

@ObjectType()
@Entity()
export class Workout extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  userId!: number;

  @Field()
  @Column()
  workoutDt!: Date;

  @Field()
  @Column()
  workoutType!: string;

  @Field(() => String, {nullable:true})
  @Column({ nullable: true } )
  workoutDesc: string;

  @Field(() => [WorkoutDetail], {nullable: true})
  @OneToMany(() => WorkoutDetail, (workoutDetail) => workoutDetail.workout)
  workoutDetails: WorkoutDetail[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
