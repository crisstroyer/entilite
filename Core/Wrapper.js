/**
 * 
 */
module.exports.Wrapper = function(context){
    'use strict'

    let query = function(query, params, client = undefined){}

    let select = function(entity, columns, conditions, orderby, client = undefined){}

    let update = function(entity, data, conditions, client = undefined){}

    let del = function(entity, conditions, client = undefined){}

    let insert = function(entity, data, client = undefined){}
    
    return {
        query: query,
        select: select,
        update: update,
        delete: del,
        insert: insert
    }
};