import { getRepository } from "typeorm";
import IVehicleByLineRepository from "../IVehiclesByLineRepository";
import Vehicle from "../../../entities/Vehicle";

export default class VehicleByLineRepositoryPostgres
  implements IVehicleByLineRepository {
  async getVehiclesByLine(lineId: number): Promise<Array<Vehicle>> {
    try {
      const vehicles = await getRepository(Vehicle).find({ lineId });
      return vehicles;
    } catch (error) {
      throw new Error("Error");
    }
  }
}
