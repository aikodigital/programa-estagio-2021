import { Request, Response } from "express";
import CreateVehiclePositionUseCase from "../../useCases/vehiclePositions/CreateVehiclePositionUseCase";
import GetAllVehiclesPositionsUseCase from "../../useCases/vehiclePositions/GetAllVehiclesPositionsUseCase";
import GetOneVehiclePositionUseCase from "../../useCases/vehiclePositions/GetOneVehiclePositionUseCase";
import UpdateVehiclePositionUseCase from "../../useCases/vehiclePositions/UpdateVehiclePositionUseCase";
import DeleteVehiclePositionUseCase from "../../useCases/vehiclePositions/DeleteVehiclePositionUseCase";
import {
  createPositionSchemaValidator,
  updatePositionSchemaValidator,
} from "../../validators/positionValidator";

class VehiclePositionController {
  constructor(
    private createVehiclePositionUseCase: CreateVehiclePositionUseCase,
    private getAllVehiclesPositionsUseCase: GetAllVehiclesPositionsUseCase,
    private getOneVehiclePositionUseCase: GetOneVehiclePositionUseCase,
    private updateVehiclePositionUseCase: UpdateVehiclePositionUseCase,
    private deleteVehiclePositionUseCase: DeleteVehiclePositionUseCase
  ) {}

  async store(request: Request, response: Response) {
    const { latitude, longitude, vehicle_id } = request.body;
    if (
      !(await createPositionSchemaValidator({
        vehicle_id,
        latitude,
        longitude,
      }))
    ) {
      return response.status(400).json({ error: "Exists an incorrect value!" });
    }
    try {
      await this.createVehiclePositionUseCase.execute({
        latitude,
        longitude,
        vehicleId: vehicle_id,
      });
      return response.json({ message: "Stored successfully" });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "An error occurred while storing in database" });
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const positions = await this.getAllVehiclesPositionsUseCase.execute();
      return response.json(positions);
    } catch (error) {
      return response
        .status(400)
        .json({ error: "An error occurred while storing in database" });
    }
  }

  async getbyId(request: Request, response: Response) {
    const { vehicleId } = request.params;
    try {
      const vehiclePosition = await this.getOneVehiclePositionUseCase.execute({
        vehicleId: Number(vehicleId),
      });
      return response.json(vehiclePosition);
    } catch (error) {
      return response
        .status(400)
        .json({ error: "An error occurred while storing in database" });
    }
  }

  async update(request: Request, response: Response) {
    const { vehicleId } = request.params;
    const { latitude, longitude } = request.body;
    if (!(await updatePositionSchemaValidator({ latitude, longitude }))) {
      return response.status(400).json({ error: "Exists an incorrect value!" });
    }
    try {
      const vehicle = await this.updateVehiclePositionUseCase.execute({
        latitude,
        longitude,
        vehicleId: Number(vehicleId),
      });
      if (!vehicle) return response.status(404).send();
      return response.json(vehicle);
    } catch (error) {
      return response
        .status(400)
        .json({ error: "An error occurred while update" });
    }
  }

  async delete(request: Request, response: Response) {
    const { vehicleId } = request.params;
    try {
      await this.deleteVehiclePositionUseCase.execute({
        vehicleId: Number(vehicleId),
      });
      return response.json({ message: "Deleted!" });
    } catch (error) {
      return response.status(400).json({ error: "Could not delete" });
    }
  }
}

export default VehiclePositionController;
