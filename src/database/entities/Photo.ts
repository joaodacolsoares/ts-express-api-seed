import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from './User';

@Entity()
export class Photo {
  constructor(filename: string, height: number, width: number, owner: User) {
    this.filename = filename;
    this.height = height;
    this.width = width;
    this.owner = owner;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  height: number;

  @Column()
  width: number;

  @ManyToOne(type => User, user => user.photos)
  owner: User;
}