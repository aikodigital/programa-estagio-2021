import { getManager, getRepository } from "typeorm";
import ILineRepository from "../ILineRepository";
import Line from "../../../entities/Line";

export default class LineRepositoryPostgres implements ILineRepository {
  async save(line: Line, stops: Array<number>): Promise<Line> {
    // const transactionManager = await connection.transaction();
    try {
      const stored = await getManager().transaction(
        async (transactionManager) => {
          const lineStored = await transactionManager.save(Line, line);
          const lineId = lineStored.id;
          const stopsOfThisLineToStore = stops.map((stop: number) => ({
            lineId,
            stopId: Number(stop),
          }));
          await transactionManager.insert("stop_lines", stopsOfThisLineToStore);
          return lineStored;
        }
      );

      return stored;

      //   const lineStored = await transactionManager("lines")
      //     .insert({ name: line.name })
      //     .returning("id");
      //   const line_id = lineStored[0];
      //   const stopsOfThisLineToStore = stops.map((stop: number) => ({
      //     line_id,
      //     stop_id: Number(stop),
      //   }));
      //   await transactionManager("stop_line").insert(stopsOfThisLineToStore);
      //   await transactionManager.commit();
    } catch (error) {
      throw new Error("An error occurred while storing in database");
    }
  }

  async fildAll(): Promise<Line[]> {
    try {
      // const lines = await connection("lines").select("id", "name");
      const lines = await getRepository(Line).find();
      return lines;
    } catch (error) {
      throw new Error("An error occurred while searching in database.");
    }
  }

  async findById(lineId: number): Promise<Line> {
    try {
      const lines = await getRepository(Line).findOne({ id: lineId });
      return lines;
    } catch (error) {
      throw new Error("An error occurred while searching in database.");
    }
  }

  async update(line: Line) {
    try {
      const updated = await getRepository(Line)
        .createQueryBuilder()
        .update()
        .set({
          name: line.name,
        })
        .where("id=:id", { id: line.id })
        .returning("id, name")
        .execute();

      return updated.raw[0];
    } catch (error) {
      throw new Error("An error ocurred when try update line");
    }
  }

  async delete(lineId: number): Promise<void> {
    try {
      await getRepository(Line)
        .createQueryBuilder()
        .delete()
        .where("id=:id", { id: lineId })
        .execute();
    } catch (error) {
      throw new Error("An error ocurred when try update line");
    }
  }
}
