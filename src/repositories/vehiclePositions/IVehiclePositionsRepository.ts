import VehiclePosition from "../../entities/VehiclePosition";

export default interface IVehiclePositionRepository {
  save(position: VehiclePosition): Promise<VehiclePosition>;
  findAll(): Promise<Array<VehiclePosition>>;
  findById(vehicleId: number): Promise<VehiclePosition>;
  update(position: VehiclePosition): Promise<VehiclePosition>;
  delete(vehicleId: number): Promise<void>;
}
