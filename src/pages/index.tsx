/** @jsx jsx */
import { jsx } from 'theme-ui';

import styles from 'src/styles/Home.module.css';
import Section from 'src/styles/Section.module.css';
import Header from "src/components/header";

import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import SectionFull from "src/components/fullSection";
import SearchForm from "src/components/SearchForm";
import CatchPhrase from "src/components/AnimatedCatchPhrase";

import HouseImage from "assets/images/house.jpg";
import { Flex } from '@theme-ui/components';

import dinamic from 'next/dynamic';

import Card from "src/components/Card";
import TeamCard from "src/components/TeamCard";
import NewsCard from "src/components/NewsCard";

import Footer from "src/components/Footer";

const LazyFeatures = dinamic(import("../components/Features"));

export default function Home() {
  return (
    <>
      <Header 
        logoUrl={AllmatechLogo}
        logoHeight={40}
        logoWidth={190}  
        bgHeaderColor={"#f9f9f9"}      
      />
      <SectionFull
        bgImage={HouseImage}
      >
        <div className={Section.sectionDiv}>
          <SearchForm />
          <CatchPhrase />
        </div>        
      </SectionFull>      
      <div 
        sx={{
          backgroundColor: "#eee"
        }}
        className={styles.featureContainer}
      >
        <LazyFeatures />
      </div>

      <section className={styles.recentPropertiesContainer}>
          <div>
              Propriedates mais recentes
          </div>
          <div sx={{ color: "#00205c" }}>
              Cheque alguns imóveis nossos mais recentes
          </div>


          <section className={styles.spacingContainer}>
            <div className={styles.latestCards}>
              <Card 
                title="Immense, Massive Views to Rottnest"
                text={`
                  Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
                  Aliquam necsa pien inleo ultrices tempus sedat justo. 
                  Suspen disse molestie adipiscing...
                `}
                bathrooms={4}
                bedrooms={5}
                garages={3}
                price={60000}
                OfferMessage={'Sobre oferta'}
              />

              <Card 
                title="Immense, Massive Views to Rottnest"
                text={`
                  Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
                  Aliquam necsa pien inleo ultrices tempus sedat justo. 
                  Suspen disse molestie adipiscing...
                `}
                bathrooms={4}
                bedrooms={5}
                garages={3}
                price={60000}
              />

              <Card 
                title="Immense, Massive Views to Rottnest"
                text={`
                  Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
                  Aliquam necsa pien inleo ultrices tempus sedat justo. 
                  Suspen disse molestie adipiscing...
                `}
                bathrooms={4}
                bedrooms={5}
                garages={3}
                price={60000}
                OfferMessage={'Sobre oferta'}
              />
            </div>
            <div className={styles.paginationButton}>
              <button>
              {`<<`} Página anterior 
              </button>
              <button>
                Póxima página {`>>`}
              </button>
            </div>
          </section>
      </section>

      <section
        className={styles.contactContainer}
      >
        <section>
          <h1>Precisa de conselho?</h1>
          <p>Nossos agentes podem te ajudar</p>
          <p>
              Fusce rutrum auctor odio vel sodales maecenas sit amet dignissim ex. 
              Sed volutpat hendrerit nisl eget at mattis praesent maximus lectus in 
              nulla fringilla, id euismod libero consequat etiam tellus justot.
          </p>
          <button>
              Contate 
          </button>
        </section>
        <section className={styles.contactImage}>          
        </section>          
      </section>

      <section 
        sx={{
          backgroundColor: "#eee"
        }}
        className={styles.recentPropertiesContainer}
      >
          <div>
              Aberto para inspeção
          </div>
          <div sx={{ color: "#00205c" }}>
              Melhores ofertas do dia
          </div>


          <section            
            className={styles.spacingContainer}
          >
            <div className={styles.latestCards}>
              <Card 
                title="Immense, Massive Views to Rottnest"
                text={`
                  Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
                  Aliquam necsa pien inleo ultrices tempus sedat justo. 
                  Suspen disse molestie adipiscing...
                `}
                bathrooms={4}
                bedrooms={5}
                garages={3}
                price={60000}
                OfferMessage={'Casa Aberta'}
              />

              <Card 
                title="Immense, Massive Views to Rottnest"
                text={`
                  Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
                  Aliquam necsa pien inleo ultrices tempus sedat justo. 
                  Suspen disse molestie adipiscing...
                `}
                bathrooms={4}
                bedrooms={5}
                garages={3}
                price={60000}
                OfferMessage={'Casa Aberta'}
              />

              <Card 
                title="Immense, Massive Views to Rottnest"
                text={`
                  Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
                  Aliquam necsa pien inleo ultrices tempus sedat justo. 
                  Suspen disse molestie adipiscing...
                `}
                bathrooms={4}
                bedrooms={5}
                garages={3}
                price={60000}
                OfferMessage={'Casa Aberta'}
              />
            </div>
            <div className={styles.paginationButton}>
              <button>
              {`<<`} Página anterior 
              </button>
              <button>
                Póxima página {`>>`}
              </button>
            </div>
          </section>          
      </section>
      <div 
        className={Section.diagonalBox} 
      >        
      </div>

      <section 
        sx={{
          marginTop: 120 
        }}
        className={styles.recentPropertiesContainer}
      >
          <div>
              Propriedades para aluguél
          </div>
          <div sx={{ color: "#00205c" }}>
              Cheque alguns imóveis nossos mais recentes
          </div>


          <section            
            className={styles.spacingContainer}
          >
            <div className={styles.latestCards}>
              <Card 
                title="Immense, Massive Views to Rottnest"
                text={`
                  Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
                  Aliquam necsa pien inleo ultrices tempus sedat justo. 
                  Suspen disse molestie adipiscing...
                `}
                bathrooms={4}
                bedrooms={5}
                garages={3}
                price={60000}
                OfferMessage={'Casa Aberta'}
              />

              <Card 
                title="Immense, Massive Views to Rottnest"
                text={`
                  Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
                  Aliquam necsa pien inleo ultrices tempus sedat justo. 
                  Suspen disse molestie adipiscing...
                `}
                bathrooms={4}
                bedrooms={5}
                garages={3}
                price={60000}
                OfferMessage={'Casa Aberta'}
              />

              <Card 
                title="Immense, Massive Views to Rottnest"
                text={`
                  Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
                  Aliquam necsa pien inleo ultrices tempus sedat justo. 
                  Suspen disse molestie adipiscing...
                `}
                bathrooms={4}
                bedrooms={5}
                garages={3}
                price={60000}
                OfferMessage={'Casa Aberta'}
              />
            </div>
            <div className={styles.paginationButton}>
              <button>
              {`<<`} Página anterior 
              </button>
              <button>
                Póxima página {`>>`}
              </button>
            </div>
          </section>          
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

            <button>
                Procure em nosso catálogo
            </button>
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
            <TeamCard 
              name="Jordanna Snow"
              cellphone="+1 236 456 7898"
              linkFB="#"
              linkLI="#"
              linkTW="#"
              linkI="#"
            />
          </div>          
        </div>
        
      </section>

      <section className={styles.specialOffer}>
          <h3>            
            Ofertas especiais para arrendamentos de longa duração 
            e contratos de aluguel de villas
          </h3>
          <button>
              Agendar agora
          </button>
      </section>

      <section 
        sx={{
          backgroundColor: "#eee"
        }}
        className={styles.recentPropertiesContainer}
      >
          <div>
              Noticias e Atualizações
          </div>
          <div sx={{ color: "#00205c" }}>              
              Novas informações, novos dados, novas opções
          </div>


          <section            
            className={styles.spacingContainer}
          >
            <div className={styles.latestCards}>
              <NewsCard 
                image="/assets/images/house-1.jpg"
                text={`
                  Lorem ipsum dolor sit amet
                `}
                link="#"                
              />
              <NewsCard 
                image="/assets/images/house-2.jpg"
                text={`
                  Lorem ipsum dolor sit amet
                `}
                link="#"                
              />
              <NewsCard 
                image="/assets/images/house-1.jpg"
                text={`
                  Lorem ipsum dolor sit amet
                `}
                link="#"                
              />              
            </div>            
          </section>          
      </section>
      <Footer />
    </>    
  )
}