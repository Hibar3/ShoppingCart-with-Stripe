import { ApolloServer, gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Products {
    name: String
    description: String
    sku: String,
    price: Int,
    image: String,
    attribution: String,
    currency: String
  }
  type Query {
    products: [Products]
  }
  type Mutation {
    updateProduct(name: String!, description: String!): Products
  }
`;