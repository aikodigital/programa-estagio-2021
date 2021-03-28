import Stop from "../../entities/Stop";

export default interface IStopRepository {
  save(stop: Stop, lines?: Array<number>): Promise<Stop>;
  fildAll(): Promise<Array<Stop>>;
  // findByLatitudeAndLongitude(latitude: number, longitude: number): Promise<Stop>;
  findById(stopId: number): Promise<Stop>;
  update(stop: Stop): Promise<Stop>;
  delete(stopId: number): Promise<void>;
}
