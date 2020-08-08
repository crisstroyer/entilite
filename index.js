const { Postgresql: PostgresqlContext } = require('./Context/Postgresql');
const { Sqlserver: SqlserverContext } = require('./Context/Sqlserver');

/**
 * 
 */
module.exports.postgresql = (config)=>{
    'use strict'
    return new PostgresqlContext(config);
};

/**
 * 
 */
module.exports.sqlserver = (config)=>{
    'use strict'
    return new SqlserverContext(config);
};