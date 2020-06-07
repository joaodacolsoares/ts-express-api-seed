import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

  constructor(firstName: string, lastName: string, isActive: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = isActive;
  }

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}
