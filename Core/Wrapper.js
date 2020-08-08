/**
 * 
 */
module.exports = (context)=>{
    'use strict'

    let context = context;

    let query = function(query, params){}

    let select = function(entity, columns, conditions, orderby){}

    let update = function(entity, data, conditions){}

    let del = function(entity, conditions){}

    let insert = function(entity, data){}
    
    return {
        Query: query,
        Select: select,
        Update: update,
        Delete: del,
        Insert: insert
    }
};