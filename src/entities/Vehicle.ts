import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "vehicles" })
export default class Vehicle {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column({ name: "line_id" })
  lineId: number;
}
