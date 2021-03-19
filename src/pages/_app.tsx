import 'src/styles/globals.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'rc-slider/assets/index.css';

import Header from "src/components/header";

import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import { AppWrapper } from "src/context/parseXml";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <AppWrapper>
        <Header 
          logoUrl={AllmatechLogo}
          logoHeight={40}
          logoWidth={190}  
          bgHeaderColor={"#f9f9f9"}      
        />
        <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
