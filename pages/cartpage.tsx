import { NextPage } from 'next'
import Layout from '../components/Layout'
import Link from 'next/link'
import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'

// @material-ui/core components
import { Button } from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const CartPage: NextPage = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.customButton}> 
      <Link as={`/`} href="/">
          <Button><ArrowBackIcon /> </Button>
          </Link>
      </div>
    <Layout title="Shopping Cart">
      <div className="page-container">
        <h1>Checkout your Cart</h1>
       
        <Cart>
          <CartSummary />
        </Cart>
      </div>
      </Layout>
      </div>
  )
}

const useStyles = makeStyles((theme) => ({
  customTitle: {
    textAlign: "center",
  },

  customButton: {
    border: 0,
   // borderRadius: 3,
    color: 'white',
    height: 48,
    width: 20,
   // padding: '0 30px',
  },
}));

export default CartPage