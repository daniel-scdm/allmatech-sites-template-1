/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { ICardNews } from "interfaces/index";
import property from "src/styles/Property.module.css";

import Image, { ImageLoaderProps } from "next/image";

import Link from "next/link";

import { BiSearch } from "react-icons/bi";

const myLoader = ({ src } : ImageLoaderProps) => {
    return src;
}

const ListNewsCard : FC<ICardNews> = ({ image, text, title, indexKey }) => {

    return (        
        <div className={property.listCard} key={indexKey}>
            <div className={property.imageCardContainer}>   
                <Image                     
                    className={property.missingImageCard}
                    src={image}
                    loader={myLoader}
                    layout="fill"
                />
                <Link href={{
                    pathname: "/new",
                    query: { code: indexKey }
                }}>
                    <a>
                        <BiSearch size={40}/>
                    </a>
                </Link>                     
            </div>
            <div className={property.cardInfo}>
                <p>
                    {title}
                </p>
                <div className={property.cardText}>
                    {text}
                </div>                
            </div>
        </div>
    );
}

export default ListNewsCard;