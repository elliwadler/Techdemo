const { Pool } = require('pg');

let pool;

pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'user_db',
    password: 'topsecret',
    database: 'cats_db',
});

module.exports = pool;
