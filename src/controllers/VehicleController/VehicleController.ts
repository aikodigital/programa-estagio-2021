import { Request, Response } from "express";
import CreateVehicleUseCase from "../../useCases/vehicles/CreateVehicleUseCase";
import GetAllVehiclesUseCase from "../../useCases/vehicles/GetAllVehiclesUseCase";
import GetOneVehicleUseCase from "../../useCases/vehicles/GetOneVehicleUseCase";
import UpdateVehicleUseCase from "../../useCases/vehicles/UpdateVehicleUseCase";
import DeleteVehicleUseCase from "../../useCases/vehicles/DeleteVehicleUseCase";
import {
  createVehicleSchemaValidator,
  updateVehicleSchemaValidator,
} from "../../validators/vehicleValidator";

class VehicleController {
  constructor(
    private createVehicleUseCase: CreateVehicleUseCase,
    private getAllVehiclesUseCase: GetAllVehiclesUseCase,
    private getOneVehicleUseCase: GetOneVehicleUseCase,
    private updateVehicleUseCase: UpdateVehicleUseCase,
    private deleteVehicleUseCase: DeleteVehicleUseCase
  ) {}

  async store(request: Request, response: Response): Promise<Response> {
    const { name, model, line_id } = request.body;
    if (!(await createVehicleSchemaValidator({ name, model, line_id }))) {
      return response.status(400).json({ error: "Exists an incorrect value!" });
    }
    try {
      const vehicle = await this.createVehicleUseCase.execute({
        name,
        model,
        lineId: line_id,
      });
      return response.json(vehicle);
    } catch (error) {
      return response.status(500).json({ error });
    }
  }

  async getAll(request: Request, response: Response): Promise<Response> {
    const vehicles = await this.getAllVehiclesUseCase.execute();
    return response.json(vehicles);
  }

  async getbyId(request: Request, response: Response): Promise<Response> {
    const { vehicleId } = request.params;
    const vehicle = await this.getOneVehicleUseCase.execute({
      id: Number(vehicleId),
    });
    if (!vehicle) return response.status(404).send();
    return response.json(vehicle);
  }

  async update(request: Request, response: Response) {
    const { vehicleId } = request.params;
    const { name, model, line_id } = request.body;
    if (!(await updateVehicleSchemaValidator({ name, model, line_id }))) {
      return response.status(400).json({ error: "Exists an incorrect value!" });
    }
    try {
      const updated = await this.updateVehicleUseCase.execute({
        id: Number(vehicleId),
        name,
        model,
        lineId: line_id,
      });
      if (!updated) return response.status(404).send();
      return response.json(updated);
    } catch (error) {
      return response
        .status(400)
        .json({ error: "An error occurred while update" });
    }
  }

  async delete(request: Request, response: Response) {
    const { vehicleId } = request.params;
    try {
      await this.deleteVehicleUseCase.execute({ id: Number(vehicleId) });
      return response.json({ error: "Deleted!" });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "An error occurred while update" });
    }
  }
}

export default VehicleController;
