import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStops1616947346320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "stops",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
          },
          {
            name: "name",
            isNullable: false,
            type: "varchar",
          },
          {
            name: "latitude",
            type: "float",
            isNullable: false,
          },
          {
            name: "longitude",
            type: "float",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE if exists stops CASCADE");
  }
}
