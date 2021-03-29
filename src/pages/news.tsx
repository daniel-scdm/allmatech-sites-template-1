/** @jsx jsx */
import { jsx } from 'theme-ui';

import React, { useEffect, useState } from "react";

import Section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import ListNews from "src/components/NewsList";

import PropertyAuthor from "src/components/propertyAuthor";
import FilterNewsList from "src/components/FilterNewsList";

import Footer from "src/components/Footer";
import { ICardNews, IContext } from 'interfaces';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useAppContext } from "src/context/parseXml";
import { useRouter } from "next/router";

function News() {

  const app : IContext = useAppContext();
  const { query } = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  const [listNews, setListNews] = useState<Array<ICardNews>>([]);

  useEffect(() => {
    setListNews(app.Articles);
    const { text } = query;

    if(typeof text === 'string') {
      const regEx = new RegExp(text, "g");
      const filteredList = app.Articles.filter((a: ICardNews) => regEx.test(a.title));
      setListNews(filteredList);
    }

    setIsLoadingScreen(false);
    setIsLoading(false);
  }, []);

  const handleFilter = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const text = e.target.titulo.value;
    const regEx = new RegExp(text, "g");
    const filteredList = app.Articles.filter((a: ICardNews) => regEx.test(a.title));

    setListNews(filteredList);
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
          <FilterNewsList 
            callbackList={handleFilter}
          />
        </>
      )
  }

  return (
    <>
      <section className={Section.container}>
          <div className={property.contentReverse}>
            <main>
              <ListNews 
                List={listNews}
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