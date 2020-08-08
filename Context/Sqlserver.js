const { Base } = require('../Provider/Base');
const { Context } = require('../Provider/Sqlserver/Context');

/**
 * 
 */
module.exports.Sqlserver = (config)=>{
    'use strict'

    return new Base(new Context(config));
};