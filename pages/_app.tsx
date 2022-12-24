import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '../styles/global';
import '../styles/globals.css';
import 'flowbite/dist/flowbite.css';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(
    {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }
  ))

  return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            <GlobalStyles />
          <Component  {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
  )
}
