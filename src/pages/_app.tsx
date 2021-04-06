import 'src/styles/globals.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'rc-slider/assets/index.css';
import 'azure-maps-control/dist/atlas.min.css';
import 'mapbox-gl/src/css/mapbox-gl.css';

import { AppWrapper } from "src/context/parseXml";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <AppWrapper>        
        <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
