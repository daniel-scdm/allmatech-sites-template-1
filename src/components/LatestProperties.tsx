/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState, memo } from "react";
import styles from 'src/styles/Home.module.css';
import MissingImage from "public/images/missing-image.png";

import { IPropertyXML } from "interfaces";
import FeatureCard from "./featureCard";

type ListPropterties = {
    List: Array<IPropertyXML>
};

const filterTypeAluguel = (value : IPropertyXML) => {
    if(value.PrecoLocacao && typeof value.PrecoLocacao === "string") {
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

const LatestBuyProperties : React.FC<ListPropterties> = ({ List }) => {

    const [pList, setPList] = useState<Array<IPropertyXML>>([]);

    useEffect(() => {
        if(List && List.length > 0) {
            const sortArray = List.sort(compare);
            const orderedList = sortArray.filter(filterTypeAluguel).slice(0, 3);
            setPList(orderedList);
        }
    }, [List]);

    if(List && List.length === 0) {
        return (
            <section className={styles.spacingContainerEmpty} sx={{ color: "title" }}>
                <p>Não há anuncios em destaques.</p>
            </section>
        );
    }

    return (
        <section className={styles.spacingContainer}>
            <div className={styles.latestCards}>
                {pList.map(
                    (p) => (
                        <FeatureCard 
                            key={p.CodigoImovel}
                            title={p.TituloImovel}
                            address={p.Endereco}
                            typeState={p.TipoImovel}
                            bathrooms={p.QtdBanheiros}
                            area={p.AreaTotal}
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


export default memo(LatestBuyProperties);