import {
  createConnection,
  getConnectionOptions,
  Connection,
  getConnection,
} from "typeorm";

export default async (name = "default"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      database: defaultOptions.database,
    })
  );
};

export async function closeConnection() {
  await getConnection().close();
}

export async function cllearConnection() {
  const connection = getConnection();
  const entities = connection.entityMetadatas;

  entities.forEach(async (entity) => {
    const repository = connection.getRepository(entity.name);
    await repository.query(`DELETE FROM ${entity.tableName}`);
  });
}
