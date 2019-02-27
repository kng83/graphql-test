let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    hello: String
    whatYourName:String
  }
`);

let root = {
  hello: () => {
    console.log('here is data')
    return 'Hello world and yuou!'
   },
   whatYourName: () => {
    return 'my name is robert'
   }
  }


let app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));