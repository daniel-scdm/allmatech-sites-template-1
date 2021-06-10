/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState, memo } from "react";
import FeatureCard from "src/components/featureCard";
import styles from 'src/styles/Home.module.css';

import { IPropertyXML } from "interfaces";
import MissingImage from "public/images/missing-image.png";

type ListPropterties = {
    List: Array<IPropertyXML>
};

const filterTypeVenda = (value : IPropertyXML) => {
    if(value.PrecoVenda && typeof value.PrecoVenda === "string") {
        return true;
    }
}

const compare = (a : IPropertyXML, b : IPropertyXML) => {
    if(a.DataCadastro && b.DataCadastro) {
        if(a.DataCadastro < b.DataCadastro){
            return -1;
        }
    
        if ( a.DataCadastro > b.DataCadastro ){
            return 1;
        }
        return 0;
    }

    return 0;

}

const LatestOfferProperties : React.FC<ListPropterties> = ({ List }) => {

    const [pList, setPList] = useState<Array<IPropertyXML>>([]);

    useEffect(() => {
        if(List && List.length > 0) {
            const sortArray = List.sort(compare);
            const newList = sortArray.filter(filterTypeVenda).slice(0, 3);
            setPList(newList);
        }
    }, [List]);

    if(List && pList.length === 0) {
        return (
            <section className={styles.spacingContainerEmpty} sx={{ color: "title" }}>
                <p>Não há anuncios em super destaques.</p>
            </section>
        );
    }

    return (
        <section className={styles.spacingContainer}>
            <div className={styles.latestCards}>
                {pList.map((p) => (
                    <FeatureCard 
                        key={p.CodigoImovel}
                        title={p.TituloImovel}
                        area={p.AreaTotal}
                        address={p.Endereco}
                        bathrooms={p.QtdBanheiros}
                        typeState={p.TipoImovel}
                        bedrooms={p.QtdDormitorios}
                        garages={p.QtdVagas}
                        priceSell={p.PrecoVenda}
                        priceRent={p.PrecoLocacao}
                        image={(p.Fotos && p.Fotos.Foto && Array.isArray(p.Fotos.Foto)) ? p.Fotos?.Foto[0].Link[0].URLArquivo : MissingImage}
                        code={p.CodigoImovel}
                    />
                ))}
            </div>
        </section>
    );
}


export default memo(LatestOfferProperties);