import styles from 'src/styles/Home.module.css';
import Section from 'src/styles/Section.module.css';
import Header from "src/components/header";
import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import SectionFull from "src/components/fullSection";
import SearchForm from "src/components/SearchForm";

import HouseImage from "assets/images/house.jpg";
import { Flex } from '@theme-ui/components';

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
          <div className={Section.catchPhrase}>
              <h1>Encontre sua</h1>
              <span>propriedade dos sonhos</span>
              <span>em 1 clique</span>
          </div>
        </Flex>
        
      </SectionFull>      
      <div className={styles.container}>
        
      </div>
    </>    
  )
}
