/** @jsx jsx */
import { jsx } from 'theme-ui';

import section from 'src/styles/Section.module.css';
import Header from "src/components/header";
import Head from "next/head";

import Footer from "src/components/Footer";
 
function Custom404() {

  return (
    <>
        <Head>
            <title>Allmatech Imobiliária - 404</title>
            <meta name="description" content="404 - Página não encontrada." />
        </Head>
        <Header 
            logoHeight={40}
            logoWidth={190}  
            bgHeaderColor={"#f9f9f9"}      
        />
        <div className={section.bannerCompany}>
            <div className={section.bannerOverlay}>
                <div className={section.bannerText}>
                    <h1>Serviços</h1>
                </div>
            </div>
        </div>

        <section className={section.containerStaticPage}>
            <h1 className={section.pageError}>
                404 - Página não encontrada.
            </h1>
        </section>
        <Footer />
    </>
  )
}

export default Custom404;