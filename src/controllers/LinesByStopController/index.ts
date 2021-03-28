import LinesByStopController from "./LinesByStopController";
import { getLinesByStopUseCase } from "../../useCases/linesByStop";
import { getOneStopUseCase } from "../../useCases/stops";

const linesByStopController = new LinesByStopController(
  getLinesByStopUseCase,
  getOneStopUseCase
);

export default linesByStopController;
