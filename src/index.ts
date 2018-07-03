import { log } from "console";
import * as Redis from "ioredis";

const port = Number.parseInt(process.env.redisPort) || 6379;
const host = process.env.redisIp || "127.0.0.1";
const password = process.env.redisPassword || "";

export const RedisClient: Redis.Redis = new Redis(port, host, {
  keepAlive: 1,
  password
});

RedisClient.on("connect", () => {
  log("Redis 连接成功 %s:%s", host, port);
});

RedisClient.on("error", err => {
  log("Redis 连接失败 %s:%s，错误原因：%s", err.address, err.port, err.message);
});
