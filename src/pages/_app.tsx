import 'src/styles/globals.css';
import 'react-alice-carousel/lib/alice-carousel.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
