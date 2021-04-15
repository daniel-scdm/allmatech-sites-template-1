/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from "react";
import { useAppContext } from "src/context/parseXml";

import styles from 'src/styles/Home.module.css';
import Section from 'src/styles/Section.module.css';

import SectionFull from "src/components/fullSection";
import SearchForm from "src/components/SearchForm";
import CatchPhrase from "src/components/AnimatedCatchPhrase";

import TeamCard from "src/components/TeamCard";
import NewsCard from "src/components/NewsCard";

import Footer from "src/components/Footer";

import { useFilter } from "src/hooks/useFilter";
import { useApi } from "src/hooks/useApi";

import Link from "next/link";

import { IContext } from "interfaces";

import LatestProperties from "src/components/LatestProperties";
import LatestOfferProperties from "src/components/LatestOfferProperties";
import Testimonials from "src/components/Testimonials";
import Partners from "src/components/Partners";
import AnimatedLoadingScreen from "src/components/AnimatedLoadingScreen";
import Header from "src/components/header";
import Head from "next/head";

import LazyFeatures from "src/components/Features";

export default function Home() {
  
  const app : IContext = useAppContext();
  const { extractCity, filterUnique } = useFilter();
  const { _fetchData } = useApi();

  const [cities, setCities] = useState<Array<any>>([]);
  const [streetsBuy, setStreetsBuy] = useState<Array<any>>([]);
  const [streetsRent, setStreetsRent] = useState<Array<any>>([]);

  const [loadingScreen, setLoadingScreen] = useState<boolean>(true);

  const [latestNews] = useState(app.Articles.slice(app.Articles.length - 3, app.Articles.length));

  useEffect(() => {
    if(app.properties.length === 0) {
      init();
    } else {
      const cities = extractCity(app.properties);
      setCities(cities);
      setLoadingScreen(false);
    }
  }, []);

  useEffect(() => {
    if(app.properties.length > 0 && cities.length > 0) {
      setLoadingScreen(false);
    }
  }, [app.properties, cities]);

  const init = async () => {
      const res = await _fetchData();

      if(res && res.Imoveis) {
        app.setProperties(res.Imoveis.Imovel);

        const cities = extractCity(res.Imoveis.Imovel);
        setCities(cities);
      }
  }

  const extractStreetsBuy = (selectedCity : string) => {
      const mappedStreets = app.properties.map((imovel : any) => {
        if(imovel.Cidade === selectedCity && imovel.Bairro)
          return imovel.Bairro;

      });

      const filteredStreets = mappedStreets.filter(filterUnique);
      setStreetsBuy(filteredStreets);    
  }

  const extractStreetsRent = (selectedCity : string) => {
    const mappedStreets = app.properties.map((imovel : any) => {
      if(imovel.Cidade === selectedCity && imovel.Bairro)
        return imovel.Bairro;

    });

    const filteredStreets = mappedStreets.filter(filterUnique);
    setStreetsRent(filteredStreets);    
  }

  if(loadingScreen) {
    return <AnimatedLoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Allmatech Imobiliária</title>
        <meta name="description" content="O melhor portal de imóveis." />
      </Head>

      <Header            
          bgHeaderColor={"#f9f9f9"}      
      />
      <SectionFull
      >
        <div className={Section.sectionDiv}>
          <SearchForm 
            cityList={cities}
            updateStreetBuy={extractStreetsBuy}
            updateStreetRent={extractStreetsRent}
            streetListBuy={streetsBuy}
            streetListRent={streetsRent}
          />
          <CatchPhrase />
        </div>        
      </SectionFull>   

      <section 
        sx={{
          backgroundColor: "#eee"
        }}
        className={styles.recentPropertiesContainer}
      >
          <h1>
              Super destaques
          </h1>
          <div sx={{ color: "#00205c" }}>
              Cheque alguns de nossos imóveis em  super destaque
          </div>

          <LatestOfferProperties 
              List={app.properties}
          />
      </section>


      <section className={styles.recentPropertiesContainer}>
          <h1>
              Últimas aquisições
          </h1>
          <div sx={{ color: "#00205c" }}>
              Cheque alguns de nossos imóveis em destaque
          </div>

          <LatestProperties 
            List={app.properties}
          />
      </section>

      <section
        className={styles.contactContainer}
      >
          <section className={styles.advice}>
            <h1>Precisa de conselho?</h1>
            <p>Nossos agentes podem te ajudar</p>
            <p>
                Fusce rutrum auctor odio vel sodales maecenas sit amet dignissim ex.
                Sed volutpat hendrerit nisl eget at mattis praesent maximus lectus in
                nulla fringilla, id euismod libero consequat etiam tellus justot.
            </p>
            <Link href="/contact">
              <a>
                Contate
              </a>
            </Link>
          </section>

          <section className={styles.contactImage}>

          </section>
      </section>

      <section 
        sx={{
          backgroundColor: "#eee"
        }}
        className={styles.featureContainer}
      >
        <LazyFeatures />
      </section>

      <div 
        className={Section.diagonalBox} 
      >        
      </div>

      <section className={styles.specialOffer}>
          <Testimonials />          
      </section>

      <div 
        className={Section.invertedDiagonalBoxLeftBlue} 
      >        
      </div>
      
      <section className={styles.partners}>
        <h1>
              Parceiros
        </h1>
        <div className={styles.partnersContainer}>
            <Partners />
        </div>
      </section>

      <div 
        className={Section.invertedDiagonalBox} 
      >        
      </div>

      <section
        className={Section.BuyOrSell}
      >
        <div className={Section.BuyOrSellContent}>
          <h1>
            Compre ou venda
          </h1>
          <div>
            Procurando comprar um novo imóvel ou vender um existente?
          </div>
          <div>
            Nós temos uma solução incrivel!
          </div>
          <div className={Section.BuyOrSellActions}>
            <button>
                Envie seu imóvel
            </button>

            <Link href="/list">
              <a>
                Procure em nosso catálogo
              </a>
            </Link>
          </div>          
        </div>
        <div 
          className={Section.invertedDiagonalBoxLeft} 
        >        
        </div>
      </section>

      <section
        className={Section.Team}
      >
        <div className={Section.TeamContent}>
          <h1>
            Equipe
          </h1>
          <div sx={{ color: "#00205c" }}>
            De uma olhada em nossa equipe
          </div>
          
          <div className={styles.latestCards}>
            <TeamCard 
              name="Fatima Beatriz"
              cellphone="+1 236 456 7898"
              linkFB="#"
              linkLI="#"
              linkTW="#"
              linkI="#"
            />
            <TeamCard 
              name="Frazer Mccann"
              cellphone="+1 236 456 7898"
              linkFB="#"
              linkLI="#"
              linkTW="#"
              linkI="#"
            />
            <TeamCard 
              name="Bret Walker"
              cellphone="+1 236 456 7898"
              linkFB="#"
              linkLI="#"
              linkTW="#"
              linkI="#"
            />            
          </div>          
        </div>
        
      </section>

      <section 
        className={styles.recentPropertiesContainer}
      >
          <h1>
              Noticias e Atualizações
          </h1>
          <div sx={{ color: "#00205c" }}>              
              Novas informações, novos dados, novas opções
          </div>


          <section            
            className={styles.spacingContainerNews}
          >
            <div className={styles.latestCards}>
              {latestNews.map((a : any, i : number) => (
                <NewsCard 
                  key={i.toString()}
                  text={a.title}
                  image={a.image}
                  code={i}
                />
              ))}
            </div>
          </section>
      </section>
      <Footer />
    </>    
  )
}