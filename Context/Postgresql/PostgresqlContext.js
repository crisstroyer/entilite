import EntiliteContext from '../../Interface/Context';

const { EntiliteClient } = require('../../Interface/Client');

/**
 * 
 */
module.export = (()=>{
    'use strict'
    getJoinQuery(entity){
        throw "No Implemented"
    }

    let getSelectQuery = (entity)=>{}

    let getInsertQuery =(entity)=>{}

    let getDeleteQuery = (entity)=>{}

    let getUpdateQuery = (entity)=>{}

    let getClient= ()=>{}

    return {

    }

})();

class PostgresqlContext extends EntiliteContext {
    constructor(config){
        super();
    }

    getJoinQuery(entity){
        throw "No Implemented"
    }

    getSelectQuery(entity){}

    getInsertQuery(entity){}

    getDeleteQuery(entity){}

    getUpdateQuery(entity){}

    get getClient(){}

}

module.exports.PostgresqlContext = new PostgresqlContext();