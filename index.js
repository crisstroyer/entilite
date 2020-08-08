const { QueryLanguageTool } = require('./Tools/QueryLanguageTool');
const { QueryStringTool } = require('./Tools/QueryStringTool');
const { Reflection } = require('./Core/Reflection');
const { Context } = require('./Context');


const { QLT } = new require('entilite')(config);
/**
 * 
 */
let Base = (context)=>{
    'use strict'

    let wrapper = new require('./Core/Wrapper')(context)

    return {
        //Tools
        QLT: new QueryLanguageTool(wrapper),
        QST: QueryStringTool,
        //Core
        Reflection: Reflection,
        Wrapper: wrapper
    }
};

/**
 * 
 */
module.exports.postgresql = (config)=>{
    'use strict'
    return new Base(new Context.PostgresqlContext(config));
};

/**
 * 
 */
module.exports.sqlserver = (config)=>{
    'use strict'
    return new Base(new Context.SqlServerContext(config));
};