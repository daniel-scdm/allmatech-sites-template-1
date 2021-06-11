/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState } from 'react';
import { ICard } from "interfaces/index";
import Section from "src/styles/Section.module.css";
 
import { GiHomeGarage, GiSnowflake1, GiBathtub, GiPersonInBed } from "react-icons/gi";
import { BiSearch, BiArea } from "react-icons/bi";

import Link from "next/link";

const FeatureCard : FC<ICard> = ({ bathrooms, bedrooms, garages, image, priceRent, priceSell, title, code, air, area, address, typeState }) => {
    const replaceImage = () => setThumb("http://allmateste.com.br/site-next/public/images/missing-image.png");
    const [thumb, setThumb] = useState<string>(image ? image : "http://allmateste.com.br/site-next/public/images/missing-image.png");

    const numberWithCommas = (x : string | number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
    }

    return (
        <div className={Section.card} sx={{ backgroundColor: "bgCard" }}>
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
                <h3 sx={{ color: "title" }}>
                    {title}
                </h3>

                <h4 sx={{ color: "h4" }}>{address}</h4>

                <span>{typeState}</span>

                <div className={Section.cardFeatures} sx={{ color: "text" }}>
                    <div>
                        <GiPersonInBed size={38} title="Quartos" /> {(bedrooms && typeof bedrooms === "string") ? bedrooms : 0}
                    </div>
                    <div>
                        <GiBathtub size={32} title="Banheiros" /> {(bathrooms && typeof bathrooms === "string") ? bathrooms : 0}
                    </div>
                    <div className={Section.garages}>
                        <GiHomeGarage size={32} title="Vagas" /> {(garages && typeof garages === "string") ? garages : 0}
                    </div>

                    {area && (
                        <div className={Section.garages}>
                            <BiArea size={32} title="Área total" /> <span sx={{ color: "text" }}>{typeof area === "string"  ? `${area} m²` : ""}</span>
                        </div>
                    )}

                    {air && (
                        <div className={Section.garages}>
                            <GiSnowflake1 size={32} title="Ar condicionado" />
                        </div>
                    )}
                </div>
                <div className={Section.cardPrice} sx={{ color: "spotlight" }}>
                    {(priceRent && typeof priceRent === "string") && `R$ ${numberWithCommas(priceRent)}`}

                    {(priceSell && typeof priceSell === "string") && `R$ ${numberWithCommas(priceSell)}`}
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;