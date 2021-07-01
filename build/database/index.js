"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
require("dotenv").config();
var rootDir = process.env.NODE_ENV === "development" ?
    "src" :
    "build";
var extensionFile = process.env.NODE_ENV === "development" ?
    "ts" :
    "js";
var config = {
    type: "postgres",
    //url: process.env.DATABASE_URL,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT || 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE,
    extra: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    entities: [
        rootDir + ("/app/models/*." + extensionFile)
    ],
    migrations: [
        rootDir + ("/database/migrations/*." + extensionFile)
    ],
    cli: {
        "migrationsDir": rootDir + "/database/migrations"
    }
};
typeorm_1.createConnection(config).catch(function (error) { return console.log(error); });
