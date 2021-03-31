/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react';
 
import { IFullSection } from "interfaces/index";
import Section from "src/styles/Section.module.css";



const FullSection : React.FC<IFullSection> = ({ bgImage, children }) => {

    return (
        <section className={Section.sectionContainer}>
            <img 
                src={bgImage}                
            />
            {children}
        </section>    
    );
}

export default FullSection;
