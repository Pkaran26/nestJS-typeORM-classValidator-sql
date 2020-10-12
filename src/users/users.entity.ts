import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 10
  })
  firstName: string;

  @Column({
    length: 10
  })
  lastName: string;

  @Column({
    length: 50
  })
  @Index({ unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;
}
