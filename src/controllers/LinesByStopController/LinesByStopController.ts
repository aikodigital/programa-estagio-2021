import { Request, Response } from "express";
import GetLinesByStopUseCase from "../../useCases/linesByStop/GetLinesByStopUseCase";
import GetOneStopUseCase from "../../useCases/stops/GetOneStopUseCase";

export default class LinesByStopControler {
  constructor(
    private getLinesByStopUseCase: GetLinesByStopUseCase,
    private getOneStopUseCase: GetOneStopUseCase
  ) {}

  async getLinesByStop(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { stopId } = request.params;
    try {
      const stop = await this.getOneStopUseCase.execute({ id: Number(stopId) });

      if (!stop) return response.status(400).json({ error: "Stop not found" });

      const linesByStop = await this.getLinesByStopUseCase.execute({
        stopId: Number(stopId),
      });

      return response.json({ stop_id: stopId, lines: linesByStop });
    } catch (error) {
      return response
        .status(500)
        .json({ error: "An error ocurred while getting" });
    }
  }
}
