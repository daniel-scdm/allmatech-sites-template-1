/** @jsx jsx */
import { jsx } from 'theme-ui';

import React, { useEffect, useState } from "react";

import Section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import ListNews from "src/components/NewsList";
import FilterNewsList from "src/components/FilterNewsList";
import Header from "src/components/header";

import Footer from "src/components/Footer";
import { ICardNews, IContext } from 'interfaces';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useAppContext } from "src/context/parseXml";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

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
          <FilterNewsList 
            callbackList={handleFilter}
          />
        </>
      )
  }

  return (
    <>
      <Head>
          <title>Allmatech Imobiliária - Notícias</title>
          <meta name="description" content="As notícias mais recentes sobre nossos imóveis." />
      </Head>
      <Header            
          bgHeaderColor={"#f9f9f9"}      
      />
      <section className={Section.container}>
          <div className={Section.lineLinks}>

            <Link href="https://allmateste.com.br/site-next/">
              <a>
                Home 
              </a>
            </Link>
            <span>{">"}</span> 
              Notícias
          </div>
          <div className={property.contentReverse}>            
            <aside>
                {renderContent()}
            </aside>
            <main>
              <ListNews 
                List={listNews}
                isLoading={isLoading}
              />
            </main>
          </div>          
      </section>
      
      <Footer />
    </>    
  )
}

export default News;