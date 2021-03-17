/** @jsx jsx */
import { jsx, Image } from 'theme-ui'

import { FC } from 'react';
import { IPropertyXML } from "interfaces/index";
import property from "src/styles/Property.module.css";

import Link from "next/link";

import { GiHomeGarage, GiBathtub, GiPersonInBed } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

const ListCard : FC<IPropertyXML> = ({ CodigoImovel, QtdBanheiros, QtdDormitorios, QtdVagas, thumbnail, Observacao, TituloImovel, indexKey, PrecoVenda, PrecoLocacao }) => {

    return (        
        <div className={property.listCard} key={indexKey}>
            <div className={property.imageCardContainer}>   
                <Image                     
                    className={property.missingImageCard}
                    src={thumbnail}
                />
                <Link href={{
                    pathname: "/property",
                    query: { code: CodigoImovel?._text }
                }}>
                    <a>
                        <BiSearch  size={40}/>
                    </a>
                </Link>                     
            </div>
            <div className={property.cardInfo}>
                <p>
                    {TituloImovel?._text}
                </p>
                <div className={property.cardText}>
                    {Observacao?._cdata}
                </div>
                <div className={property.cardFeatures}>
                    <div>
                        <GiPersonInBed size={38} /> <span>{QtdDormitorios?._text ? QtdDormitorios._text : 0} </span>                           
                    </div>
                    <div>
                        <GiBathtub size={32} /> <span>{QtdBanheiros?._text ? QtdBanheiros._text : 0}</span>
                    </div>
                    <div className={property.garages}>
                        <GiHomeGarage size={32} /> <span>{QtdVagas?._text ? QtdVagas._text : 0}</span>
                    </div>
                </div>
                <div className={property.cardPrice}>
                    {PrecoVenda?._text && <span>Venda: R$ {PrecoVenda._text}</span>}

                    {PrecoLocacao?._text && <span>Aluguel: R$ {PrecoLocacao._text}</span>}
                </div>
            </div>
        </div>
    );
}

export default ListCard;