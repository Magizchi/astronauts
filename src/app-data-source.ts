import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Entities } from './entities/index.js';
import { Migrations } from './migrations/index.js';

dotenv.config();

const ENV = {
    host: process.env.DB_HOST ?? "db",
    port: Number(process.env.DB_PORT) ?? 3306,
    userName: process.env.DB_USER ?? "",
    password: process.env.DB_PASSWORD ?? "",
    dataBase: process.env.DB_DATABASE ?? "astronaute",
    synchronize: process.env.DB_SYNCHRO === "true" ? true : false
};

const dataSource = new DataSource({
    type: "mariadb",
    host: ENV.host,
    port: ENV.port,
    username: ENV.userName,
    password: ENV.password,
    database: ENV.dataBase,
    entities: [...Entities],
    migrations: [...Migrations],
    logging: false,
    synchronize: ENV.synchronize,
});

export default dataSource;