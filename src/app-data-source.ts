import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Entities } from './entities/index.js';
import { Migrations } from './migrations/index.js';

dotenv.config();

const dataSource = new DataSource({
    type: "mariadb",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [...Entities],
    migrations: [...Migrations],
    logging: false,
    synchronize: process.env.DB_SYNCHRO === "true" ? true : false,
});

export default dataSource;