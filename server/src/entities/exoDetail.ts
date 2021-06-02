import {ObjectType, Field } from "type-graphql";

@ObjectType()
export class exoDetails {
// export interface exoDetails {
    @Field()
    sets: number;
    @Field()
    reps: number;
    @Field()
    weight: number;
    @Field()
    grade: number;
    @Field({nullable: true})
    rest: number;
    @Field({nullable: true})
    feedback: string;
}
