import {products} from "./data";

export const resolvers = {
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