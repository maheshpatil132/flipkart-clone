const {Redis} = require("ioredis");

const redis = new Redis(process.env.REDIS_ENDPOINT_URI);

module.exports = redis