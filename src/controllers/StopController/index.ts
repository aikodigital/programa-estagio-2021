import StopController from "./StopController";
import {
  createStopUseCase,
  getAllStopsUseCase,
  getOneStopUseCase,
  updateStopUseCase,
  deleteStopUseCase,
} from "../../useCases/stops";

const stopController = new StopController(
  createStopUseCase,
  getAllStopsUseCase,
  getOneStopUseCase,
  updateStopUseCase,
  deleteStopUseCase
);

export default stopController;
