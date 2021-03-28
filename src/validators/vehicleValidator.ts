import * as Yup from "yup";

interface IVehicleSchema {
  name: string;
  model: string;
  line_id: number;
}

export async function createVehicleSchemaValidator(
  vehicleSchema: IVehicleSchema
) {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    model: Yup.string().required(),
    line_id: Yup.number().required(),
  });
  return schema.isValid(vehicleSchema);
}

export async function updateVehicleSchemaValidator(
  vehicleSchema: IVehicleSchema
) {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    model: Yup.string().required(),
    line_id: Yup.number().required(),
  });
  return schema.isValid(vehicleSchema);
}
