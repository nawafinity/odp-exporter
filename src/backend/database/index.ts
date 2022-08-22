import "reflect-metadata";
import { DataSource } from "typeorm";
import Settings from "./entities/Settings";

const ORM: DataSource = new DataSource({
    type: 'sqlite',
    synchronize: true,
    logging: true,
    logger: 'advanced-console',
    database: './src/assets/data/database.sqlite',
    entities: [
        Settings
    ]
})


export default ORM;