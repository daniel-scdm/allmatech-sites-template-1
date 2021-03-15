/** @jsx jsx */
import { jsx } from 'theme-ui';

import { useEffect, useState } from "react";
import { useAppContext } from "src/context/parseXml";

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
import { IPropertyXML, IContext } from 'interfaces';

import { useRouter } from 'next/router';
import { useFilter } from "src/hooks/useFilter";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function News() {

  const app : IContext | any = useAppContext();

  const router = useRouter();
  const { filterProperties } = useFilter();  
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  const [listProperties, setListProperties] = useState<Array<IPropertyXML> | undefined>(undefined);

  useEffect(() => {
    if(!app.parsedXml) {
      app._fetchData();
    }
  }, []);

  useEffect(() => {
    if(app.parsedXml) {
      const { query } = router;
      const filteredProperties = filterProperties(app.parsedXml.Carga.Imoveis.Imovel, query); 
      setListProperties(filteredProperties);     
      setIsLoading(false);
      setIsLoadingScreen(false);
    }           
  }, [app.parsedXml]);

  const handleFilter = (query: object) => {
    setIsLoading(true);  
    const filteredProperties = filterProperties(app.parsedXml.Carga.Imoveis.Imovel, query); 
    setListProperties(filteredProperties);  
    setIsLoading(false);     
  }

  const renderContent = () => {

      if(isLoadingScreen) {
        return (
          <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <div className={property.skeletonContainer}>
                  <Skeleton className={property.skeletonAuthor} />
                  <Skeleton className={property.skeletonFilter} />
                  <Skeleton className={property.skeletonOther} />
              </div>
          </SkeletonTheme>
        );
      }

      return (
        <>
          <PropertyAuthor />
          <FilterFormList 
            propertyList={app.parsedXml.Carga.Imoveis.Imovel}
            callbackList={handleFilter}
          />
          <Sponsor />
          <Search />
        </>
      )
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
                isLoading={isLoading}
              />
            </main>
            <aside>
                {renderContent()}
            </aside>
          </div>          
      </section>
      
      <Footer />
    </>    
  )
}

export default News;