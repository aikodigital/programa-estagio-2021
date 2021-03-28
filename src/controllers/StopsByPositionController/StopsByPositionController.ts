import { Request, Response } from "express";
import GetStopsByPositionUseCase from "../../useCases/stopsByPosition/GetStopsByPositionUseCase";

export default class StopsByPositionController {
  constructor(private getStopsByPositionUseCase: GetStopsByPositionUseCase) {}

  async getNearbyStops(request: Request, response: Response) {
    const { latitude, longitude } = request.query;
    try {
      const nearbyStops = await this.getStopsByPositionUseCase.execute({
        latitude: Number(latitude),
        longitude: Number(longitude),
      });
      return response.json(nearbyStops);
    } catch (error) {
      return response.status(400);
    }
  }
}
