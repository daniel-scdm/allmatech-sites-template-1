/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { ICard } from "interfaces/index";
import Section from "src/styles/Section.module.css";
 

import LazyLoad from "react-lazyload";

import { FaBed, FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

import Link from "next/link";

const Card : FC<ICard> = ({ bathrooms, bedrooms, garages, image, priceRent, priceSell, text, title, indexKey, code }) => {

    const numberWithCommas = (x : string | number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
    }
    
    const isValid = (priceSell : any, priceRent: any) => {
        if(priceRent && typeof priceRent === "string") {
            return numberWithCommas(priceRent);

        }
        
        if(priceSell && typeof priceSell === "string") {
            return numberWithCommas(priceSell);

        }
    }

    return (
        <LazyLoad
            offset={200}
            key={indexKey}
        >
            <div className={Section.card}>
                <div className={Section.imageCardContainer}>         
                    {image && (
                        <img 
                            src={image}
                            height="320"
                        />
                    )} 
                    {!image && (
                        <img 
                            src={"public/images/missing-image.png"}
                            height="320"
                        />                    
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
                        R$ {isValid(priceSell, priceRent)}
                    </div>
                </div>
            </div>
        </LazyLoad>            
    );
}

export default Card;