require(`./src/bootstrap`);

module.exports = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: false,
  entities: [`${__dirname}/src/entities/**/*.ts`],
  migrations: [`${__dirname}/src/database/migrations/**/*.ts`],
  subscribers: ["src/subscriber/**/*.ts"],
  seeds: ["src/database/seeds/**/*.ts"],
  cli: {
    entitiesDir: `${__dirname}/src/entities`,
    migrationsDir: `${__dirname}/src/database/migrations`,
    subscribersDir: "src/subscriber",
    seedsDir: "src/database/seeds",
  },
};
