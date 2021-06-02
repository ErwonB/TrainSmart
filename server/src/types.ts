import { Request, Response } from "express";
import { Redis } from "ioredis";
import { createWorkoutLoader } from "./utils/createWorkoutLoader";
import { createTemplateLoader } from "./utils/createTemplateLoader";
import { createGenericWorkoutLoader } from "./utils/createGenericWorkoutLoader";

export type MyContext = {
  req: Request & { session: Express.Session };
  redis: Redis;
  res: Response;
  workoutLoader: ReturnType<typeof createWorkoutLoader>;
  templateLoader: ReturnType<typeof createTemplateLoader>;
  genericWorkoutLoader: ReturnType<typeof createGenericWorkoutLoader>;
};
