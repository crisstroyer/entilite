class EntiliteContext {
    constructor(){
        //Validate Methods
        if(!this.getJoinQuery) throw new Error("getJoinQuery method not implemented in EntiliteContext class extension");
        if(!this.getSelectQuery) throw new Error("getSelectQuery method not implemented in EntiliteContext class extension");
        if(!this.getInsertQuery) throw new Error("getInsertQuery method not implemented in EntiliteContext class extension");
        if(!this.getDeleteQuery) throw new Error("getDeleteQuery method not implemented in EntiliteContext class extension");
        if(!this.getUpdateQuery) throw new Error("getUpdateQuery method not implemented in EntiliteContext class extension");
        if(!this.getClient) throw new Error("getClient method not implemented in EntiliteContext class extension");
    }
}

module.exports.EntiliteContext = EntiliteContext;

