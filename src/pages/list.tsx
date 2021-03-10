/** @jsx jsx */
import { jsx } from 'theme-ui';

import { useEffect, useState } from "react";

import Section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import Header from "src/components/header";
import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import ListProperties from "src/components/ListProperties";

import PropertyAuthor from "src/components/propertyAuthor";
import FilterFormList from "src/components/FilterFormList";
import Sponsor from "src/components/Sponsor";
import Search from "src/components/Search";

import Footer from "src/components/Footer";
import { IPropertyXML } from 'interfaces';

import { useRouter } from 'next/router';
import { useFetch } from "src/hooks/useFetch";
import { useFilter } from "src/hooks/useFilter";

function List() {

  const { parsedXml, state } = useFetch();
  const router = useRouter();
  const { filterProperties } = useFilter();  

  const [listProperties, setListProperties] = useState<Array<IPropertyXML> | undefined>(undefined);

  useEffect(() => {
      if(state === "done") {
          const { query } = router;
          const filteredProperties = filterProperties(parsedXml.Carga.Imoveis.Imovel, query); 
          setListProperties(filteredProperties);          
      }     
  }, [state]);

  const handleFilter = (query: object) => {
    const filteredProperties = filterProperties(parsedXml.Carga.Imoveis.Imovel, query); 
    setListProperties(filteredProperties);  
  }

  return (
    <>
      <Header 
        logoUrl={AllmatechLogo}
        logoHeight={40}
        logoWidth={190}  
        bgHeaderColor={"#f9f9f9"}      
      />

      <section className={Section.container}>
          <div className={property.contentReverse}>
            <main>
              <ListProperties 
                List={listProperties}
              />
            </main>
            <aside>
                <PropertyAuthor />
                <FilterFormList 
                  propertyList={listProperties}
                  callbackList={handleFilter}
                />
                <Sponsor />
                <Search />
            </aside>
          </div>          
      </section>
      
      <Footer />
    </>    
  )
}

export default List;