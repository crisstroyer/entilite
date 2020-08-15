const { QueryLanguageTool } = require('../Tools/QueryLanguageTool');
const { QueryStringTool } = require('../Tools/QueryStringTool');
const { Reflection } = require('../Core/Reflection');
const { Wrapper } = require('../Core/Wrapper');

/**
 * 
 */
module.exports.Base = function(context){
    'use strict'

    let wrapper = new Wrapper(context);

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