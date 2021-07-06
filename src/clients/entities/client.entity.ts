import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { Gender } from '../../enums/gender.enum';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.FEMALE,
  })
  gender: Gender;

  @Column()
  email: string;

  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];
}
