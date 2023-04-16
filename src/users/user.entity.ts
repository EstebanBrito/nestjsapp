import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  uuid: number

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
