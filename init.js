const { PostgresqlContext } = require('./index');
let config = {};

let ctx = PostgresqlContext(config);


const { QLT, Wrapper, Context } = new require('./Context/Postgresql')(config);

let client = Context.getClient();
client.beginTran();

console.log(QLT);