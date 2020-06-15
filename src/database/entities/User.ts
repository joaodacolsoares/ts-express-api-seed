import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Photo } from './Photo';

@Entity()
export class User {
  constructor(firstName: string, lastName: string, isActive: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = isActive;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @OneToMany(type => Photo, photo => photo.owner)
  photos: Photo[];
}
