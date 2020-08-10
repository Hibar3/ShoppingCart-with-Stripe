import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import PrintObject from '../components/PrintObject'
import Cart from '../components/Cart'
import ClearCart from '../components/ClearCart'

import { fetchGetJSON } from '../utils/api-helpers'
import useSWR from 'swr'

// @material-ui/core components
import { Button } from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ResultPage: NextPage = () => {
  const router = useRouter();
  const classes = useStyles();
  //console.log(router.query)

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  )

  if (error) return <div>failed to load</div>

  return (
    <div>
      <Layout title="Checkout Payment Result | Next.js + TypeScript Example">
      <div className={classes.customButton}> 
      <Link as={`/`} href="/">
          <Button><ArrowBackIcon /> </Button>
          </Link>
      </div>
      <div className="page-container">
        
        <h1>Checkout Payment Result</h1>
        <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2>
        <h3>CheckoutSession response:</h3>
        <PrintObject content={data ?? 'loading...'} />
        <Cart>
          <ClearCart />
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

export default ResultPage
