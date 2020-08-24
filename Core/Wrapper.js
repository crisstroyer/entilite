const { EntiliteClient } = require("../Interface/EntiliteClient");
const { Reflection } = require('./Reflection');
/**
 * 
 */
module.exports.Wrapper = function(context){
    'use strict'

    let context = context;

    /**
     * 
     * @param {*} query 
     * @param {*} params 
     * @param {*} client 
     */
    let query = function(query, params, client = undefined){
        return new Promise((resolve, reject) => {
            try {
                //Validar tipos de datos de busqueda
                if(!Array.isArray(params))
                    throw new ValidationError(new Error('Invalid parameter data type: params must be array'));

                //Obtener un nuevo cliente de conexion si no se envia uno ya creado
                if(!client) client = context.getClient();
               
                //Ejecutar Query
                client.query(query, params)
                    .then(result=>{
                        resolve(result);
                    })
                    .catch(e=>{
                        reject(e);
                    })
            }catch(e){

            }
        });
    }

    /**
     * 
     * @param {*} entity 
     * @param {*} columns 
     * @param {*} conditions 
     * @param {*} orderby 
     * @param {*} client 
     */
    let select = function(entity, columns, conditions, orderby, client = undefined){
        return new Promise((resolve, reject) => {
            try {
                //Validar tipos de datos de busqueda
                if(!Array.isArray(conditions) || !Array.isArray(columns) || !Array.isArray(order))
                    throw new ValidationError(new Error('Invalid parameter data type: conditions, columns and orders must be array'));

                //Validar entidad
                if(!(entity instanceof EntiliteClient)) 
                    throw new Error('The entity is not a valid class');

                //Obtener un nuevo cliente de conexion si no se envia uno ya creado
                if(!client) client = context.getClient();
                //Obtener query
                let query = context.getSelectQuery(entity, columns, conditions, orderby)
                //Obtener parametros de las condiciones
                let params = conditions.map(condition=>condition.value);

                //Ejecutar Query
                client.query(query, params)
                    .then(result=>{
                        resolve(result);
                    })
                    .catch(e=>{
                        reject(e);
                    })
            }catch(e){

            }
        });
    }

    let update = function(entity, data, conditions, client = undefined){
        return new Promise((resolve, reject) => {
            try {
                //Validar tipos de datos de busqueda
                if(!Array.isArray(conditions))
                    throw new ValidationError(new Error('Invalid parameter data type: conditions, columns and orders must be array'));

                //Validar entidad
                if(!(entity instanceof EntiliteClient)) 
                    throw new Error('The entity is not a valid class');

                //Obtener un nuevo cliente de conexion si no se envia uno ya creado
                if(!client) client = context.getClient();

                //Obtener datos y columnas seteadas
                Reflection.getMappedData(entity, data)
                    .then((columns, params)=>{
                        //Obtener query
                        let query = context.getUpdateQuery(entity, columns, conditions)
                        //Obtener parametros de las condiciones
                        let params = conditions.map(condition=>condition.value);

                        //Ejecutar Query
                        client.query(query, params)
                            .then(result=>{
                                resolve(result);
                            })
                            .catch(e=>{
                                reject(e);
                            })
                    })
                    .catch(errors=>{
                        let error = errors.map((err, i) => '[' + err + ']').join(',');
                        reject(e);
                    })
            }catch(e){
                reject(e);
            }
        });
    }

    let del = function(entity, conditions, client = undefined){}

    let insert = function(entity, data, client = undefined){}
    
    return {
        query: query,
        select: select,
        update: update,
        delete: del,
        insert: insert
    }
};