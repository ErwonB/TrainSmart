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
import {GenericWorkout} from "./GenericWorkout";
import {exoDetails} from "./exoDetail";

@ObjectType()
@Entity()
export class GenericWorkoutDetail extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  workoutType!: string;

  @Field()
  @Column()
  sessionNb!: number;

  @Field()
  @Column()
  exoId!: number;

  @Field(() => [exoDetails])
  @Column('jsonb')
  exoDetail!: exoDetails[]; 

  @Field()
  @Column()
  genericWorkoutId: number;

  @Field(() => GenericWorkout)
  @ManyToOne(() => GenericWorkout, (genericWorkout) => genericWorkout.genericWorkoutDetails)
  genericWorkout: GenericWorkout;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
