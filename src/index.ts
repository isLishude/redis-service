import * as Redis from "ioredis";

const port = Number.parseInt(process.env.redisPort) || 6379;
const host = process.env.redisIp || "127.0.0.1";
const password = process.env.redisPassword || "";

export const RedisClient: Redis.Redis = new Redis(port, host, { password });
