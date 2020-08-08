const { PostgresqlContext } = require('./Postgresql/PostgresqlContext');
const { SqlServerContext } = require('./SqlServer/SqlServerContext');

module.exports = (()=>{
    return {
        PostgresqlContext: PostgresqlContext,
        SqlServerContext: SqlServerContext
    }
})();