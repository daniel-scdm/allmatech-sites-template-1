/** @jsx jsx */
import { jsx, Image } from 'theme-ui'

import { FC } from 'react';
import { ICard } from "interfaces/index";
import property from "src/styles/Property.module.css";

import Link from "next/link";

import { GiHomeGarage, GiBathtub, GiPersonInBed } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

const ListCard : FC<ICard> = ({ OfferMessage, bathrooms, bedrooms, garages, image, price, text, title, indexKey }) => {

    return (        
        <div className={property.listCard} key={indexKey}>
            <div className={property.imageCardContainer}>   
                <Image                     
                    className={property.missingImageCard}
                    src={image}
                />
                <Link href={{
                    pathname: "/property",
                    query: { code: 231123 }
                }}>
                    <a>
                        <BiSearch  size={40}/>
                    </a>
                </Link>                     
            </div>
            <div className={property.cardInfo}>
                <p>
                    {title}
                </p>
                <div className={property.cardText}>
                    {text}
                </div>
                <div className={property.cardFeatures}>
                    <div>
                        <GiPersonInBed size={38} /> <span>{bedrooms} </span>                           
                    </div>
                    <div>
                        <GiBathtub size={32} /> <span>{bathrooms}</span>
                    </div>
                    <div className={property.garages}>
                        <GiHomeGarage size={32} /> <span>{garages}</span>
                    </div>
                </div>
                <div className={property.cardPrice}>
                    A partir de R$ {price}
                </div>
            </div>
        </div>
    );
}

export default ListCard;