import GetStopsByPositionUseCase from "./GetStopsByPositionUseCase";
import StopsByPositionRepositoryPostgres from "../../repositories/stopsByPosition/implementations/StopsByPositionRepositoryPostgres";

const stopsByPositionRepositoryPostgres = new StopsByPositionRepositoryPostgres();

const getStopsByPositionUseCase = new GetStopsByPositionUseCase(
  stopsByPositionRepositoryPostgres
);

export { getStopsByPositionUseCase };
