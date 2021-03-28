import Vehicle from "../../entities/Vehicle";

export default interface IVehicleByLineRepository {
    getVehiclesByLine(lineId: number): Promise<Array<Vehicle>>
}