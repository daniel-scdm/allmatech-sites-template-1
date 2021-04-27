/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';  

import property from 'src/styles/Property.module.css';

import { ICardNews } from "interfaces/index";

const NewsContainer : React.FC<ICardNews> = ({ image, text, title }) => {

    const [img, setImg] = useState(image);

    const handleImageError = () => setImg("http://allmateste.com.br/site-next/public/images/missing-image.png");

    return (
        <div className={property.containerProperty}>

            <h1 className={property.propertyTitle} sx={{ color: "title" }}>
                {title}
            </h1>

            <div className={property.image}>
                <img
                    src={img}
                    height={500}
                    onError={handleImageError}
                    alt="Vazio"
                />
            </div>

            <div className={property.propertyInfoContainer}>
                <div className={property.propertyDescription}>
                    <pre>
                        {text}
                    </pre>
                </div>
            </div>
        </div> 
    )
}

export default NewsContainer;