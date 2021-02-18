/** @jsx jsx */
import { jsx } from 'theme-ui';

import Section from 'src/styles/Section.module.css';
import Header from "src/components/header";
import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import PropertyAuthor from "src/components/propertyAuthor";
import FilterFormList from "src/components/FilterFormList";

import Footer from "src/components/Footer";

export default function List() {
  return (
    <>
      <Header 
        logoUrl={AllmatechLogo}
        logoHeight={40}
        logoWidth={190}  
        bgHeaderColor={"#f9f9f9"}      
      />

      <section className={Section.container}>
          <div className={Section.content}>
            <main>

            </main>
            <aside>
                <PropertyAuthor />
                <FilterFormList />
            </aside>
          </div>          
      </section>
      
      <Footer />
    </>    
  )
}