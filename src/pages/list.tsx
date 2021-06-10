/** @jsx jsx */
import { jsx } from 'theme-ui';

import { useEffect, useState } from "react";
import { useAppContext } from "src/context/parseXml";

import Section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import FilterFormList from "src/components/FilterFormList";
import Header from "src/components/header";
import Head from "next/head";

import Footer from "src/components/Footer";
import { IPropertyXML, IContext } from 'interfaces';

import { useRouter } from 'next/router';
import { useFilter } from "src/hooks/useFilter";
import { useApi } from "src/hooks/useApi";

import ListProperties from "src/components/ListProperties";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Link from "next/link";

function List() {

  const app : IContext | any = useAppContext();

  const router = useRouter();

  const { filterProperties } = useFilter(); 
  const { _fetchData } = useApi();
 
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  const [listProperties, setListProperties] = useState<Array<IPropertyXML> | undefined>(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);

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
    window.scrollTo(0, 0);

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
          <FilterFormList 
            propertyList={app.properties}
            callbackList={handleFilter}
          />
        </>
      );
  }

  return (
    <>
      <Head>
          <title>Allmatech Imobiliária - Imóveis</title>
          <meta name="description" content="Apenas os melhores imóveis para você. Lorem hendrerit suscipit, amet." />
      </Head>

      <Header />
      <section className={Section.container}>
          <div className={Section.lineLinks}>

            <Link href="https://allmateste.com.br/site-next/">
              <a>
                Home 
              </a>
            </Link>
            <span>{">"}</span> 
            Imóveis
          </div>
          <div className={property.contentReverse}>
           <aside>
                {renderContent()}
            </aside>
            <main>
              <ListProperties 
                List={listProperties}
                isLoading={isLoading}
              />
            </main>
          </div>
      </section>

      <Footer />
    </>
  )
}

export default List;