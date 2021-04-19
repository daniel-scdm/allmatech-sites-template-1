/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState } from 'react';
import { IPropertyXML } from "interfaces/index";
import property from "src/styles/Property.module.css";

import Link from "next/link";

import { GiHomeGarage, GiBathtub, GiPersonInBed, GiSnowflake1, GiPoolDive, GiSecurityGate } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";



const ListCard : FC<IPropertyXML> = ({ CodigoImovel, QtdBanheiros, QtdDormitorios, QtdVagas, thumbnail, Observacao, TituloImovel, PrecoVenda, PrecoLocacao, ArCondicionado, Piscina, Guarita }) => {

    const [imageError, setImageError] = useState(false);

    const SetError = () => setImageError(true);

    const numberWithCommas = (x : string | number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
    }

    return (        
        <div className={property.listCard}>
            <div className={property.imageCardContainer}>   
            {(thumbnail && !imageError) && (
                <>
                    <img
                        className={property.missingImageCard}
                        src={thumbnail}
                        onError={SetError}
                        alt="Thumbnail"
                    />
                    <Link href={{
                        pathname: "/property",
                        query: { code: CodigoImovel }
                    }}>
                        <a>
                            <BiSearch  size={40}/>
                        </a>
                    </Link>
                </> 
            )}

            {imageError && (
                <>
                    <img
                        className={property.missingImageCard}
                        src={"http://allmateste.com.br/site-next/public/images/missing-image.png"}
                        onError={SetError}
                        alt="Imagem vazia"
                    />
                    <Link href={{
                        pathname: "/property",
                        query: { code: CodigoImovel }
                    }}>
                        <a>
                            <BiSearch  size={40}/>
                        </a>
                    </Link>
                </> 
            )}
            </div>
            <div className={property.cardInfo}>
                <p>
                    {TituloImovel}
                </p>
                <div className={property.cardText}>
                    {Observacao}
                </div>
                <div className={property.cardFeatures}>
                    <div>
                        <GiPersonInBed size={38} /> <span>{typeof QtdDormitorios === "string" ? QtdDormitorios : 0} </span>                           
                    </div>
                    <div>
                        <GiBathtub size={32} /> <span>{typeof QtdBanheiros === "string" ? QtdBanheiros : 0}</span>
                    </div>
                    <div className={property.garages}>
                        <GiHomeGarage size={32} /> <span>{typeof QtdVagas === "string" ? QtdVagas : 0}</span>
                    </div>

                    {ArCondicionado && (
                        <div className={property.garages}>
                            <GiSnowflake1 size={32} />
                        </div>
                    )}

                    {Piscina && (
                        <div className={property.garages}>
                            <GiPoolDive size={32} />
                        </div>
                    )}

                    {Guarita && (
                        <div className={property.garages}>
                            <GiSecurityGate size={32} />
                        </div>
                    )}

                </div>
                <div className={property.cardPrice}>
                    {(PrecoVenda && typeof PrecoVenda === "string") && <span>Venda: R$ {numberWithCommas(PrecoVenda)}</span>}

                    {(PrecoLocacao && typeof PrecoLocacao === "string") && <span>Aluguel: R$ {numberWithCommas(PrecoLocacao)}</span>}
                </div>
            </div>
        </div>
    );
}

export default ListCard;