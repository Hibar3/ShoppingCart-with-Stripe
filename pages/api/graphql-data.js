import { ApolloServer, gql } from "apollo-server-micro";


import { schema } from '../../apollo/server/schema';
//Use [Products] for []




const server = new ApolloServer({ schema});

const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler