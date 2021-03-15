/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { ICard } from "interfaces/index";
import Section from "src/styles/Section.module.css";
import Image, { ImageLoaderProps } from "next/image";

import LazyLoad from "react-lazyload";

import { FaBed, FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";

const myLoader = ({ src, width, quality } : ImageLoaderProps) => {
    return src;
}

const Card : FC<ICard> = ({ OfferMessage, bathrooms, bedrooms, garages, image, priceRent, priceSell, text, title, indexKey }) => {

    return (
        <LazyLoad
            offset={200}
            key={indexKey}
        >
            <div className={Section.card}>
                <div className={Section.imageCardContainer}>         
                    {image && (
                        <Image 
                            loader={myLoader}
                            src={image}
                            width="480"
                            height="320"
                        />
                    )} 
                    {!image && (
                        <Image 
                            loader={myLoader}
                            src={require("../../assets/images/missing-image.png")}
                            width="480"
                            height="320"
                        />                    
                    )}        
                    {OfferMessage && (
                        <div className={Section.offer}>
                            {OfferMessage}
                        </div>
                    )}
                </div>
                <div className={Section.cardInfo}>
                    <h3>
                        {title}
                    </h3>
                    <div className={Section.cardText}>
                        {text}
                    </div>
                    <div className={Section.cardFeatures}>
                        <div>
                            <FaBed /> {bedrooms ? bedrooms : 0}                            
                        </div>
                        <div>
                            <FaBath /> {bathrooms ? bathrooms : 0}
                        </div>
                        <div className={Section.garages}>
                            <GiHomeGarage /> {garages ? garages : 0}
                        </div>
                    </div>
                    <div className={Section.cardPrice}>
                        R$ {priceSell ? priceSell : priceRent}
                    </div>
                </div>
            </div>
        </LazyLoad>            
    );
}

export default Card;