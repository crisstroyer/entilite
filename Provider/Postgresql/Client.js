const { EntiliteClient } = require('../../Interface/EntiliteClient');
const esc = require('pg-escape');

class Client extends EntiliteClient{

    BEGIN_TRAN_SCRIPT = 'Begin';
    ROLLBACK_TRAN_SCRIPT = 'Rollback';
    COMMIT_TRAN_SCRIPT = 'Commit';

    constructor(client){
        if(!(this.client instanceof PoolClient)) throw new Error("Unsupported Client");
        this.client = client;
        super();
    }


    /**
     * Funcion encargada de escapar cada parametro enviado en el array de parametros de la consulta
     * Esto evita el uso de sql inyection
     * @param {*} arr Array de parametros
     */
    _escape(arr){
        //Escapar cada parametro enviado siempre y cuando no sea null
        return arr.map(param => { return (!(param instanceof Date) && param!=null)? esc.string(param).trim(): param });
    }

    /**
     * Funcion encargada de asignar el parametro correspondiente en la consulta segun su index en el array de parametros
     * Inicialmente solo funciona para parametros postgres ${index}
     * @param {*} query Query a ejecutar
     */
    _setParamIndicator(query){
        //Dividir las partes del query segun sus parametros
        let arr = query.split("?");
        //Si tiene parametros, reemplazar los parametros ? por su correspondiente $1 segun el index de la posicion en el array de parametros.      
        if(arr.length > 1) arr = arr.map((item, i) => { return (item && i<arr.length-1)?(item + '$' + (i + 1)):item})

        return arr.join('');  
    }

    beginTran(){
        return new Promise(async (resolve, reject) => {
            try{
                this.client.query(BEGIN_TRAN_SCRIPT)
                    .then(res =>{
                        this.isTransaction = true;
                        resolve(res);
                    })
                    .catch(e=>{
                        reject(e);
                    })
            }catch(e){
                reject(e);
            }
        });
    }

    commitTran(){
        return new Promise(async (resolve, reject) => {
            try{
                this.client.query(COMMIT_TRAN_SCRIPT)
                    .then(res =>{
                        this.isTransaction = false;
                        resolve(res);
                    })
                    .catch(e=>{
                        reject(e);
                    })
            }catch(e){
                reject(e);
            }
        });
    }

    rollbackTran(){
        return new Promise(async (resolve, reject) => {
            try{
                this.client.query(ROLLBACK_TRAN_SCRIPT)
                    .then(res =>{
                        this.isTransaction = false;
                        resolve(res);
                    })
                    .catch(e=>{
                        reject(e);
                    })
            }catch(e){
                reject(e);
            }
        });
    }

    /**
     * 
     * @param {*} query 
     */
    query(query, params){
        return new Promise(async (resolve, reject) => {
            try{
                //Asignar indicador de parametros al query
                query = this._setParamIndicator(query);
                //Asignar el esquema
                //Recuperar el nombre del esquema segun login
                //let schemaName = httpContext.get('schema')?'tenant_' + httpContext.get('schema'):'tenant_3';
                //Asignar el esquema segun el contexto de la conexion al api 
                //query = query.replace(/{schema}/g, schemaName);
                //Evitar sql inyection (Solo si se envian los parametros)
                params = params?this._escape(params):null;

                //Realizar consulta
                this.client.query(query, params)
                    .then(res => {
                        if(!this.isTransaction) client.release();
                        resolve(res.rows);
                    })
                    .catch(e => {
                        if(!this.isTransaction) client.release();
                        //Pendiente por analizar el error de postgres
                        reject(e);
                    });
            }catch(e){
                reject(e);
            }
        });
    }
}

/**
 * 
 */
module.exports.Client = Client;


