const PostgresqlProvider = require('./Context/Postgresql');
const SqlserverProvider = require('./Context/Sqlserver');

/**
 * 
 */
module.exports.PostgresqlContext = function(config){
    'use strict'
    return PostgresqlProvider(config);
};

/**
 * 
 */
module.exports.SqlserverContext = (config)=>{
    'use strict'
    return SqlserverProvider(config);
};