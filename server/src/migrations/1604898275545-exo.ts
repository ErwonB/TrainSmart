import { MigrationInterface, QueryRunner } from "typeorm";

export class exo1604898275545 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(1, 'Développé couché','PECS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(1, 'Bench Press','CHEST', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(2, 'Développé incliné avec haltères','PECS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(2, 'Incline dumbbell press','CHEST', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(3, 'Pull-over','PECS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(3, 'Pull-over','CHEST', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(4, 'Rowing mentons prise large','EPAULES', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(4, 'Upright row','SHOULDER', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(5, 'Elévations latérales assis','EPAULES', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(5, 'Seated lateral raise','SHOULDER', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(6, 'Crunch','ABDOS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(6, 'Crunch','ABS', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(7, 'Traction poulie haute prise large devant et en pronation','DOS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(7, 'Pull-up','BACK', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(8, 'Rowing haltère un bras','DOS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(8, 'One Arm Dumbbell Row','BACK', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(9, 'Rowing assis poulie basse, prise large pronation','DOS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(9, 'Seated Row','BACK', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(10, 'Soulevé de terre','DOS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(10, 'Deadlift','BACK', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(11, 'Oiseau sur banc incliné','EPAULES', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(11, 'Reverse Fly','SHOULDER', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(12, 'Presse à cuisse','JAMBE', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(12, 'Leg Press','LEG', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(13, 'Fentes à la barre guidée','JAMBE', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(13, 'Smith Machine Lunges','LEG', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(14, 'Soulevé de terre jambes semi-tendues','JAMBE', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(14, 'Romanian Deadlift','LEG', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(15, 'Leg curl assis','JAMBE', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(15, 'Seated Leg curl','LEG', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(16, 'Mollet à la presse','JAMBE', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(16, 'Calf Press','LEG', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(17, 'Gainage','ABDOS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(17, 'Plank','ABS', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(18, 'Traction supination','BRAS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(18, 'Chin-up','ARM', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(19, 'Curl incliné','BRAS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(19, 'Incline Dumbbell Curl','ARM', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(20, 'Curl pupitre un bras','BRAS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(20, 'Dumbbell Preacher Curl','ARM', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(21, 'Dips','BRAS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(21, 'Dips','ARM', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(22, 'Magic tRYCeps à la barre','BRAS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(22, 'Magic tRYCeps','ARM', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(23, 'Extension triceps poulie haute, prise pronation','BRAS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(23, 'Rope Push Down','ARM', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(24, 'Gainage oblique','ABDOS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(24, 'Side Plank','ABS', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(25, 'Enroulement de bassin au sol','ABDOS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(25, 'Reverse Crunch','ABS', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(26, 'Extension nuque à un bras','BRAS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(26, 'One-Arm Overhead Extension','ARM', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(27, 'Curl prise marteau avec haltères','BRAS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(27, 'Dumbbell Curl Neutral Grip','ARM', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(28, 'Développé couché avec haltères','PECS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(28, 'Dumbbell Bench press','CHEST', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(29, 'Hip Thrust','JAMBE', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(29, 'Hip Thrust','LEG', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(30, 'Tirage poulie haute en supination','BRAS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(30, 'Chin-up Pulley','ARM', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(31, 'Développé couché prise serrée','BRAS', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(31, 'Close-grip Bench Press','ARM', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(32, 'Squat arrière','JAMBE', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(32, 'Back Squat','LEG', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(33, 'Fentes avec haltères','JAMBE', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(33, 'Dumbbell Lunges','LEG', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(34, 'Extension lombaire','JAMBE', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(34, 'Lumbar Extension','LEG', 'EN');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(35, 'Mollet sur marche à une jambe','JAMBE', 'FR');
insert into exo("exoId", "exoDesc", "bodyPart", "langCd") values(35, 'One Leg Stair Calf Raise','LEG', 'EN');
        `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
