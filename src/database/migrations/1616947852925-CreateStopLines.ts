import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateStopLines1616947852925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "stop_lines",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "stop_id",
            type: "bigint",
          },
          {
            name: "line_id",
            type: "bigint",
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
    await queryRunner.createForeignKey(
      "stop_lines",
      new TableForeignKey({
        columnNames: ["stop_id"],
        referencedTableName: "stops",
        referencedColumnNames: ["id"],
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "stop_lines",
      new TableForeignKey({
        columnNames: ["line_id"],
        referencedTableName: "lines",
        referencedColumnNames: ["id"],
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE if exists stop_lines CASCADE");
  }
}
