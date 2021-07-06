import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';
import { PaymentMethods } from '../enums/payment-methods.enum';

export class createOrdersTable1625117125234 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'payment_method',
            type: 'enum',
            enum: [
              PaymentMethods.MONEY,
              PaymentMethods.CARD,
              PaymentMethods.CHECK,
            ],
            enumName: 'payment_method',
          },
          {
            name: 'observation',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'client_id',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        columnNames: ['client_id'],
        referencedTableName: 'clients',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
