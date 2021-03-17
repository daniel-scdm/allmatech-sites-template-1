/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState, useEffect } from 'react';
import { IPageDetails, ICardNews, IListNews } from "interfaces";
import property from "src/styles/Property.module.css";

import ListNewsCard from "src/components/ListNewsCard";
import Pagination from "src/components/Pagination";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PAGE_LIMIT = 15;

const ListNews : FC<IListNews> = ({ List, isLoading }) => {

    const [paginatedList, setPaginatedList] = useState<Array<ICardNews>>([]);

    useEffect(() => {
        if(List) {
            paginate(1);    
        }          
    }, [List]);

    const paginate = (pg : number) => {      
        if(List) {
            const slicedList = List.slice((pg - 1) * PAGE_LIMIT, PAGE_LIMIT * pg);
            if(slicedList && slicedList.length > 0) {
                setPaginatedList(slicedList);
            }
        }        
    }

    const handlePageChange = (page : IPageDetails) => {
        paginate(page.currentPage);
    }

    const renderContainerList = () => {

        if(isLoading) {
            return (
                <SkeletonTheme color="#ddd" highlightColor="#ccc">
                    <div className={property.skeletonContainer}>
                        <Skeleton className={property.skeleton} count={10} />
                    </div>
                </SkeletonTheme>
            );
        }

        if(List && List.length === 0) {
            return (
                <div className={property.emptyList}>
                    <div>
                        Não foi possível encontrar noticias
                    </div>
                </div>
            );            
        }       

        return (
            <>
                <div>                
                    {paginatedList.map((p : ICardNews, i) => (
                        <ListNewsCard 
                            image={p.image}
                            text={p.text}
                            title={p.title}
                            indexKey={i.toString()}
                        />
                    ))}
                </div>            
                <Pagination
                    pageLimit={15}
                    pageNeighbours={2}
                    total={List ? List.length : 0}
                    onPageChanged={handlePageChange} 
                />                
            </> 
        );     
    }

    return (
        <div className={property.container}>
            {renderContainerList()}            
        </div>            
    );
}

export default ListNews;