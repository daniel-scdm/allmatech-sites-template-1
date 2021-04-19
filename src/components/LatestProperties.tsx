import { useEffect, useState, memo } from "react";
import styles from 'src/styles/Home.module.css';
import MissingImage from "public/images/missing-image.png";

import { IPropertyXML } from "interfaces";
import FeatureCard from "./featureCard";

type ListPropterties = {
    List: Array<IPropertyXML>
};

const LatestBuyProperties : React.FC<ListPropterties> = ({ List }) => {

    const [totalPages, setTotalPages] = useState(Math.ceil(List.length / 3));
    const [pList, setPList] = useState<Array<IPropertyXML>>([]);
    const [paginatedList, setPaginatedList] = useState<Array<IPropertyXML>>([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [numberOfCards, setNumberOfCards] = useState(3);

    useEffect(() => {
        if(List && List.length > 0) {
            const orderedList = List.reverse().slice(0, 6);
            setPList(orderedList);
            setTotalPages(Math.ceil(orderedList.length / 3));
        }
    }, [List]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 860px)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, [pList]);

    const handleMediaQueryChange = (mediaQuery : any) => {
        if (mediaQuery.matches) {
            setNumberOfCards(3);
            if(pList.length > 0) setTotalPages(Math.ceil(pList.length / 3));
        } else {
            setNumberOfCards(1);
            if(pList.length > 0) setTotalPages(Math.ceil(pList.length));
        }
    };

    useEffect(() => {
        setcurrentPage(1);
    }, [numberOfCards]);

    useEffect(() => {
        setPaginationList(currentPage);
    }, [currentPage, pList]);

    const setPaginationList = (page: number) => {
        const slicedList = pList.slice((page - 1) * numberOfCards, numberOfCards * page);
        if(slicedList.length > 0) setPaginatedList(slicedList);
    }

    const foward = () => setcurrentPage(currentPage + 1);
    const back = () => setcurrentPage(currentPage - 1);

    if(List && List.length === 0) {
        return (
            <section className={styles.spacingContainer}>
                <p>Não há anuncios em destaques.</p>
            </section>
        );
    }

    return (
        <section className={styles.spacingContainer}>
            <div className={styles.latestCards}>
                {paginatedList.map(
                    (p) => (
                        <FeatureCard 
                            key={p.CodigoImovel}
                            title={p.TituloImovel}
                            text={p.Observacao}
                            bathrooms={p.QtdBanheiros}
                            bedrooms={p.QtdDormitorios}
                            garages={p.QtdVagas}
                            priceSell={p.PrecoVenda}
                            priceRent={p.PrecoLocacao}
                            image={(p.Fotos && p.Fotos.Foto && Array.isArray(p.Fotos.Foto)) ? p.Fotos?.Foto[0].Link[0].URLArquivo : MissingImage}
                            code={p.CodigoImovel}
                        />
                ))}
            </div>
            <div className={styles.paginationButton}>
                {currentPage > 1 && (
                    <button onClick={back}>
                        {`<<`}
                    </button>
                )}
                {currentPage < totalPages && (
                    <button onClick={foward}>
                        {`>>`}
                    </button>
                )}
            </div>
        </section>
    );
}


export default memo(LatestBuyProperties);