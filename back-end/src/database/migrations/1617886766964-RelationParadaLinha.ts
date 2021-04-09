import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RelationParadaLinha1617886766964 implements MigrationInterface {
    name = 'RelationParadaLinha1617886766964'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE TABLE "linha_paradas__parada" ("linhaId" integer NOT NULL, "paradaId" integer NOT NULL, CONSTRAINT "PK_64f4a1009ce08a010efece94287" PRIMARY KEY ("linhaId", "paradaId"))`);
      await queryRunner.query(`CREATE INDEX "IDX_bcee3514a318b24d79a167eb5f" ON "linha_paradas__parada" ("linhaId") `);
      await queryRunner.query(`CREATE INDEX "IDX_abaf50c8d5d5480792d92d7f13" ON "linha_paradas__parada" ("paradaId") `);
      await queryRunner.query(`ALTER TABLE "Parada" DROP CONSTRAINT "PK_528943c92968487a97b972ccc76"`);
      await queryRunner.query(`ALTER TABLE "Parada" DROP COLUMN "Id"`);
      await queryRunner.query(`ALTER TABLE "Parada" ADD "Id" SERIAL NOT NULL`);
      await queryRunner.query(`ALTER TABLE "Parada" ADD CONSTRAINT "PK_528943c92968487a97b972ccc76" PRIMARY KEY ("Id")`);
      await queryRunner.query(`ALTER TABLE "Parada" DROP CONSTRAINT "UQ_12c8fbcbfe3a5d8c40f05553b67"`);
      await queryRunner.query(`ALTER TABLE "Linha" DROP CONSTRAINT "PK_93445cceb0f6961b442cef88cf8"`);
      await queryRunner.query(`ALTER TABLE "Linha" DROP COLUMN "Id"`);
      await queryRunner.query(`ALTER TABLE "Linha" ADD "Id" SERIAL NOT NULL`);
      await queryRunner.query(`ALTER TABLE "Linha" ADD CONSTRAINT "PK_93445cceb0f6961b442cef88cf8" PRIMARY KEY ("Id")`);
      await queryRunner.query(`ALTER TABLE "Linha" DROP CONSTRAINT "UQ_d9387a0818aa7ad45abfcfedae4"`);
      await queryRunner.query(`ALTER TABLE "linha_paradas__parada" ADD CONSTRAINT "FK_bcee3514a318b24d79a167eb5f1" FOREIGN KEY ("linhaId") REFERENCES "Linha"("Id") ON DELETE CASCADE ON UPDATE NO ACTION`);
      await queryRunner.query(`ALTER TABLE "linha_paradas__parada" ADD CONSTRAINT "FK_abaf50c8d5d5480792d92d7f13b" FOREIGN KEY ("paradaId") REFERENCES "Parada"("Id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "linha_paradas__parada" DROP CONSTRAINT "FK_abaf50c8d5d5480792d92d7f13b"`);
      await queryRunner.query(`ALTER TABLE "linha_paradas__parada" DROP CONSTRAINT "FK_bcee3514a318b24d79a167eb5f1"`);
      await queryRunner.query(`ALTER TABLE "Linha" ADD CONSTRAINT "UQ_d9387a0818aa7ad45abfcfedae4" UNIQUE ("Name")`);
      await queryRunner.query(`ALTER TABLE "Linha" DROP CONSTRAINT "PK_93445cceb0f6961b442cef88cf8"`);
      await queryRunner.query(`ALTER TABLE "Linha" DROP COLUMN "Id"`);
      await queryRunner.query(`ALTER TABLE "Linha" ADD "Id" BIGSERIAL NOT NULL`);
      await queryRunner.query(`ALTER TABLE "Linha" ADD CONSTRAINT "PK_93445cceb0f6961b442cef88cf8" PRIMARY KEY ("Id")`);
      await queryRunner.query(`ALTER TABLE "Parada" ADD CONSTRAINT "UQ_12c8fbcbfe3a5d8c40f05553b67" UNIQUE ("Name")`);
      await queryRunner.query(`ALTER TABLE "Parada" DROP CONSTRAINT "PK_528943c92968487a97b972ccc76"`);
      await queryRunner.query(`ALTER TABLE "Parada" DROP COLUMN "Id"`);
      await queryRunner.query(`ALTER TABLE "Parada" ADD "Id" BIGSERIAL NOT NULL`);
      await queryRunner.query(`ALTER TABLE "Parada" ADD CONSTRAINT "PK_528943c92968487a97b972ccc76" PRIMARY KEY ("Id")`);
      await queryRunner.query(`DROP INDEX "IDX_abaf50c8d5d5480792d92d7f13"`);
      await queryRunner.query(`DROP INDEX "IDX_bcee3514a318b24d79a167eb5f"`);
      await queryRunner.query(`DROP TABLE "linha_paradas__parada"`);
    }
}
