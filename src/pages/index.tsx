import styles from 'src/styles/Home.module.css';
import Header from "src/components/header";
import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import SectionFull from "src/components/fullSection";
import SearchForm from "src/components/SearchForm";

import HouseImage from "assets/images/house.jpg";

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
        <SearchForm />
      </SectionFull>      
      <div className={styles.container}>
        
      </div>
    </>    
  )
}
