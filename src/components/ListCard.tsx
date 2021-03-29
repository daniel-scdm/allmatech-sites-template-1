/** @jsx jsx */
import { jsx } from 'theme-ui'

import Image, { ImageLoaderProps } from "next/image";

import { FC } from 'react';
import { IPropertyXML } from "interfaces/index";
import property from "src/styles/Property.module.css";

import Link from "next/link";

import { GiHomeGarage, GiBathtub, GiPersonInBed } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

const myLoader = ({ src } : ImageLoaderProps) => {
    return src;
}

const ListCard : FC<IPropertyXML> = ({ CodigoImovel, QtdBanheiros, QtdDormitorios, QtdVagas, thumbnail, Observacao, TituloImovel, PrecoVenda, PrecoLocacao }) => {

    const numberWithCommas = (x : string | number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
    }

    return (        
        <div className={property.listCard}>
            <div className={property.imageCardContainer}>   
            {thumbnail && (
                <>
                    <Image                     
                        className={property.missingImageCard}
                        src={thumbnail}
                        loader={myLoader}
                        layout="fill"
                    />
                    <Link href={{
                        pathname: "/property",
                        query: { code: CodigoImovel?._text }
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
                    {PrecoVenda?._text && <span>Venda: R$ {numberWithCommas(PrecoVenda._text)}</span>}

                    {PrecoLocacao?._text && <span>Aluguel: R$ {numberWithCommas(PrecoLocacao._text)}</span>}
                </div>
            </div>
        </div>
    );
}

export default ListCard;