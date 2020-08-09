import { ApolloServer, gql } from "apollo-server-micro";

let products = [
  {
    "name": "Bananas",
    "description": "Yummy yellow fruit",
    "sku": "sku_GBJ2Ep8246qeeT",
    "price": 400,
    "image": "https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80",
    "attribution": "Photo by Priscilla Du Preez on Unsplash",
    "currency": "MYR"
  },
  {
    "name": "Tangerines",
    "sku": "sku_GBJ2WWfMaGNC2Z",
    "price": 100,
    "image": "https://images.unsplash.com/photo-1482012792084-a0c3725f289f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80",
    "attribution": "Photo by Jonathan Pielmayer on Unsplash",
    "currency": "MYR"
  }
];

//Use [Products] for []

const typeDefs = gql`
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

const resolvers = {
  Query: {
    products: () => products,
  },

  Mutation: {
    updateProduct: (root, args) => {
      products.name = args.name;
      products.description = args.description;
      return products;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler