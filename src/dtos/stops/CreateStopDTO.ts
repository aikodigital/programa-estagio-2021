export default interface ICreateStopRquestDTO {
  name: string;
  latitude: number;
  longitude: number;
  lines?: Array<number>;
}
