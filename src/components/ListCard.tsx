/** @jsx jsx */
import { jsx, Image } from 'theme-ui'

import { FC } from 'react';
import { ICard } from "interfaces/index";
import ListStyle from "src/styles/List.module.css";

import { GiHomeGarage, GiBathtub, GiPersonInBed } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

const ListCard : FC<ICard> = ({ OfferMessage, bathrooms, bedrooms, garages, image, price, text, title, indexKey }) => {

    return (        
        <div className={ListStyle.listCard} key={indexKey}>
            <div className={ListStyle.imageCardContainer}>   
                <Image                     
                    className={ListStyle.missingImageCard}
                    src={image}
                />
                <a>
                    <BiSearch  size={40}/>
                </a>     
            </div>
            <div className={ListStyle.cardInfo}>
                <p>
                    {title}
                </p>
                <div className={ListStyle.cardText}>
                    {text}
                </div>
                <div className={ListStyle.cardFeatures}>
                    <div>
                        <GiPersonInBed size={38} /> <span>{bedrooms} </span>                           
                    </div>
                    <div>
                        <GiBathtub size={32} /> <span>{bathrooms}</span>
                    </div>
                    <div className={ListStyle.garages}>
                        <GiHomeGarage size={32} /> <span>{garages}</span>
                    </div>
                </div>
                <div className={ListStyle.cardPrice}>
                    A partir de R$ {price}
                </div>
            </div>
        </div>
    );
}

export default ListCard;