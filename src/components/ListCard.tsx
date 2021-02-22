/** @jsx jsx */
import { jsx, Image } from 'theme-ui'

import { FC } from 'react';
import { ICard } from "interfaces/index";
import ListStyle from "src/styles/List.module.css";

import { GiHomeGarage, GiBathtub, GiPersonInBed } from "react-icons/gi";

const ListCard : FC<ICard> = ({ OfferMessage, bathrooms, bedrooms, garages, image, price, text, title, indexKey }) => {

    return (        
        <div className={ListStyle.listCard} key={indexKey}>
            <div className={ListStyle.imageCardContainer}>      
                <Image                     
                    className={ListStyle.missingImageCard}
                    src={image}
                />        
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
                        <GiPersonInBed size={45} /> {bedrooms}                            
                    </div>
                    <div>
                        <GiBathtub size={40} /> {bathrooms}
                    </div>
                    <div className={ListStyle.garages}>
                        <GiHomeGarage size={40} /> {garages}
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