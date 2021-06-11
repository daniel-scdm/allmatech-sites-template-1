/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState, useEffect } from 'react';
import { IListProperties, IPropertyXML, IPageDetails } from "interfaces";
import property from "src/styles/Property.module.css";

import ListCard from "src/components/ListCard";
import ListCardMobile from "src/components/ListCardMobile";

import Pagination from "src/components/Pagination";
import { FaThList, FaThLarge } from "react-icons/fa";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PAGE_LIMIT = 15;

const ListProperties : FC<IListProperties> = ({ List, isLoading }) => {

    const [paginatedList, setPaginatedList] = useState<Array<IPropertyXML>>([]);
    const [isCard, setIsCard] = useState(false);

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
                <SkeletonTheme color="#3b3b3b" highlightColor="#636363">
                    <div className={property.skeletonContainer}>
                        <Skeleton className={property.skeleton} count={10} />
                    </div>
                </SkeletonTheme>
            );
        }

        if(List && List.length === 0) {
            return (
                <div className={property.emptyList}>
                    <div sx={{ color: "text" }}>
                        Não foi possível encontrar imóveis

                    </div>
                </div>
            );
        }

        return (
            <>
                <div className={property.listOptionContainer}>
                    <div>
                        Resultados: {List?.length}
                    </div>
                    <div>
                        <button onClick={() => setIsCard(false)}>
                            <FaThList 
                                size={20} 
                                color={'#aaa'} 
                            />
                        </button>
                        <button onClick={() => setIsCard(true)}>
                            <FaThLarge 
                                size={20} 
                                color={'#aaa'} 
                            />
                        </button>
                    </div>
                </div>
                {!isCard && (
                    <div className={property.listContainer}>
                        {paginatedList.map((p) => (
                            <ListCard 
                                key={p.CodigoImovel}
                                Cidade={p.Cidade}
                                ValorIPTU={p.ValorIPTU}
                                UF={p.UF}
                                Complemento={p.Complemento}
                                AreaTotal={p.AreaTotal}
                                CodigoImovel={p.CodigoImovel}
                                thumbnail={(p.Fotos && p.Fotos.Foto && Array.isArray(p.Fotos.Foto)) ? p.Fotos?.Foto[0].Link[0].URLArquivo : undefined}
                                QtdBanheiros={p.QtdBanheiros}
                                Endereco={p.Endereco}
                                AreaUtil={p.AreaUtil}
                                TipoImovel={p.TipoImovel}
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
                )}

                {isCard && (
                    <div className={property.listContainerCards}>
                        {paginatedList.map((p) => (
                            <ListCardMobile 
                                key={p.CodigoImovel}
                                Cidade={p.Cidade}
                                ValorIPTU={p.ValorIPTU}
                                UF={p.UF}
                                Complemento={p.Complemento}
                                AreaTotal={p.AreaTotal}
                                CodigoImovel={p.CodigoImovel}
                                thumbnail={(p.Fotos && p.Fotos.Foto && Array.isArray(p.Fotos.Foto)) ? p.Fotos?.Foto[0].Link[0].URLArquivo : undefined}
                                QtdBanheiros={p.QtdBanheiros}
                                Endereco={p.Endereco}
                                AreaUtil={p.AreaUtil}
                                TipoImovel={p.TipoImovel}
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
                )}
                <Pagination
                    pageLimit={2}
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