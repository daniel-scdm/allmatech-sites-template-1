/** @jsx jsx */
import { jsx } from 'theme-ui';

import property from 'src/styles/Property.module.css';
import { IProperty } from "interfaces/index";

import { GiHomeGarage, GiBathtub, GiPersonInBed } from "react-icons/gi";

import Image from "next/image";
import React from 'react';

const loader = () => {
    return "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min.jpg"
}

const features = ["Casa", "2 banheiros", "3 quartos", "ar condicionado", "3 garagens"];

const PropertyContainer : React.FC<IProperty> = ({ title, text, price, bathrooms, garages, bedrooms, }) => {

    return (
        <div className={property.containerProperty}>
            <h3 className={property.propertyTitle}>
                {title}
            </h3> 
            <div>
                <span className={property.propertyPrice}>
                    From R$ {price}
                </span>
            </div>

            <Image 
                loader={loader}
                src="https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min.jpg"
                alt="Picture of the author"
                height={800}
                width={800}  
                className={property.image}      
            />

            <div className={property.propertyInfoContainer}>
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

                <div className={property.propertyDescription}>
                    <h3>Descrição</h3>

                    <p>
                        {text}
                    </p>
                    <p>
                        {text}
                    </p>

                    <iframe
                        height="400"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>

                <div className={property.propertyDescription}>
                    <h3>Mais detalhes</h3>

                    <ul className={property.featureList}>
                        {features.map((f, i) => {
                            if(i % 2 === 1) {
                                return <li className={property.featureOdd}>{f}</li>;
                            } 

                            return <li className={property.featureEven}>{f}</li>;
                        })}
                    </ul>
                    
                </div>

                <div className={property.propertyMap}>

                </div>
            </div>
        </div> 
    )
}

export default PropertyContainer;