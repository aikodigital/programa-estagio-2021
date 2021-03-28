import { getRepository } from "typeorm";
import IVehiclePositionRepository from "../IVehiclePositionsRepository";
import VehiclePosition from "../../../entities/VehiclePosition";

export default class VehicleRepositoryPostgres
  implements IVehiclePositionRepository {
  constructor() {}

  async save(position: VehiclePosition) {
    try {
      const positionReturned = await getRepository(VehiclePosition).save(
        position
      );
      return positionReturned;
    } catch (error) {
      throw new Error();
    }
  }

  async findAll(): Promise<Array<VehiclePosition>> {
    try {
      const positions = await getRepository(VehiclePosition).find();
      return positions;
    } catch (error) {
      throw new Error("An error ocurred when try get positions");
    }
  }

  async findById(vehicleId: number): Promise<VehiclePosition> {
    try {
      const position = await getRepository(VehiclePosition).findOne({
        vehicleId,
      });
      return position;
    } catch (error) {
      throw new Error("An error ocurred when try get position");
    }
  }

  async update(position: VehiclePosition) {
    try {
      const vehicle = await getRepository(VehiclePosition)
        .createQueryBuilder()
        .update()
        .set({
          latitude: position.latitude,
          longitude: position.longitude,
        })
        .where("vehicle_id=:vehicleId", { vehicleId: position.vehicleId })
        .returning("id, vehicle_id, latitude, longitude")
        .execute();

      return vehicle.raw[0];
    } catch (error) {
      throw new Error("An error ocurred when try update position");
    }
  }

  async delete(vehicleId: number): Promise<void> {
    try {
      await getRepository(VehiclePosition).delete({ vehicleId });
    } catch (error) {
      throw new Error("Can not delete");
    }
  }
}
