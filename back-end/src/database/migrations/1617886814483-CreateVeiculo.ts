import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class CreateVeiculo1617886814483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Veiculo',
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
            name: 'Modelo',
            type: 'varchar',
          },
          {
            name: 'LinhaId',
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
      'Veiculo',
      new TableForeignKey({
        name: 'VeiculoLinha',
        columnNames: ['LinhaId'],
        referencedColumnNames: ['Id'],
        referencedTableName: 'Linha',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('Veiculo', 'VeiculoLinha');
    await queryRunner.dropTable('Veiculo');
  }
}
