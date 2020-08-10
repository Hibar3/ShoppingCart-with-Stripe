import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../apollo/client/apollo-client';

import '../styles.css'

function MyApp({ Component, pageProps, apollo }: AppProps) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
  
}

export default withData(MyApp)
