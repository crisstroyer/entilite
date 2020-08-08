/**
 * 
 */
module.exports.QueryLanguageTool = (wrapper)=>{
    'use strict'

    var wrapper = require('./Wrapper');

    /**
     * Funcion encargada de ejecutar el resultado de datos segun la consulta creada
     */
    var list = function(){
        var arg = arguments[0];
        //crear el select
        return wrapper.select(arg.from, arg.where, arg.select, arg.order);
    }

    /**
     * Funcion encargada de la asignacion del orden para los resultados de la consulta
     * Recibe como parametro array de ordenamiento tipo [{name:'id', modifier:'asc'}]
     */
    var order = function(){
        return{
            list: ()=>{ return list(arguments[0]) }
        }
    }

    /**
     * Funcion encargada de asignar las condiciones de busqueda
     * Recibe como parametro array de condiciones tipo [{name:'id', relationalOperator;'=', value:'123', logicalOperator:'none'}]
     */
    var where = function(){
        return{
            order: orderby=>{ arguments[0].order = orderby; return order(arguments[0]) },
            list: ()=>{ return list(arguments[0]) }
        }
    }

    /**
     * Funcion encargada de la eleccion de las columnas de la entidad
     * Recibe como parametro array de columnas ['id', 'name']
     */
    var choose = function(){
        return {
            where: conditions=>{ arguments[0].where = conditions; return where(arguments[0]) },
            order: orderby=>{ arguments[0].order = orderby; return order(arguments[0]) },
            list: ()=>{ return list(arguments[0]) }
        }
    }

    /**
     * Funcion encargada de asignar la entidad a consultar
     * @param {*} entity Entidad de mapeo
     */
    var from = function(entity){
        var arg = {
            from: entity,
            select: [],
            where: [],
            order: []
        }
        //Encadenamiento del lenguage de busqueda
        return {
            where: cond=>{ arg.where = cond; return where(arg) },
            select: columns=>{ arg.select = columns; return choose(arg) },
            order: orderby=>{ arg.order=orderby; return order(arg) },
            list: ()=>{ return list(arg) }
        }
    }

    /**Apli publica del la libreria*/
    return{
        from: from
    }
};