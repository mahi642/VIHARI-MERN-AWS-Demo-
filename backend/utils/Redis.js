const redis = require('redis');
 
const client = redis.createClient({
    password: 'w9fhLSyvFCs3vizxRtRv9HKwo5UeWYRR',
    socket: {
        host: 'redis-14116.c264.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 14116
    }
});

(async () => {
    await client.connect();
})();
client.on('connect', () => {
    console.log('Redis client connected');
});

client.on('error', (err) => {
    console.error('Redis connection error:', err);
});

module.exports = client;