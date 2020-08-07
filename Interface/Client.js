class EntiliteClient {

    constructor(){
        //Validate
    }

    set escape(param){

    }

    getPoolClient(){

    }

    get query(query, params){}

    get transaction(){
        return ()=>{
            begin = ()=>{},
            commit = ()=>{},
            rollback = ()=>{}
        }
    }


}

module.exports = EntiliteClient;
