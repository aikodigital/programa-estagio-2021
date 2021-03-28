import LineController from "./LineController";
import {
  createLineUseCase,
  getAllLinesUseCase,
  getOneLineUseCase,
  updateLineUseCase,
  deleteLineUseCase,
} from "../../useCases/lines";

const lineController = new LineController(
  createLineUseCase,
  getAllLinesUseCase,
  getOneLineUseCase,
  updateLineUseCase,
  deleteLineUseCase
);

export default lineController;
