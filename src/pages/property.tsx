/** @jsx jsx */
import { jsx } from 'theme-ui';

import Section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import Header from "src/components/header";
import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import PropertyAuthor from "src/components/propertyAuthor";
import FilterFormList from "src/components/FilterFormList";
import Sponsor from "src/components/Sponsor";
import Search from "src/components/Search";

import PropertyContainer from "src/components/PropertyContainer";

import Footer from "src/components/Footer";

function Property() {
  return (
    <>
      <Header 
        logoUrl={AllmatechLogo}
        logoHeight={40}
        logoWidth={190}  
        bgHeaderColor={"#f9f9f9"}      
      />

      <section className={Section.container}>
          <div className={property.content}>
            <main>
                <PropertyContainer 
                  bathrooms={3}
                  bedrooms={4}
                  garages={2}
                  price={40000}
                  text={`
                      Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
                      Aliquam necsa pien inleo ultrices tempus sedat justo. 
                      Suspen disse molestie adipiscing turpis, ut scelerisque mauris. 
                      Mauris at dictum lectus, at sodales ante. 
                      Suspendisse sollicitudin velit id accumsan sodales. 
                      Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                      Curabitur id purus enim. Ut porta vulputate odio, ac sollicitudin lectus iaculis nec. 
                      Etiam porttitor lobortis ligula quis condimentum. 
                      Nullam hendrerit eros hendrerit sem varius, a tincidunt mi eleifend. 
                      Fusce congue eu odio ut convallis.
                  `}
                  title="9 Ashmore Way, Sorrento WA 6020"
                
                />
            </main>
            <aside>
                <PropertyAuthor />
                <FilterFormList />
                <Sponsor />
                <Search />
            </aside>
          </div>          
      </section>
      
      <Footer />
    </>    
  )
}

export default Property;