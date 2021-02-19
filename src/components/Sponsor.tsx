/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { INewsCard } from "interfaces/index";
import Image from "next/image";


import Section from "src/styles/Section.module.css";

const Sponsor : FC = () => {

    return (
        <div className={Section.sponsor}>
            <img 
                src="https://dunk.brickthemes.com/wp-content/uploads/2020/03/banner_small.jpg"
                data-src="https://dunk.brickthemes.com/wp-content/uploads/2020/03/banner_small.jpg"
            />
                       
        </div>    
    );
}

export default Sponsor;