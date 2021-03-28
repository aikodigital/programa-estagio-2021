import GetLinesByStopUseCase from "./GetLinesByStopUseCase";
import LinesByStopRepositoryPostgres from "../../repositories/linesByStops/implementations/LinesByStopRepositoryPostgres";

const linesByStopRepositoryPostgres = new LinesByStopRepositoryPostgres();
const getLinesByStopUseCase = new GetLinesByStopUseCase(
  linesByStopRepositoryPostgres
);
export { getLinesByStopUseCase };
