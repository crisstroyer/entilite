const { EntiliteClient } = require('../../Interface/EntiliteClient');

class Client extends EntiliteClient{
    constructor(config){
        super();
        this.config = config;
    }

    get begintran(){}

    get commitTran(){}

    get rollbackTran(){}

    set query(){

    }
}

/**
 * 
 */
module.export.Client = Client;


