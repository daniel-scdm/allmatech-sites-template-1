/** @jsx jsx */
import { jsx } from 'theme-ui'

 

import { FC } from 'react';
import { IPropertyXML } from "interfaces/index";
import property from "src/styles/Property.module.css";

import Link from "next/link";

import { GiHomeGarage, GiBathtub, GiPersonInBed } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";



const ListCard : FC<IPropertyXML> = ({ CodigoImovel, QtdBanheiros, QtdDormitorios, QtdVagas, thumbnail, Observacao, TituloImovel, PrecoVenda, PrecoLocacao }) => {

    const numberWithCommas = (x : string | number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
    }

    return (        
        <div className={property.listCard}>
            <div className={property.imageCardContainer}>   
            {thumbnail && (
                <>
                    <img                     
                        className={property.missingImageCard}
                        src={thumbnail}
                            
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
                        <GiPersonInBed size={38} /> <span>{QtdDormitorios ? QtdDormitorios : 0} </span>                           
                    </div>
                    <div>
                        <GiBathtub size={32} /> <span>{QtdBanheiros ? QtdBanheiros : 0}</span>
                    </div>
                    <div className={property.garages}>
                        <GiHomeGarage size={32} /> <span>{QtdVagas ? QtdVagas : 0}</span>
                    </div>
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