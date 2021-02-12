/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { INewsCard } from "interfaces/index";

import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Section from "src/styles/Section.module.css";

const NewsCard : FC<INewsCard> = ({ image, link, text }) => {

    return (
        <div className={Section.card}>
            <div className={Section.newsCardContainer}
                sx={{
                    backgroundColor: image
                }}
            >
                              
            </div>            
        </div>    
    );
}

export default NewsCard;