/** @jsx jsx */
import { jsx } from 'theme-ui';

import styles from 'src/styles/Home.module.css';
import Section from 'src/styles/Section.module.css';
import Header from "src/components/header";

import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import SectionFull from "src/components/fullSection";
import SearchForm from "src/components/SearchForm";
import CatchPhrase from "src/components/AnimatedCatchPhrase";

import Image from "next/image";

import HouseImage from "assets/images/house.jpg";
import { Flex } from '@theme-ui/components';

import dinamic from 'next/dynamic';

import Card from "src/components/Card";

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
        <Flex className={Section.sectionDiv}>
          <SearchForm />
          <CatchPhrase />
        </Flex>        
      </SectionFull>      
      <div 
        sx={{
          backgroundColor: "#eee"
        }}
        className={styles.featureContainer}
      >
        <LazyFeatures />
      </div>

      <div className={styles.recentPropertiesContainer}>
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
                offer={true}
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
                offer={true}
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
                offer={true}
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
      </div>

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
    </>    
  )
}