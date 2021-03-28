import CreateStopUseCase from "./CreateStopUseCase";
import GetAllStopsUseCase from "./GetAllStopsUseCase";
import GetOneStopUseCase from "./GetOneStopUseCase";
import UpdateStopUseCase from "./UpdateStopUseCase";
import DeleteStopUseCase from "./DeleteStopUseCase";

import StopRepositoryPostgres from "../../repositories/stops/implementations/StopRepositoryPostgres";

const stopRepositoryPostgres = new StopRepositoryPostgres();

const createStopUseCase = new CreateStopUseCase(stopRepositoryPostgres);
const getAllStopsUseCase = new GetAllStopsUseCase(stopRepositoryPostgres);
const getOneStopUseCase = new GetOneStopUseCase(stopRepositoryPostgres);
const updateStopUseCase = new UpdateStopUseCase(stopRepositoryPostgres);
const deleteStopUseCase = new DeleteStopUseCase(stopRepositoryPostgres);

export {
  createStopUseCase,
  getAllStopsUseCase,
  getOneStopUseCase,
  updateStopUseCase,
  deleteStopUseCase,
};
