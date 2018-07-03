"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const Redis = require("ioredis");
const port = Number.parseInt(process.env.redisPort) || 6379;
const host = process.env.redisIp || "127.0.0.1";
const password = process.env.redisPassword || "";
exports.RedisClient = new Redis(port, host, {
    keepAlive: 1,
    password
});
exports.RedisClient.on("connect", () => {
    console_1.log("Redis 连接成功 %s:%s", host, port);
});
exports.RedisClient.on("error", err => {
    console_1.log("Redis 连接失败 %s:%s，错误原因：%s", err.address, err.port, err.message);
});
