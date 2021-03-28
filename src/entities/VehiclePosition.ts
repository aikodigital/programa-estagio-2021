import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "positions" })
export default class VehiclePosition {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "vehicle_id" })
  vehicleId: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}
