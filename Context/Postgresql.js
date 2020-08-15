const { Base } = require('../Provider/Base');
const { Context } = require('../Provider/Postgresql/Context');

/**
 * 
 */
module.exports = function(config){
    'use strict'

    return new Base(new Context(config));
};