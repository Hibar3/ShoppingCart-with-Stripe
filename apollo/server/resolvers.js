//import {products} from "./data";

export const resolvers = {
  Query: {
    products(_parent, _args, _context, _info) {
      return _context.db
        .collection('products') // DB.collection name
        .findOne()
        .then((data) => {
          return data.products //return db data
        })
    },
  },
}


//**Direct  Query from dummy data**/
// export const resolvers = {
//   Query: {
//     products: () => products,
//   },

//   Mutation: {
//     updateProduct: (root, args) => {
//       products.name = args.name;
//       products.description = args.description;
//       return products;
//     },
//   },
// };