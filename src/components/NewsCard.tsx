/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState } from 'react';
import { INewsCard } from "interfaces/index";
 
import Link from "next/link";

import Section from "src/styles/Section.module.css";

const NewsCard : FC<INewsCard> = ({ image, code, text }) => {

    const replaceImage = () => setThumb("http://allmateste.com.br/site-next/public/images/missing-image.png");
    const [thumb, setThumb] = useState<string>(image ? image : "http://allmateste.com.br/site-next/public/images/missing-image.png");

    return (
        <div className={Section.newsCard}>
            {image && (
                <img
                    src={thumb}
                    onError={replaceImage}
                    className={Section.imageNews}
                    alt="Thumbnail"
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
    );
}

export default NewsCard;