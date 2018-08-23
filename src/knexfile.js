const config = require('config');

const dbConfig = config.get('database');

module.exports = {
    debug: false,
    client: dbConfig.protocol,
    connection: {
        host: dbConfig.host,
        database: dbConfig.database,
        user: dbConfig.user,
        password: dbConfig.password
    },
    searchPath: dbConfig.schema,
    pool: {
        min: 0,
        max: dbConfig.poolSize
    },
    migrations: {
        directory: './deploy/knex/migrations'
    },
    seeds: {
        directory: './deploy/knex/seeds'
    }
};
