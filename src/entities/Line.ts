import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "lines" })
export default class Line {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column()
  public name: string;
}
