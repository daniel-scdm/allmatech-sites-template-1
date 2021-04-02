/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState, useEffect } from 'react';
import { IListProperties, IPropertyXML, IPageDetails } from "interfaces";
import property from "src/styles/Property.module.css";

import ListCard from "src/components/ListCard";
import Pagination from "src/components/Pagination";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PAGE_LIMIT = 15;

const ListProperties : FC<IListProperties> = ({ List, isLoading }) => {

    const [paginatedList, setPaginatedList] = useState<Array<IPropertyXML>>([]);
    
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

                    </div>
                    Não foi possível encontrar imóveis
                </div>
            );            
        }       

        return (
            <>
                <div>                
                    {paginatedList.map((p : IPropertyXML) => (
                        <ListCard 
                            key={p.CodigoImovel}
                            Cidade={""}
                            CodigoImovel={p.CodigoImovel}
                            thumbnail={p.Fotos?.Foto[0].Link[0].URLArquivo}
                            QtdBanheiros={p.QtdBanheiros}
                            QtdDormitorios={p.QtdDormitorios}
                            QtdVagas={p.QtdVagas}
                            PrecoVenda={p.PrecoVenda}
                            PrecoLocacao={p.PrecoLocacao}
                            Observacao={p.Observacao}
                            TituloImovel={p.TituloImovel}
                            ArCondicionado={p.ArCondicionado}
                            Piscina={p.Piscina}
                            Guarita={p.Guarita}
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

export default ListProperties;