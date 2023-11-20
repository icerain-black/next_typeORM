"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;
require("reflect-metadata");
var _typeorm = require("typeorm");
var AppDataSource = exports.AppDataSource = new _typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "icerain",
  password: "123456",
  database: "blog_development",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: []
});