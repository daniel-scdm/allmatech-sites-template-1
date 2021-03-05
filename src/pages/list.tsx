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
import { IinitValues } from 'interfaces';

import { useRouter } from 'next/router';
import { useFetch } from "src/hooks/useFetch";

function List() {

  const { parsedXml, state } = useFetch();
  const router = useRouter();

  const [cities, setCities] = useState<Array<string> | undefined>([]);
  const [streets, setStreets] = useState<Array<string> | undefined>([]);

  const [listProperties, setListProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      if(state === "done") {
          const { query } = router;
          filterProperties(parsedXml.Carga.Imoveis.Imovel, query);  
          extractCity(parsedXml.Carga.Imoveis.Imovel);   
      }     
  }, [state]);

  const extractCity = (Imoveis : Array<object>) => {
      const mappedCities = Imoveis.map(imovel => {
        if(imovel && imovel.Cidade)
          return imovel.Cidade._text;

        return;
      });

      const filteredCities = mappedCities.filter(filterUnique);
      setCities(filteredCities);     
  }

  const extractStreets = (selectedCity : string) => {
      const mappedStreets = parsedXml.Carga.Imoveis.Imovel.map(imovel => {
        if(imovel.Cidade._text === selectedCity && imovel.Bairro)
          return imovel.Bairro._text;

        return;
      });

      const filteredStreets = mappedStreets.filter(filterUnique);
      setStreets(filteredStreets);    
  }

  const filterUnique = (value, index, self) => self.indexOf(value) === index && value !== undefined;

  const filterProperties = (properties : Array<object>, filterQuery : IinitValues) => {

      const Filter = Object.entries(filterQuery).map((entries : Array<any>) => {
        switch(entries[0]) {
            case "cidade" || "bairro": 
              if(entries[1] !== "") {
                return { [entries[0]]: entries[1] }
              }
              return;
            case "banheiros" || "garagem" || "quartos": 
              if(entries[1] !== 0) {
                return { [entries[0]]: entries[1] }
              }
              return;
            case "valores":               
              return { [entries[0]]: entries[1] }
            default: 
              break;
        }
        
      });

      console.log(Filter)
        
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
                isLoading={isLoading}
                List={[{}, {}]}
                pageNumber={1}
                total={200}
                totalPages={20}
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

export default List;