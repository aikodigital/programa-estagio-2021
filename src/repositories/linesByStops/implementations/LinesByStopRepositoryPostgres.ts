import { getRepository } from "typeorm";
import ILinesByStopRepository from "../ILinesByStopsRepository";
import Line from "../../../entities/Line";

export default class LinesByStopRepositoryPostgres
  implements ILinesByStopRepository {
  async getLinesPerStopRepository(stopId: number): Promise<Array<Line>> {
    try {
      //   const linesPerStop = await connection("stop_line")
      //     .join("lines", "stop_line.line_id", "=", "lines.id")
      //     .where("stop_line.stop_id", Number(stopId))
      //     .select("lines.*");

      const linesPerStop: Line[] = await getRepository(Line)
        .createQueryBuilder("lines")
        .select("lines.*")
        .innerJoin("stop_lines", "stop_lines", "lines.id = stop_lines.line_id")
        .where("stop_lines.stop_id = :stop_id", { stop_id: stopId })
        .execute();

      return linesPerStop;
    } catch (error) {
      throw new Error("Error while search");
    }
  }
}
