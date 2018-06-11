"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
const port = Number.parseInt(process.env.redisPort) || 6379;
const host = process.env.redisIp || "127.0.0.1";
const password = process.env.redisPassword || "";
exports.RedisClient = new Redis(port, host, { password });
