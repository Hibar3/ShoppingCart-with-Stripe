import { NextPage } from 'next'
import Layout from '../components/Layout'

import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'

const CartPage: NextPage = () => {
  return (
    <Layout title="Shopping Cart">
      <div className="page-container">
        <h1>Checkout your Cart</h1>
       
        <Cart>
          <CartSummary />
        </Cart>
      </div>
    </Layout>
  )
}

export default CartPage