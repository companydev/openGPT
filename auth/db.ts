// function for connect to postgress using typeorm
import { createConnection } from "typeorm";

async function connectToPostgres() {
  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "my_database",
    entities: [__dirname + "/entity/*.ts"], // or [Product, User]
    synchronize: true, // DEV only, do not use on PROD!
  });

  return connection;
}
