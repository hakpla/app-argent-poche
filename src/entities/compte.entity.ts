import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Compte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  total: number;

  @Column({ default: 0 })
  salary: number;

  @ManyToOne(() => User, (user) => user.comptesOwned)
  owner: User

  @ManyToOne(() => User, (user) => user.comptesUsed)
  user: User


  
}