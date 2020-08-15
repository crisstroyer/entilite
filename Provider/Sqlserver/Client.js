const { EntiliteClient } = require('../../Interface/EntiliteClient');

class Client extends EntiliteClient{
    constructor(client){
        super();
        this.client = client;
    }

    get begintran(){

    }

    get commitTran(){}

    get rollbackTran(){}

    set query(query){

    }
}

/**
 * 
 */
module.exports.Client = Client;


