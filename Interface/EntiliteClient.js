class EntiliteClient {
    constructor(){
        //Validate Methods
        if(!this.beginTran) throw new Error("beginTran method not implemented in EntiliteClient class extension");
        if(!this.commitTran) throw new Error("commitTran method not implemented in EntiliteClient class extension");
        if(!this.rollbackTran) throw new Error("rollbackTran method not implemented in EntiliteClient class extension");
        if(!this.query) throw new Error("query method not implemented in EntiliteClient class extension");
    }
};

module.exports.EntiliteClient = EntiliteClient;
