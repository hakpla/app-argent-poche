import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Compte } from './compte.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @OneToMany(() => Compte, (compte) => compte.owner)
  comptesOwned: Compte[]

  @OneToMany(() => Compte, (compte) => compte.user)
  comptesUsed: Compte[]
}

