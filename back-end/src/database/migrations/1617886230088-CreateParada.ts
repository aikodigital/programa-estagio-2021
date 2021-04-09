import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateParada1617886230088 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Parada',
        columns: [
          {
            name: 'Id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'Name',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'Latitude',
            type: 'double precision',
          },
          {
            name: 'Longitude',
            type: 'double precision',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Parada');
  }
}
