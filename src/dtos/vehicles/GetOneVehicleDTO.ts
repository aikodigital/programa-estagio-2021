import Vehicle from "../../entities/Vehicle";

export interface IGetOneVehicleResponseDTO extends Vehicle {
  id: number;
  name: string;
  model: string;
  lineId: number;
}

export interface IGetOneVehicleRequestDTO {
  id: number;
}
