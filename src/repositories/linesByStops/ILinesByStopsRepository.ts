import Line from "../../entities/Line";

export default interface ILinesByStopRepository {
  getLinesPerStopRepository(stopId: number): Promise<Array<Line>>;
}
