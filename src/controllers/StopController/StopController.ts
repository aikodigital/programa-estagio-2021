import { Request, Response } from "express";
import CreateStopUseCase from "../../useCases/stops/CreateStopUseCase";
import GetAllStopsUseCase from "../../useCases/stops/GetAllStopsUseCase";
import GetOneStopUseCase from "../../useCases/stops/GetOneStopUseCase";
import UpdateStopUseCase from "../../useCases/stops/UpdateStopUseCase";
import DeleteStopUseCase from "../../useCases/stops/DeleteStopUseCase";
import {
  createStopSchemaValidator,
  updateStopSchemaValidator,
} from "../../validators/stopValidator";

class StopController {
  constructor(
    private createStopUseCase: CreateStopUseCase,
    private getAllStopsUseCase: GetAllStopsUseCase,
    private getOneStopUseCase: GetOneStopUseCase,
    private updateStopUseCase: UpdateStopUseCase,
    private deleteStopUseCase: DeleteStopUseCase
  ) {}

  async store(request: Request, response: Response) {
    const { name, latitude, longitude, lines } = request.body;
    if (
      !(await createStopSchemaValidator({ name, latitude, longitude, lines }))
    ) {
      return response.status(400).json({ error: "Exists an incorrect value!" });
    }
    try {
      const stop = await this.createStopUseCase.execute({
        name,
        latitude,
        longitude,
        lines,
      });
      return response.json(stop);
    } catch (error) {
      return response.status(500).json({ error: "Could not Store" });
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const stops = await this.getAllStopsUseCase.execute();
      return response.json(stops);
    } catch (error) {
      return response.status(400).json({ error: "Could not fetch stops" });
    }
  }

  async getbyId(request: Request, response: Response) {
    const { stopId } = request.params;
    try {
      const stop = await this.getOneStopUseCase.execute({ id: Number(stopId) });

      if (!stop) return response.status(404).send();

      return response.json(stop);
    } catch (error) {
      return response.status(400).json({ error: "Could not fetch stop" });
    }
  }

  async update(request: Request, response: Response) {
    const { stopId } = request.params;
    const { name, latitude, longitude } = request.body;

    const isValid = await updateStopSchemaValidator({
      name,
      latitude,
      longitude,
    });

    if (!isValid) {
      return response.status(400).json({ error: "Exists an incorrect value!" });
    }

    try {
      const updated = await this.updateStopUseCase.execute({
        name,
        latitude,
        longitude,
        id: Number(stopId),
      });
      if (!updated) return response.status(404).send();
      return response.json(updated);
    } catch (error) {
      return response.status(400).json({ error: "Could not update" });
    }
  }

  async delete(request: Request, response: Response) {
    const { stopId } = request.params;
    try {
      await this.deleteStopUseCase.execute({ id: Number(stopId) });
      return response.json({ message: "Deleted!" });
    } catch (error) {
      return response.status(400).json({ error: "Could not delete" });
    }
  }
}

export default StopController;
