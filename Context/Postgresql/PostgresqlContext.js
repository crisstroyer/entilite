import EntiliteContext from '../../Interface/Context';

class PostgresqlContext extends EntiliteContext {
    constructor(){
        super();

    }

    get getJoinQuery(entity){
        throw "No Implemented"
    }

    get getSelectQuery(entity){}

    get getInsertQuery(entity){}

    get getDeleteQuery(entity){}

    get getUpdateQuery(entity){}

    get getClient(){}

}

module.exports = PostgresqlContext;