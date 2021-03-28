import { Request, Response } from "express";
import GetVehiclesByLineUseCase from "../../useCases/vehiclesByLine/GetVehiclesByLineUseCase";
import GetOneLineUseCase from "../../useCases/lines/GetOneLineUseCase";

export default class VehiclesByLineController {
  constructor(
    private getVehiclesByLineUseCase: GetVehiclesByLineUseCase,
    private getOneLineUseCase: GetOneLineUseCase
  ) {}

  async getVehiclesByLine(request: Request, response: Response) {
    const { lineId } = request.params;
    try {
      const line = await this.getOneLineUseCase.execute({ id: Number(lineId) });

      if (!line) return response.status(404).json({ error: "Line not found" });

      const vehicles = await this.getVehiclesByLineUseCase.execute({
        lineId: Number(lineId),
      });
      if (!vehicles) return response.status(404).send();

      return response.json(vehicles);
    } catch (error) {
      return response.status(400).json({ error: "A erro occurred" });
    }
  }
}
