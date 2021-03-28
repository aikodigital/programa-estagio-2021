import { getManager, getRepository } from "typeorm";
import Stop from "../../../entities/Stop";
import IStopRepository from "../IStopRepository";

export default class StopRepositoryPostgres implements IStopRepository {
  constructor() {}

  // async findByLatitudeAndLongitude(
  //   latitude: number,
  //   longitude: number
  // ): Promise<Stop[]> {
  //   try {
  //     const stopExists = await getRepository(Stop).find({
  //       where: { latitude, longitude },
  //     });
  //     return stopExists;
  //   } catch (error) {
  //     throw new Error("");
  //   }
  // }

  async save(stop: Stop, lines?: Array<number>): Promise<Stop> {
    // const transactionManager = await connection.transaction();
    try {
      // const stopStored = await transactionManager("stops")
      //   .insert({
      //     name: stop.name,
      //     latitude: stop.latitude,
      //     longitude: stop.longitude,
      //   })
      //   .returning("id");
      // const stop_id = stopStored[0];
      // const linesOfThisStopToStore = lines
      //   ? lines.map((line: number) => ({
      //       line_id: Number(line),
      //       stop_id,
      //     }))
      //   : [];

      const stored = await getManager().transaction(
        async (transactionManager) => {
          const stopStored = await transactionManager.save(Stop, stop);
          const stopId = stopStored.id;

          const linesOfThisStopToStore = lines
            ? lines.map((line: number) => ({
                line_id: Number(line),
                stop_id: stopId,
              }))
            : [];
          await transactionManager.insert("stop_lines", linesOfThisStopToStore);
          return stopStored;
        }
      );
      return stored;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async fildAll(): Promise<Array<Stop>> {
    try {
      const stops = await getRepository(Stop).find();
      return stops;
    } catch (error) {
      throw new Error("An error ocurred when try get stops");
    }
  }

  async findById(stopId: number): Promise<Stop> {
    try {
      const stop = await getRepository(Stop).findOne({ id: stopId });
      return stop;
    } catch (error) {
      throw new Error("An error ocurred when try get stop");
    }
  }

  async update(stop: Stop) {
    try {
      const updated = await getRepository(Stop)
        .createQueryBuilder()
        .update()
        .set({
          name: stop.name,
          latitude: stop.latitude,
          longitude: stop.longitude,
        })
        .where("id=:id", { id: stop.id })
        .returning("id, name, latitude, longitude")
        .execute();

      console.log(updated);
      return updated.raw[0];
    } catch (error) {
      throw new Error("An error ocurred when try update stop");
    }
  }

  async delete(stopId: number): Promise<void> {
    try {
      await getRepository(Stop).delete({ id: stopId });
    } catch (error) {
      throw new Error("Can not delete");
    }
  }
}
