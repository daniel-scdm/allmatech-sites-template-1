/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { IListProperties, IPropertyXML } from "interfaces/index";
import property from "src/styles/Property.module.css";

import ListCard from "src/components/ListCard";
import Pagination from "src/components/Pagination";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ListProperties : FC<IListProperties> = ({ List, pageNumber, total, totalPages, isLoading }) => {

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

        if(List.length === 0) {
            return (
                <div className={property.emptyList}>
                    <div>

                    </div>
                    Não foi possível encontrar imóveis
                </div>
            );            
        }

        const handlePageChange = (page) => {

            console.log(page, typeof page, List.length);
        }

        return (
            <>
                <div>                
                    {List.map((p : IPropertyXML, i) => (
                        <ListCard 
                            CodigoImovel={p.CodigoImovel}
                            thumbnail={p.Fotos?.Foto[0].Link[0].URLArquivo._text}
                            QtdBanheiros={p.QtdBanheiros}
                            QtdDormitorios={p.QtdDormitorios}
                            QtdVagas={p.QtdVagas}
                            PrecoVenda={p.PrecoVenda}
                            PrecoLocacao={p.PrecoLocacao}
                            Observacao={p.Observacao}
                            TituloImovel={p.TituloImovel}
                            indexKey={i.toString()}
                        />
                    ))}
                </div>            
                <Pagination
                    pageLimit={15}
                    pageNeighbours={2}
                    total={List.length}
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