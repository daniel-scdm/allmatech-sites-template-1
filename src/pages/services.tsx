/** @jsx jsx */
import { jsx } from 'theme-ui';

import section from 'src/styles/Section.module.css';
import Header from "src/components/header";
import Head from "next/head";

import Footer from "src/components/Footer";
 
function Services() {

  return (
    <>
        <Head>
            <title>Allmatech Imobiliária - Serviços</title>
            <meta name="description" content="Vejas todos os nossos serviços. Lorem hendrerit suscipit, amet." />
        </Head>
        <Header 
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
            <div className={section.servicesContent}>
                Conteudo definido pelo cliente
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Services;