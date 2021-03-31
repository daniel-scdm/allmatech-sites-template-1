/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';  

import property from 'src/styles/Property.module.css';

import { ICardNews } from "interfaces/index";



const NewsContainer : React.FC<ICardNews> = ({ image, text, title }) => {
    return (
        <div className={property.containerProperty}>
            
            <h3 className={property.propertyTitle}>
                {title}
            </h3>             

            <div className={property.image}>
                <img
                    src={image ? image : "public/images/empty.jpg"}
                    height={500}
                />                
            </div>    

            <div className={property.propertyInfoContainer}>
                <div className={property.propertyDescription}>
                    <p>
                        {text}
                    </p>
                </div>
            </div>            
        </div> 
    )
}

export default NewsContainer;