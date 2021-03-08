/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from "react";

import Section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import Header from "src/components/header";
import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import PropertyAuthor from "src/components/propertyAuthor";
import FilterFormList from "src/components/FilterFormList";
import Sponsor from "src/components/Sponsor";
import Search from "src/components/Search";

import PropertyContainer from "src/components/PropertyContainer";

import { useRouter } from 'next/router';
import { useFilter } from "src/hooks/useFilter";
import { useFetch } from "src/hooks/useFetch";

import { FaHouseDamage } from "react-icons/fa";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import Footer from "src/components/Footer";

function Property() {

  const { parsedXml, state } = useFetch();
  const { query } = useRouter();

  const { getPropertyByCode } = useFilter();
  const [prt, setPrt] = useState<any>(null);

  useEffect(() => {
    if(state === "done") {
        const { code } = query;
        const p = getPropertyByCode(parsedXml.Carga.Imoveis.Imovel, code);
        setPrt(p);
    }     
  }, [state]);

  const handlePropertyLoading = () => {
    if(state != "done" && !prt) {
      return (
          <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <div className={property.skeletonContainer}>
                  <Skeleton className={property.skeletonImage} />
                  <Skeleton className={property.skeletonBody} />
                  <Skeleton className={property.skeletonMessage} />
              </div>
          </SkeletonTheme>
      );
    }

    if(state === "done" && !prt) {
      return (
        <div className={property.emptyProperty}>
            <div>
              <FaHouseDamage />
            </div>
            <h3>
              Imovel não encontrado.
            </h3>
        </div>
      );
    }

    return (
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
    );
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
          <div className={property.content}>
            <main>
                {handlePropertyLoading()}
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