/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { ICard } from "interfaces/index";
import Section from "src/styles/Section.module.css";

const Card : FC<ICard> = ({ OfferMessage, bathrooms, bedrooms, garages, image, price, text, title }) => {

    return (
        <div className={Section.card}>
            <div>                
                <div 
                    className={Section.missingImageCard}
                    sx={{
                        backgroundImage: require("../../assets/images/missing-image.png")
                    }}
                >
                    {OfferMessage && (
                        <div className={Section.offer}>
                            {OfferMessage}
                        </div>
                    )}                    
                </div>
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
                        {bedrooms}
                        
                    </div>
                    <div>
                        {bathrooms}
                    </div>
                    <div>
                        {garages}
                    </div>
                </div>
                <div className={Section.cardPrice}>
                    R$ {price}
                </div>
            </div>
        </div>    
    );
}

export default Card;