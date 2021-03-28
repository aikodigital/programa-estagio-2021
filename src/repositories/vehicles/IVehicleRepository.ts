import Vehicle from "../../entities/Vehicle";

export default interface IVehicleRepository {
  save(vehicle: Vehicle): Promise<Vehicle>;
  findAll(): Promise<Array<Vehicle>>;
  findById(vehicleId: number): Promise<Vehicle>;
  update(vehicle: Vehicle): Promise<Vehicle>;
  delete(vehicleId: number): Promise<void>;
}
