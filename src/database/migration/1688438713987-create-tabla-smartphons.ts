import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablaSmartphons1688438713987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'smartphones',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nombre',
            type: 'varchar',
          },
          {
            name: 'modelo',
            type: 'varchar',
          },
          {
            name: 'precio_referencial',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'precio_venta',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'ano_modelo',
            type: 'int',
          },
          {
            name: 'creation_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'estado',
            type: 'boolean',
            default: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('smartphones');
  }
}
