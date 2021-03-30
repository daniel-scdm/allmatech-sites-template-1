/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from "react";
import { useAppContext } from "src/context/parseXml";

import styles from 'src/styles/Home.module.css';
import Section from 'src/styles/Section.module.css';

import SectionFull from "src/components/fullSection";
import SearchForm from "src/components/SearchForm";
import CatchPhrase from "src/components/AnimatedCatchPhrase";

import HouseImage from "public/images/house.jpg";

import TeamCard from "src/components/TeamCard";
import NewsCard from "src/components/NewsCard";

import Footer from "src/components/Footer";
import LazyLoad from "react-lazyload";

import { useFilter } from "src/hooks/useFilter";
import Link from "next/link";

import { IContext } from "interfaces";

import LatestProperties from "src/components/LatestProperties";
import LatestOfferProperties from "src/components/LatestOfferProperties";
import Testimonials from "src/components/Testimonials";
import AnimatedLoadingScreen from "src/components/AnimatedLoadingScreen";
import Partners from "src/components/Partners";

import LazyFeatures from "src/components/Features";

export default function Home() {

  const app : IContext = useAppContext();
  const { extractCity, filterUnique } = useFilter();

  const [cities, setCities] = useState<Array<any>>([]);
  const [streetsBuy, setStreetsBuy] = useState<Array<any>>([]);
  const [streetsRent, setStreetsRent] = useState<Array<any>>([]);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  const [latestNews] = useState(app.Articles.slice(app.Articles.length - 3, app.Articles.length));

  useEffect(() => {
      if(app.state === "done") {
          const extractedCities = extractCity(app.parsedXml.Carga.Imoveis.Imovel);
          if(extractedCities) setCities(extractedCities);   
          setIsLoadingScreen(false);       
      }
  }, [app.state]); 

  const extractStreetsBuy = (selectedCity : string) => {
      const mappedStreets = app.parsedXml.Carga.Imoveis.Imovel.map((imovel : any) => {
        if(imovel.Cidade._text === selectedCity && imovel.Bairro)
          return imovel.Bairro._text;

        return;
      });

      const filteredStreets = mappedStreets.filter(filterUnique);
      setStreetsBuy(filteredStreets);    
  }

  const extractStreetsRent = (selectedCity : string) => {
    const mappedStreets = app.parsedXml.Carga.Imoveis.Imovel.map((imovel : any) => {
      if(imovel.Cidade._text === selectedCity && imovel.Bairro)
        return imovel.Bairro._text;

      return;
    });

    const filteredStreets = mappedStreets.filter(filterUnique);

    if(!filteredStreets.includes(undefined)) {
      setStreetsRent(filteredStreets); 
    }       
  }

  if(isLoadingScreen) {
    return <AnimatedLoadingScreen />
  }

  return (
    <>
      
      <SectionFull
        bgImage={HouseImage}
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
          <div>
              Super destaques
          </div>
          <div sx={{ color: "#00205c" }}>
              Cheque alguns de nossos imóveis em  super destaque
          </div>

          <LatestOfferProperties 
              List={app.parsedXml.Carga.Imoveis.Imovel}
          />          
      </section>   
      

      <section className={styles.recentPropertiesContainer}>
          <div>
              Últimas aquisições
          </div>
          <div sx={{ color: "#00205c" }}>
              Cheque alguns de nossos imóveis em destaque
          </div>

          <LatestProperties 
            List={app.parsedXml.Carga.Imoveis.Imovel}
          />
          
      </section>

      <section
        className={styles.contactContainer}
      >
          <LazyLoad 
            offset={100}  
            debounce={true} 
            once 
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
          </LazyLoad>  

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
        <div>
              Parceiros
        </div>
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
          <div>
            Compre ou venda
          </div>
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
          <div>
            Equipe
          </div>
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
          <div>
              Noticias e Atualizações
          </div>
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