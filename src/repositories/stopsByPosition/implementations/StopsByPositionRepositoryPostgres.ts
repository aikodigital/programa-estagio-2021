import { getRepository } from "typeorm";
import IStopsByPositionRepository from "../IStopsByPositionRepository";
import Stop from "../../../entities/Stop";

export default class StopsByPositionRepositoryPostgres
  implements IStopsByPositionRepository {
  async getStopsByPosition(
    latitude: number,
    longitude: number
  ): Promise<Array<Stop>> {
    const coordinateAsDistante = `(6371 * acos(cos(radians(${latitude}))
        * cos(radians(latitude))
        * cos(radians(longitude)
        - radians(${longitude}))
        + sin(radians(${latitude}))
        * sin(radians(latitude))))`;

    try {
      const nearbyStops = await getRepository(Stop).find({
        where: `${coordinateAsDistante} < 10`,
      });
      return nearbyStops;
    } catch (error) {
      throw new Error();
    }
  }
}
