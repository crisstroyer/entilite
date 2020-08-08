const { PostgresqlContext } = require('./index');
let config = {};

let ctx = new PostgresqlContext(config);


const { QLT, Wrapper, Context } = new require('./Context/Postgresql')(config);



console.log(ctx);