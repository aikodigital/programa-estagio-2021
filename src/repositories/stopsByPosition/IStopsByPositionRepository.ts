import Stop from "../../entities/Stop";

export default interface IStopsByPositionRepository {
  getStopsByPosition(latitude: number, longitude: number): Promise<Array<Stop>>;
}
