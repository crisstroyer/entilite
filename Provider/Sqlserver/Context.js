const { EntiliteContext } = require('../../Interface/EntiliteContext');
const { Client } = require('./Client');

class Context extends EntiliteContext {

    constructor(config){
        super();
        this.config = config;
    }

    getJoinQuery(entity){
        throw "No Implemented"
    }

    getSelectQuery(entity){}

    getInsertQuery(entity){}

    getDeleteQuery(entity){}

    getUpdateQuery(entity){}

    get getClient(){
        this.currentClient = new Client(this.config);
        return this.currentClient;
    }

}

module.exports.Context = Context;