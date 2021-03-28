import * as Yup from "yup";

interface IPositionSchema {
  vehicle_id?: number;
  longitude: number;
  latitude: number;
}

export async function createPositionSchemaValidator(
  positionSchema: IPositionSchema
) {
  const schema = Yup.object().shape({
    vehicle_id: Yup.number().required(),
    latitude: Yup.number().required(),
    longitude: Yup.number().required(),
  });
  return schema.isValid(positionSchema);
}

export async function updatePositionSchemaValidator(
  positionSchema: IPositionSchema
) {
  const schema = Yup.object().shape({
    latitude: Yup.number().required(),
    longitude: Yup.number().required(),
  });
  return schema.isValid(positionSchema);
}
