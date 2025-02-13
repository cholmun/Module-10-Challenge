const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'test_employee_tracker',
    password: 'RenFish55',
    port: 5432,
});

client.connect();

module.exports = client;