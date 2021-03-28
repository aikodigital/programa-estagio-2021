export default interface ICreateStopLineRequestDTO {
  stopLines: Array<{
    stopId: number;
    lineId: number;
  }>;
}
