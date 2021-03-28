import * as Yup from "yup";

interface IStopSchema {
  name: string;
  longitude: number;
  latitude: number;
  lines?: Array<number>;
}

export async function createStopSchemaValidator(stopSchema: IStopSchema) {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    latitude: Yup.number().required(),
    longitude: Yup.number().required(),
    lines: Yup.array().of(Yup.number()).optional(),
  });
  return schema.isValid(stopSchema);
}

export async function updateStopSchemaValidator(stopSchema: IStopSchema) {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    latitude: Yup.number().required(),
    longitude: Yup.number().required(),
  });
  return schema.isValid(stopSchema);
}
