import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Shopping Cart Demo">
     
      <div>
      <Cart>
          <Products />
        </Cart>
      </div>
    </Layout>
  )
}

export default IndexPage
