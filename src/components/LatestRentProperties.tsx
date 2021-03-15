import { useEffect, useState, memo } from "react";
import Card from "src/components/Card";
import styles from 'src/styles/Home.module.css';

import { IPropertyXML } from "interfaces";

type ListPropterties = {
    List: Array<IPropertyXML>
};

const filterTypeLocacao = (value : IPropertyXML) => {
    if(value.PrecoLocacao && value.PrecoLocacao._text) {
        return true;
    }
}

const LatestRentProperties : React.FC<ListPropterties> = ({ List }) => {

    const [totalPages] = useState(Math.ceil(List.length / 3));
    const [pList, setPList] = useState<Array<IPropertyXML>>([]);
    const [paginatedList, setPaginatedList] = useState<Array<IPropertyXML>>([]);
    const [currentPage, setcurrentPage] = useState(1);

    useEffect(() => {
        if(List && List.length > 0) {
            const newList = List.filter(filterTypeLocacao);
            setPList(newList);
        }
    }, []);

    useEffect(() => {
        setPaginationList(currentPage)
    }, [currentPage, pList]);

    const setPaginationList = (page: number) => {
        const slicedList = pList.slice((page - 1) * 3, 3 * page);
        setPaginatedList(slicedList);
    }

    const foward = () => setcurrentPage(currentPage + 1);
    const back = () => setcurrentPage(currentPage - 1);

    return (
        <section className={styles.spacingContainer}>
            <div className={styles.latestCards}>
                {paginatedList.map((p) => (
                    <Card 
                        title={p.TituloImovel?._text}
                        text={p.Observacao?._cdata}
                        bathrooms={p.QtdBanheiros?._text}
                        bedrooms={p.QtdDormitorios?._text}
                        garages={p.QtdVagas?._text}
                        priceRent={p.PrecoLocacao?._text}
                        OfferMessage={'Sobre oferta'}
                        indexKey={p.CodigoImovel?._text}
                    />
                ))}
            </div>
            <div className={styles.paginationButton}>
                {currentPage !== 1 && (
                    <button onClick={back}>
                        {`<<`} Página anterior 
                    </button>
                )}
                {currentPage !== totalPages && (
                    <button onClick={foward}>
                        Póxima página {`>>`}
                    </button>
                )}              
            </div>
        </section>
    );
}


export default memo(LatestRentProperties);