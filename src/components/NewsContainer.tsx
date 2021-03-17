/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';  

import property from 'src/styles/Property.module.css';

import { ICardNews } from "interfaces/index";
import EmptyImage from "assets/images/empty.jpg"
import Image, { ImageLoaderProps } from "next/image";

const myLoader = ({ src, width, quality } : ImageLoaderProps) => {
    return src;
}

const NewsContainer : React.FC<ICardNews> = ({ image, text, title }) => {
    return (
        <div className={property.containerProperty}>
            
            <h3 className={property.propertyTitle}>
                {title}
            </h3>             

            <div className={property.image}>
                <Image
                    loader={myLoader}
                    src={image ? image : EmptyImage}
                    layout="responsive"
                    width={800}
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