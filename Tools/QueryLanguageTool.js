/**
 * 
 */
module.exports.QueryLanguageTool = function(wrapper){
    'use strict'

    /**
     * 
     */
    let list = ()=>{
        var arg = arguments[0];
        return wrapper.select(arg.from, arg.where, arg.select, arg.order, arg.client);
    }

    /**
     * 
     */
    let del = ()=>{
        var arg = arguments[0];
        return wrapper.delete(arg.from, arg.where, arg.client);
    }

    /**
     * 
     */
    let update = ()=>{
        var arg = arguments[0];
        return wrapper.update(arg.from, arg.data, arg.where, arg.client);
    }

    /**
     * 
     */
    let setData = ()=>{
        return {
            where: conditions=>{ arguments[0].where = conditions; return where(arguments[0]) }
        }
    }

    /**
     * 
     */
    let order = ()=>{
        return{
            list: ()=>{ return list(arguments[0]) }
        }
    }

    /**
     * 
     */
    let where = ()=>{
        return{
            order: orderby=>{ arguments[0].order = orderby; return order(arguments[0]) },
            list: ()=>{ return list(arguments[0]) },
            delete: ()=>{ return del(arguments[0]) },
            update: ()=>{ return update(arguments[0])}
        }
    }

    /**
     * 
     */
    let select = ()=>{
        return {
            where: conditions=>{ arguments[0].where = conditions; return where(arguments[0]) },
            order: orderby=>{ arguments[0].order = orderby; return order(arguments[0]) },
            list: ()=>{ return list(arguments[0]) }
        }
    }

    /**
     * 
     * @param {*} entity 
     * @param {*} client Optional parameter
     */
    let from = (entity, client = null)=>{
        var arg = {
            client: client,
            from: entity,
            select: [],
            where: [],
            order: [],
            data: null
        }
        //Encadenamiento del lenguage de busqueda
        return {
            where: cond=>{ arg.where = cond; return where(arg) },
            select: columns=>{ arg.select = columns; return select(arg) },
            order: orderby=>{ arg.order=orderby; return order(arg) },
            list: ()=>{ return list(arg) },
            setData: (data)=>{ arg.data=data; return setData(arg)}
        }
    }

    /**
     * 
     * @param {*} client 
     */
    let use = (client)=>{
        //Encadenamiento del lenguage de busqueda
        return {
            from: entity=>{ return choose(entity, client) }
        }
    }

    /**Apli publica del la libreria*/
    return{
        use: use,
        from: from
    }
};