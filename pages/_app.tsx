import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks';
import {useApollo } from '../apollo/client/apollo-client';

import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
  
}

export default MyApp
