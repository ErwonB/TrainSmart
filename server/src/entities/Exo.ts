import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
} from "typeorm";

@ObjectType()
@Entity()
export class Exo extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  exoId!: number;

  @Field()
  @Column()
  exoDesc!: string;

  @Field()
  @Column()
  langCd!: string;

  @Field()
  @Column()
  bodyPart!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
