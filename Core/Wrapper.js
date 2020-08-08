/**
 * 
 */
module.exports.Wrapper = (context)=>{
    'use strict'

    let client; 

    let context = context;

    let setClient = function(client){
        this.client = client;
    }

    let query = function(query, params, client = undefined){}

    let select = function(entity, columns, conditions, orderby, client = undefined){}

    let update = function(entity, data, conditions, client = undefined){}

    let del = function(entity, conditions, client = undefined){}

    let insert = function(entity, data, client = undefined){}
    
    return {
        setClient: setClient,
        Query: query,
        Select: select,
        Update: update,
        Delete: del,
        Insert: insert
    }
};