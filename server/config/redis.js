const {Redis} = require('ioredis');


const redis = new Redis({
    port: process.env.Redis_Port,
    host: `${process.env.Redis_host}`,
    password: `${process.env.Redis_Password}`,
})

module.exports = redis
