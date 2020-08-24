const { EntiliteContext } = require('../../Interface/EntiliteContext');
const { Client } = require('./Client');
const { Pool } = require('pg');

class Context extends EntiliteContext {

    constructor(config){
        super();
        try{
            this.config = config;
            this.pool = new Pool(this.config);
        }catch(e){
            throw e;
        }
    }

    getJoinQuery(entity){
        throw "No Implemented"
    }

    getSelectQuery(entity){}

    getInsertQuery(entity){}

    getDeleteQuery(entity){}

    getUpdateQuery(entity){}

    /**
     * 
     */
    getClient(){
        return new Promise(async (resolve, reject) => {
            pool.connect()
                .then(async client => {
                    resolve(new Client(client));
                }).catch(e=>{
                    reject(e);
                });
        });
    }

}

module.exports.Context = Context;