import { useEffect, useState, memo } from "react";
import Card from "src/components/Card";
import styles from 'src/styles/Home.module.css';

import { IPropertyXML } from "interfaces";

type ListPropterties = {
    List: Array<IPropertyXML>
};

const filterTypeVenda = (value : IPropertyXML) => {
    if(value.TipoOferta && value.TipoOferta._text === "3") {
        return true;
    }
}

const LatestOfferProperties : React.FC<ListPropterties> = ({ List }) => {

    const [totalPages, setTotalPages] = useState(Math.ceil(List.length / 3));
    const [pList, setPList] = useState<Array<IPropertyXML>>([]);
    const [paginatedList, setPaginatedList] = useState<Array<IPropertyXML>>([]);
    const [currentPage, setcurrentPage] = useState(1);

    useEffect(() => {
        if(List && List.length > 0) {
            const newList = List.filter(filterTypeVenda);
            setPList(newList);
            setTotalPages(Math.ceil(newList.length / 3));
        }
    }, [List]);

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
                        key={p.CodigoImovel?._text}
                        title={p.TituloImovel?._text}
                        text={p.Observacao?._cdata}
                        bathrooms={p.QtdBanheiros?._text}
                        bedrooms={p.QtdDormitorios?._text}
                        garages={p.QtdVagas?._text}
                        priceSell={p.PrecoVenda?._text}
                        priceRent={p.PrecoLocacao?._text}
                        OfferMessage={'Sobre oferta'}
                        image={p.Fotos?.Foto[0].Link[0].URLArquivo._text}
                        code={p.CodigoImovel?._text}
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


export default memo(LatestOfferProperties);