/**
 * 
 */
module.exports.QueryLanguageTool = function(wrapper){
    'use strict'

    /**
     * 
     */
    var list = (arg)=>{
        return wrapper.select(arg.from, arg.where, arg.select, arg.order, arg.client);
    }

    /**
     * 
     */
    var del = (arg)=>{
        return wrapper.delete(arg.from, arg.where, arg.client);
    }

    /**
     * 
     */
    var update = (arg)=>{
        return wrapper.update(arg.from, arg.data, arg.where, arg.client);
    }

    /**
     * 
     */
    var setData = (arg)=>{
        return {
            where: conditions=>{ arg.where = conditions; return where(arg) }
        }
    }

    /**
     * 
     */
    var order = (arg)=>{
        return{
            list: ()=>{ return list(arg) }
        }
    }

    /**
     * 
     */
    var where = (arg)=>{
        return{
            order: orderby=>{ arg.order = orderby; return order(arg) },
            list: ()=>{ return list(arg) },
            delete: ()=>{ return del(arg) },
            update: ()=>{ return update(arg)}
        }
    }

    /**
     * 
     */
    var select = (arg)=>{
        return {
            where: conditions=>{ arg.where = conditions; return where(arg) },
            order: orderby=>{ arg.order = orderby; return order(arg) },
            list: ()=>{ return list(arg) }
        }
    }

    /**
     * 
     * @param {*} entity 
     * @param {*} client Optional parameter
     */
    var from = (entity, client = null)=>{
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
    var use = (client)=>{
        //Encadenamiento del lenguage de busqueda
        return {
            from: entity=>{ return from(entity, client) }
        }
    }

    /**Apli publica del la libreria*/
    return{
        use: use,
        from: from
    }
};