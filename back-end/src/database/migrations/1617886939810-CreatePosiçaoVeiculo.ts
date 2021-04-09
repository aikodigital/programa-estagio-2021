import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class CreatePosiçaoVeiculo1617886939810 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'PosiçãoVeiculo',
        columns: [
          {
            name: 'Id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
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
            name: 'VeiculoId',
            type: 'bigint',
            isNullable: true,
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

    await queryRunner.createForeignKey(
      'PosiçãoVeiculo',
      new TableForeignKey({
        name: 'posição',
        columnNames: ['VeiculoId'],
        referencedColumnNames: ['Id'],
        referencedTableName: 'Veiculo',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('PosiçãoVeiculo', 'posição');
    await queryRunner.dropTable('PosiçãoVeiculo');
  }
}
