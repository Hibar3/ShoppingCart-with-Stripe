//import products from '../data/products.json'
import { useShoppingCart, formatCurrencyString, Product } from 'use-shopping-cart'
import ApolloClient, { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';
import { getProductsQuery } from '../apollo/client/queries';
import { IProductList } from '../interface/IProductList';


 //client.query({ query: getProductsQuery }).then(result => console.log(result));
 export interface mainProps {
  products?: IProductList[];
}


const Products = ({products}: mainProps ) => {
  const { addItem, removeItem } = useShoppingCart()
  
  const { loading, error, data } =  useQuery<IProductList>(getProductsQuery, {
    variables: {products},
  });
  if (loading) return <p>Loading...</p>;;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data)
  if(data)
 return (
    <section className="products">
      {data.products.map((product: Product) => (
        <div key={product.sku} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
          <button
            className="cart-style-background"
            onClick={() => addItem(product)}
          >
            Add to cart
          </button>
          <button
            className="cart-style-background"
            onClick={() => removeItem(product.sku)}
          >
            Remove
          </button>
        </div>
      ))}
    </section>
  )
}

// export async function getStaticProps({products}) {
//   await client.query<IProductList>({
//     query: getProductsQuery,
//     variables: {products}
//   });

//   return {
//     props: {
//       initialApolloState: client.cache.extract(),
//     },
//   }
// }

// Products.getInitialProps = async ({products}: mainProps) => {
//    const { loading, error, data } =  useQuery<IProductList>(getProductsQuery, {
//     variables: {products},
//   });
//   if (loading) return null;
//   if (error) return `Error! ${error}`;
//   // const { data: { data } } = useQuery(getProductsQuery);
//   // const ProductList: IProductList[] | undefined = data;
//   // console.log(ProductList)
//   console.log(data)
//   return { products: data};
// }

export default Products
