module.exports.QueryStringTool = (function(){
    /**
     * Cristian Garcia
     * cristiang1026@gmail.com
     * 
     */

    'use strict'

    var getFiltering = function(query){
        let conditions = [];
        

        conditions.push({
            name: key.name, 
            relationalOperator: config.RelationalOperator.equal, 
            value: req.params[key.name], 
            logicalOperator: config.LogicalOperator.none
        });
    }

    var getSorting = function(){}

    var getPagination = function(){}

    var parse = function(queryString){

        return {
            conditions: getFiltering(queryString),
            sort: getSorting(queryString),
            pagination: getPagination(queryString)
        }
    }

    /**Apli publica del la libreria*/
    return{
        parse: parse
    }
})();