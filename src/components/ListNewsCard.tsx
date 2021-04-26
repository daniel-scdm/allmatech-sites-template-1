/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { ICardNews } from "interfaces/index";
import property from "src/styles/Property.module.css";

import Link from "next/link";
import { BiSearch } from "react-icons/bi";

const ListNewsCard : FC<ICardNews> = ({ image, text, title, indexKey }) => {

    return (
        <div className={property.listCard} key={indexKey}>
            <div className={property.imageCardContainer}>
                <img
                    className={property.missingImageCard}
                    src={image}
                    alt="Thumbnail"
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