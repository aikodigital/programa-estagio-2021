import Line from "../../entities/Line";

export default interface ILineRepository {
  save(Line: Line, stops?: Array<number>): Promise<Line>;
  fildAll(): Promise<Array<Line>>;
  findById(lineId: number): Promise<Line>;
  update(Line: Line): Promise<Line>;
  delete(lineId: number): Promise<void>;
}
