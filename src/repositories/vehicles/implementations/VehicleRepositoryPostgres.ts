import { getRepository } from "typeorm";
import IVehicleRepository from "../IVehicleRepository";
import Vehicle from "../../../entities/Vehicle";

export default class VehicleRepositoryPostgres implements IVehicleRepository {
  constructor() {}

  async save(vehicle: Vehicle) {
    try {
      const inserted = await getRepository(Vehicle).save(vehicle);
      return inserted;
    } catch (error) {
      throw new Error("Could not store vehicle");
    }
  }

  async findAll(): Promise<Array<Vehicle>> {
    const vehicles = await getRepository(Vehicle).find();
    return vehicles;
  }

  async findById(vehicleId: number): Promise<Vehicle> {
    const vehicles = await getRepository(Vehicle).findOne({ id: vehicleId });

    return vehicles;
  }

  async update(vehicle: Vehicle) {
    try {
      const updated = await getRepository(Vehicle)
        .createQueryBuilder()
        .update()
        .set({
          name: vehicle.name,
          model: vehicle.model,
          lineId: vehicle.lineId,
        })
        .where("id=:id", { id: vehicle.id })
        .returning("id, name, model, line_id")
        .execute();
      return updated.raw[0];
    } catch (error) {
      throw new Error("Error");
    }
  }

  async delete(vehicleId: number): Promise<void> {
    try {
      await getRepository(Vehicle).delete({ id: vehicleId });
    } catch (error) {
      throw new Error("Can not delete");
    }
  }
}
