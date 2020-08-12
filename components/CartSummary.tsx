import React, { useState, useEffect } from 'react'

import StripeTestCards from '../components/StripeTestCards'

import { useShoppingCart } from 'use-shopping-cart'
import { fetchPostJSON } from '../utils/api-helpers'

// @material-ui/core components
import { Button } from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles";

const CartSummary = () => {
  const [loading, setLoading] = useState(false)
  const [cartEmpty, setCartEmpty] = useState(true)
  const {
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout,
  } = useShoppingCart()

  useEffect(() => setCartEmpty(!cartCount), [cartCount])

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault()
    setLoading(true)

    const response = await fetchPostJSON(
      '/api/checkout_sessions/cart',
      cartDetails
    )

    if (response.statusCode === 500) {
      console.error( JSON.stringify( (response)))
      return
    } else {
      console.log(response)
    }

    redirectToCheckout({ sessionId: response.id })
  }
  const classes = useStyles();

  return (
    <form onSubmit={handleCheckout}>
      <h2>Cart summary</h2>
      {/* This is where we'll render our cart */}
      <p suppressHydrationWarning>
        <strong>Number of Items:</strong> {cartCount}
      </p>
      <p suppressHydrationWarning>
        <strong>Total:</strong> {formattedTotalPrice}
      </p>

      {/* Redirects the user to Stripe */}
      <StripeTestCards />
      <p style={{fontFamily:'italic', color: 'grey'}} >All items are registered with same id from stripe for sake of testing</p>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        className={classes.customButton}
        disabled={cartEmpty || loading}
      >
        Checkout
      </Button>
      <Button
        variant="contained"
        color="secondary"
        type="button"
        className={classes.customButton}
        onClick={clearCart}
      >
        Clear Cart
      </Button>
    </form>
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

export default CartSummary
