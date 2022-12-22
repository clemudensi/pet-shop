import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '../styles/global';
import '../styles/globals.css';
import '../styles/Home.module.css';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            <GlobalStyles />
          <Component  {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
  )
}
