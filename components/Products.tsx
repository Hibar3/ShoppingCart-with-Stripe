import { GetStaticProps } from 'next'
import { useShoppingCart, formatCurrencyString, Product } from 'use-shopping-cart'
import ApolloClient, { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';
import { getProductsQuery } from '../apollo/client/queries';
import { IProductList } from '../interface/IProductList';

// @material-ui/core components
import { Button } from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles";

export interface Props {
  products?: IProductList[];
}


const Products = ({products}: Props ) => {
  const { addItem, removeItem } = useShoppingCart();
  const classes = useStyles();
 // getStaticProps({ products });
 const { loading, error, data } =  useQuery<IProductList>(getProductsQuery, {
  variables: {products},
});
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;
  console.log({ data })
  const productList = { productList: data }
  return (
    <section className="products">
      {data?.products.map((product: Product) => (
        <div key={product.sku} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
          <Button
            variant="contained"
            color="secondary"
          //  size="medium"
            className={classes.customButton}
            onClick={() => addItem(product)}
          >
            Add to cart
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.customButton}
            onClick={() => removeItem(product.sku)}
          >
            Remove
          </Button>
        </div>
      ))}
    </section>
  )
}

const useStyles = makeStyles((theme) => ({
 customButton: {
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
   // color: 'white',
    height: 48,
    margin: '2px',
    padding: '0 30px',
  },
}));

export default Products

// export const getStaticProps = async ({products}: Props) => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const { loading, error, data } =  useQuery<IProductList>(getProductsQuery, {
//     variables: {products},
//   });
//   if (loading) return <p>Loading...</p>;;
//   if (error) return <p>Error: {error.message}</p>;
//   console.log(data)
//   if (data) {
//     //const response = await fetch("https://graphqlzero.almansi.me/api");
//     const productList = data;
//     return { products: productList }
//   }
  
// }

// Products.getInitialProps = async ({products}: Props) => {
//    const { loading, error, data } =  useQuery<IProductList>(getProductsQuery, {
//     variables: {products},
//    });
//    const response = await fetch("https://graphqlzero.almansi.me/api");
//     const ownersList = await response.json();
//   if (loading) return null;
//   if (error) return `Error! ${error}`;
//   console.log(data)
   
//     const productList = data;
//     return { products: productList }
  
// }


