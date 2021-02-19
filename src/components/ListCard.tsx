/** @jsx jsx */
import { jsx, Image } from 'theme-ui'

import { FC } from 'react';
import { ICard } from "interfaces/index";
import Section from "src/styles/Section.module.css";

import LazyLoad from "react-lazyload";

import { FaBed, FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";

const ListCard : FC<ICard> = ({ OfferMessage, bathrooms, bedrooms, garages, image, price, text, title }) => {

    return (
        <LazyLoad
            offset={200}
        >
            <div className={Section.card}>
                <div>      
                    <Image                     
                        className={Section.missingImageCard}
                        src={image}
                    />        
                </div>
                <div className={Section.cardInfo}>
                    <p>
                        {title}
                    </p>
                    <div className={Section.cardText}>
                        {text}
                    </div>
                    <div className={Section.cardFeatures}>
                        <div>
                            <FaBed /> {bedrooms}                            
                        </div>
                        <div>
                            <FaBath /> {bathrooms}
                        </div>
                        <div className={Section.garages}>
                            <GiHomeGarage /> {garages}
                        </div>
                    </div>
                    <div className={Section.cardPrice}>
                       A partidr de R$ {price}
                    </div>
                </div>
            </div>
        </LazyLoad>            
    );
}

export default ListCard;