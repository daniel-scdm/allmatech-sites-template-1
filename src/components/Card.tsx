/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { ICard } from "interfaces/index";
import Section from "src/styles/Section.module.css";
import Image, { ImageLoaderProps } from "next/image";

import LazyLoad from "react-lazyload";

import { FaBed, FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

import Link from "next/link";

const myLoader = ({ src } : ImageLoaderProps) => {
    return src;
}

const Card : FC<ICard> = ({ OfferMessage, bathrooms, bedrooms, garages, image, priceRent, priceSell, text, title, indexKey, code }) => {

    const numberWithCommas = (x : string | number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
    }

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
                    <Link href={{
                        pathname: "/property",
                        query: { code: code }
                    }}>
                        <a>
                            <BiSearch  size={40}/>
                        </a>
                    </Link>
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
                        R$ {priceSell ? numberWithCommas(priceSell) : priceRent ? numberWithCommas(priceRent) : ""}
                    </div>
                </div>
            </div>
        </LazyLoad>            
    );
}

export default Card;