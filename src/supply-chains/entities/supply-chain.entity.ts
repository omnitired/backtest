import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SupplyChain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  price: number;

  @Column()
  location: string;

  @Column()
  custodian: string;

  @Column('jsonb', { nullable: true })
  events: any[];
}
