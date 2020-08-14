import { ApolloServer, gql } from "apollo-server-micro";
import { MongoClient } from 'mongodb'
import { schema } from '../../apollo/server/schema';
//Use [Products] for []
//require('dotenv').config()
let db;

// Connect apollo server to mongo db
const server = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.MONGO_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })

        if (!dbClient.isConnected()) await dbClient.connect()
        db = dbClient.db('DemoDB')  // database name
        console.log('Success')
      } catch (e) {
        console.log('--->error while connecting with graphql context (db)', e)
      }
    }

    return { db }
  },
})

const handler = server.createHandler({ path: "/api/graphql-data" }); //set api endpoint

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler