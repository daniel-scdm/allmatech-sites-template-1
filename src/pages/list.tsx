/** @jsx jsx */
import { jsx } from 'theme-ui';

import { useEffect, useState } from "react";
import { useAppContext } from "src/context/parseXml";

import Section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import PropertyAuthor from "src/components/propertyAuthor";
import FilterFormList from "src/components/FilterFormList";
import Sponsor from "src/components/Sponsor";
import Search from "src/components/Search";
import Header from "src/components/header";

import Footer from "src/components/Footer";
import { IPropertyXML, IContext } from 'interfaces';

import { useRouter } from 'next/router';
import { useFilter } from "src/hooks/useFilter";
import { useFetch } from "src/hooks/useFetch";

import ListProperties from "src/components/ListProperties";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function List() {

  const app : IContext | any = useAppContext();

  const router = useRouter();

  const { filterProperties } = useFilter(); 
  const { _fetchData } = useFetch();
 
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  const [listProperties, setListProperties] = useState<Array<IPropertyXML> | undefined>(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(app.properties.length === 0)
    if(app.properties.length === 0) {
      init();
    } else {
      handleQuery();
    }
    
  }, [app.properties]);

  const init = async () => {

      const res = await _fetchData();

      if(res && res.Imoveis) {
        await app.setProperties(res.Imoveis.Imovel);  
  
        handleQuery();
      }            
  }

  const handleQuery = () => {
    const { query } = router;
    const filteredProperties = filterProperties(app.properties, query); 
    setListProperties(filteredProperties);     
    setIsLoading(false);
    setIsLoadingScreen(false);          
  }

  const handleFilter = (query: object) => {
    setIsLoading(true);  
    const filteredProperties = filterProperties(app.properties, query); 
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
            propertyList={app.properties}
            callbackList={handleFilter}
          />
          <Sponsor />
          <Search />
        </>
      );
  }

  return (
    <>
      <Header 
          logoUrl={"public/images/Allmatech-logo-complete.jpeg"}
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

export default List;