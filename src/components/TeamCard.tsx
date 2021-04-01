/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { ITeamCard } from "interfaces";

import MissingImage from "../../public/images/missing-image.png"; 

import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Section from "src/styles/Section.module.css";



const TeamCard : FC<ITeamCard> = ({ image, name, cellphone, linkFB, linkLI, linkTW, linkI }) => {

    return (
        <div className={Section.card}>
            <div>
                {image && (
                    <img 
                        src={image}
                        height="300"
                    />
                )} 
                {!image && (
                    <img 
                        src={MissingImage}
                        height="300"
                    />                    
                )}              
            </div>
            <div className={Section.cardInfo}>
                <h2>
                    {name}
                </h2>
                <div className={Section.teamCellphone}>
                    {cellphone}
                </div>
                <div className={Section.teamLinks}>
                    <div>
                        <FaFacebookF 
                            size={16}
                            color={"#222"}
                            href={linkFB}
                        />                        
                    </div>
                    <div>
                        <FaLinkedinIn 
                            size={18}
                            color={"#222"}
                            href={linkLI}
                        />
                    </div>
                    <div>
                        <FaInstagram 
                            size={18}
                            color={"#222"}
                            href={linkI}
                        />
                    </div>
                    <div>
                        <FaTwitter 
                            size={18}
                            color={"#222"}
                            href={linkTW}
                        />
                    </div>
                </div>                
            </div>
        </div>    
    );
}

export default TeamCard;