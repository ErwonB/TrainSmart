import { MigrationInterface, QueryRunner } from "typeorm";

export class generic1604898275546 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
		insert into generic_workout (id, "trainingType","trainingFrequency") values (1, 'HALF-BODY', 4);
insert into generic_workout (id, "trainingType","trainingFrequency") values (2, 'SPLIT', 4);
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('CHEST', 1, 1, 1,  '[{"reps": 10, "rest": 90, "sets": 4, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('CHEST', 1, 2, 1,  '[{"reps": 10, "rest": 90, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('CHEST', 1, 3, 1,  '[{"reps": 10, "rest": 60, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('CHEST', 1, 4, 1,  '[{"reps": 10, "rest": 60, "sets": 4, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('CHEST', 1, 5, 1,  '[{"reps": 20, "rest": 60, "sets": 4, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('CHEST', 1, 6, 1,  '[{"reps": 50, "rest": 60, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('BACK', 2, 7, 1,  '[{"reps": 10, "rest": 90, "sets": 4, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('BACK', 2, 8, 1,  '[{"reps": 16, "rest": 45, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('BACK', 2, 9, 1,  '[{"reps": 10, "rest": 90, "sets": 4, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('BACK', 2, 10, 1,  '[{"reps": 10, "rest": 90, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('BACK', 2, 11, 1,  '[{"reps": 20, "rest": 60, "sets": 4, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('BACK', 2, 25, 1,  '[{"reps": 50, "rest": 60, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('LEG', 3, 12, 1,  '[{"reps": 10, "rest": 90, "sets": 4, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('LEG', 3, 13, 1,  '[{"reps": 10, "rest": 45, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('LEG', 3, 14, 1,  '[{"reps": 10, "rest": 90, "sets": 4, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('LEG', 3, 15, 1,  '[{"reps": 10, "rest": 60, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('LEG', 3, 16, 1,  '[{"reps": 20, "rest": 60, "sets": 4, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('LEG', 3, 17, 1,  '[{"reps": 60, "rest": 60, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('ARM', 4, 19, 1,  '[{"reps": 60, "rest": 90, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('ARM', 4, 20, 1,  '[{"reps": 10, "rest": 90, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('ARM', 4, 27, 1,  '[{"reps": 10, "rest": 60, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('ARM', 4, 21, 1,  '[{"reps": 10, "rest": 90, "sets": 4, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('ARM', 4, 22, 1,  '[{"reps": 10, "rest": 90, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('ARM', 4, 26, 1,  '[{"reps": 10, "rest": 60, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
insert into generic_workout_detail("workoutType","sessionNb","exoId","genericWorkoutId", "exoDetail") values ('ARM', 4, 24, 1,  '[{"reps": 60, "rest": 60, "sets": 3, "grade": 0, "weight": 0, "feedback": ""}]' );
        `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
