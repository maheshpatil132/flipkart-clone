const { createClient }  = require('redis');

const redis = createClient({
    password: 'bmsuwA5x5wuD74LBpRNjiV5vbljHG2Jm',
    socket: {
        host: 'redis-13449.c8.us-east-1-4.ec2.cloud.redislabs.com',
        port: 13449
    }
});

module.exports = redis