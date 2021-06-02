import { Field, InputType } from "type-graphql";
import {
  Entity,
  Column,
} from "typeorm";
import {exoDetailsInput} from "./exoDetailInput";

@InputType()
@Entity()
export class WorkoutDetailInput {
  // @Field()
  // @Column()
  // workoutId!: number;

  @Field()
  @Column()
  exoId!: string;

  @Field(() => [exoDetailsInput])
  @Column('jsonb')
  exoDetail!: exoDetailsInput[]; 

}
