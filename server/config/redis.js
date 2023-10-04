const {Redis} = require('ioredis');


const redis = new Redis({
    port: 13449,
    host: "redis-13449.c8.us-east-1-4.ec2.cloud.redislabs.com",
    password: 'bmsuwA5x5wuD74LBpRNjiV5vbljHG2Jm',
})

module.exports = redis
