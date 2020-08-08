const { QueryLanguageTool } = require('../Tools/QueryLanguageTool');
const { QueryStringTool } = require('../Tools/QueryStringTool');
const { Reflection } = require('../Core/Reflection');

/**
 * 
 */
module.exports.Base = (context)=>{
    'use strict'

    let wrapper = new require('../Core/Wrapper')(context)

    return {
        //Tools
        QLT: new QueryLanguageTool(wrapper),
        QST: QueryStringTool,
        //Core
        Reflection: Reflection,
        Wrapper: wrapper,
        Context: context
    }
};