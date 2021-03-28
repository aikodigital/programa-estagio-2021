import StopsByPositionController from "./StopsByPositionController";
import { getStopsByPositionUseCase } from "../../useCases/stopsByPosition";

const stopsByPositionController = new StopsByPositionController(
  getStopsByPositionUseCase
);

export default stopsByPositionController;
