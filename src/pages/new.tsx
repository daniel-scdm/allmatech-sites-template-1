/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from "react";

import Section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';
import Footer from "src/components/Footer";

import PropertyAuthor from "src/components/propertyAuthor";
import FilterNewsList from "src/components/FilterNewsList";
import Header from "src/components/header";

import NewsContainer from "src/components/NewsContainer";

import { useRouter } from 'next/router';
import { useAppContext } from "src/context/parseXml";

import { FaNewspaper } from "react-icons/fa";

import { ICardNews, IContext, IArticle } from "interfaces";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


function New() {

  const { Articles } : IContext = useAppContext();

  const { query, push } = useRouter();
  const [news, setNews] = useState<ICardNews>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const { code } = query;

      if(code && typeof code === 'string') {
        const selectedNews = Articles.filter((a : IArticle) => Articles.indexOf(a) === parseInt(code));
        if(selectedNews && selectedNews.length) setNews(selectedNews[0]);
      }

      setIsLoading(false);     
  }, []);

  const handleFilter = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    
    const text = e.target.titulo.value;
    push({
      pathname: "/news",
      query: { text }
    });
  }

  const handlePropertyLoading = () => {
    if(!news && isLoading) {
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

    if(!news && !isLoading) {
      return (
        <div className={property.emptyProperty}>
            <div>
              <FaNewspaper />
            </div>
            <h3>
              Notícia não encontrado.
            </h3>
        </div>
      );
    }

    if(news) {
      return (
        <NewsContainer 
          image={news.image}
          text={news.text}
          title={news.title}
        />
      );
    }   
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
          <div className={property.content}>
            <main>
                {handlePropertyLoading()}
            </main>
            <aside>
                <PropertyAuthor />
                <FilterNewsList 
                  callbackList={handleFilter}
                />
            </aside>
          </div>           
      </section>
      
      <Footer />
    </>    
  )
}

export default New;