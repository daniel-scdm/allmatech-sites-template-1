/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { INewsCard } from "interfaces/index";
import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";

import Section from "src/styles/Section.module.css";

const myLoader = ({ src } : ImageLoaderProps) => {
    return src;
}

const NewsCard : FC<INewsCard> = ({ image, code, text }) => {

    return (
        <div className={Section.card}>
            <div className={Section.newsCard}>
                {image && (
                    <Image
                        loader={myLoader}
                        src={image}
                        width="480"
                        height="320"
                        className={Section.imageNews}
                    />
                )}

                {!image && (
                    <Image 
                        loader={myLoader}
                        src={require("assets/images/missing-image.png")}
                        width="480"
                        height="320"
                        className={Section.imageNews}
                    />                    
                )}

                <Link href={{
                    pathname: "/new",
                    query: { code: code }
                }}>
                    <a>
                        <p>
                            {text}
                        </p>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default NewsCard;