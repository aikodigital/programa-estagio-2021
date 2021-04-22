import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePosicaoVeiculo1618959646118 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'posicaoVeiculos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'latitude',
            type: 'decimal',
          },
          {
            name: 'longitude',
            type: 'decimal',
          },
          {
            name: 'veiculoId',
            type: 'uuid',
            isNullable: false,
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
        foreignKeys: [
          {
            name: 'posicaoVeiculo',
            referencedTableName: 'veiculos',
            referencedColumnNames: ['id'],
            columnNames: ['id'],
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posicaoVeiculos');
  }
}
