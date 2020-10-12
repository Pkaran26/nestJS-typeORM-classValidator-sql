import { JoinColumn, Entity, Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../users.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  aboutMe: string;

  @Column()
  age: number;

  @OneToOne(type => Users)
  @JoinColumn()
  user: Users;
}
