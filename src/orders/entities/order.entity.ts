import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentMethods } from '../../enums/payment-methods.enum';
import { Client } from '../../clients/entities/client.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: PaymentMethods,
    default: PaymentMethods.MONEY,
  })
  payment_method: PaymentMethods;

  @Column()
  observation: string;

  @ManyToOne(() => Client, (client) => client.orders)
  client: Client;
}
