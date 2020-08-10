import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'

// @material-ui/core components
import { Button } from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const IndexPage: NextPage = () => {
  const classes = useStyles();
  return (
    <Layout title="Shopping Cart Demo">
      <header>
        <div className="header-content">
          
          <h1>
            <span className="light">Shopping Cart</span>
            <br />
            A Simple Shopping Cart Demo made with Next.js 🛍
          </h1>
        </div>
      </header>
      <div>
      <Link as={`/cartpage`} href="/cartpage">
         <Button  className={classes.customButton}>
            <ShoppingCartIcon />
            <p>Checkout</p>
        </Button>
        
      </Link>
      <Cart>
          <Products />
        </Cart>
      </div>
    </Layout>
  )
}

const useStyles = makeStyles((theme) => ({
  customTitle: {
    textAlign: "center",
  },

  customButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default IndexPage
