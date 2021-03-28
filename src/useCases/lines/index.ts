import CreateLineUseCase from "./CreateLineUseCase";
import GetAllLinesUseCase from "./GetAllLinesUseCase";
import GetOneLineUseCase from "./GetOneLineUseCase";
import UpdateLineUseCase from "./UpdateLineUseCase";
import DeleteLineUseCase from "./DeleteLineUseCase";

import LineRepositoryPostgres from "../../repositories/lines/implementations/LineRepositoryPostgres";

const lineRepositoryPostgres = new LineRepositoryPostgres();

const createLineUseCase = new CreateLineUseCase(lineRepositoryPostgres);
const getAllLinesUseCase = new GetAllLinesUseCase(lineRepositoryPostgres);
const getOneLineUseCase = new GetOneLineUseCase(lineRepositoryPostgres);
const updateLineUseCase = new UpdateLineUseCase(lineRepositoryPostgres);
const deleteLineUseCase = new DeleteLineUseCase(lineRepositoryPostgres);

export {
  createLineUseCase,
  getAllLinesUseCase,
  getOneLineUseCase,
  updateLineUseCase,
  deleteLineUseCase,
};
