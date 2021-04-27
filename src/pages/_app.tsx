import 'src/styles/globals.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'rc-slider/assets/index.css';
import 'azure-maps-control/dist/atlas.min.css';
import 'mapbox-gl/src/css/mapbox-gl.css';

import { useEffect } from "react";
import { useRouter } from "next/router";

import theme from "theme";
import { ThemeProvider } from "theme-ui";
import * as gtag from "lib/gtag";
const isProduction = process.env.NODE_ENV === "production";

import { AppWrapper } from "src/context/parseXml";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps } : AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
          <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
