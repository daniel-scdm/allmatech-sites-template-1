/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState } from 'react';
import { ICard } from "interfaces/index";
import Section from "src/styles/Section.module.css";
 
import { FaBed, FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

import Link from "next/link";

const FeatureCard : FC<ICard> = ({ bathrooms, bedrooms, garages, image, priceRent, priceSell, text, title, code, air }) => {
    const replaceImage = () => setThumb("http://allmateste.com.br/site-next/public/images/missing-image.png");
    const [thumb, setThumb] = useState<string>(image ? image : "http://allmateste.com.br/site-next/public/images/missing-image.png");

    const numberWithCommas = (x : string | number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
    }

    return (
        <div className={Section.card}>
            <div className={Section.imageCardContainer}>
                {image && (
                    <img 
                        src={thumb}
                        onError={replaceImage}
                        height="320"
                        alt="Thumbnail"
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
                        <FaBed /> {(bedrooms && typeof bedrooms === "string") ? bedrooms : 0}                            
                    </div>
                    <div>
                        <FaBath /> {(bathrooms && typeof bathrooms === "string") ? bathrooms : 0}
                    </div>
                    <div className={Section.garages}>
                        <GiHomeGarage /> {(garages && typeof garages === "string") ? garages : 0}
                    </div>

                    {air && (
                        <div className={Section.garages}>
                            <GiHomeGarage /> {garages ? garages : 0}
                        </div>
                    )}
                </div>
                <div className={Section.cardPrice}>
                    {(priceRent && typeof priceRent === "string") && `R$ ${numberWithCommas(priceRent)}`}

                    {(priceSell && typeof priceSell === "string") && `R$ ${numberWithCommas(priceSell)}`}
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;