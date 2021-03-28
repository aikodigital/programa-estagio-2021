import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "stops" })
export default class Stop {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}
