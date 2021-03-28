import { Request, Response } from "express";
import CreateLineUseCase from "../../useCases/lines/CreateLineUseCase";
import GetAllLinesUseCase from "../../useCases/lines/GetAllLinesUseCase";
import GetOneLineUseCase from "../../useCases/lines/GetOneLineUseCase";
import UpdateLineUseCase from "../../useCases/lines/UpdateLineUseCase";
import DeleteLineUseCase from "../../useCases/lines/DeleteLineUseCase";
import {
  createLineSchemaValidator,
  updateLineSchemaValidator,
} from "../../validators/lineValidator";

class LineController {
  constructor(
    private createLineUseCase: CreateLineUseCase,
    private getAllLinesUseCase: GetAllLinesUseCase,
    private getOneLineUseCase: GetOneLineUseCase,
    private updateLineUseCase: UpdateLineUseCase,
    private deleteLineUseCase: DeleteLineUseCase
  ) {}

  async store(request: Request, response: Response) {
    const { name, stops } = request.body;
    if (!(await createLineSchemaValidator({ name, stops }))) {
      return response.status(400).json({ error: "Exists an incorrect value!" });
    }
    try {
      const line = await this.createLineUseCase.execute({ name, stops });
      return response.status(201).json(line);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const lines = await this.getAllLinesUseCase.execute();
      return response.json(lines);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async getbyId(request: Request, response: Response) {
    const { lineId } = request.params;

    try {
      const line = await this.getOneLineUseCase.execute({ id: Number(lineId) });
      if (!line) return response.status(404).send();

      return response.json(line);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }

  async update(request: Request, response: Response) {
    const { lineId } = request.params;
    const { name } = request.body;
    if (!(await updateLineSchemaValidator({ name }))) {
      return response.status(400).json({ error: "Exists an incorrect value!" });
    }
    try {
      const updated = await this.updateLineUseCase.execute({
        name,
        id: Number(lineId),
      });
      return response.json(updated);
    } catch (error) {
      return response
        .status(400)
        .json({ error: "An error occurred while update" });
    }
  }

  async delete(request: Request, response: Response) {
    const { lineId } = request.params;
    try {
      await this.deleteLineUseCase.execute({ id: Number(lineId) });
      return response.send();
    } catch (error) {
      return response
        .status(400)
        .json({ error: "An error occurred while delete" });
    }
  }
}

export default LineController;
