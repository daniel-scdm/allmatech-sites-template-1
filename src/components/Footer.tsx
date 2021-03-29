/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import Image, { ImageLoaderProps } from "next/image";

import AllmatechLogo from  "assets/images/logo_w.png";

import { GiHouse, GiPhone, GiCalendar } from "react-icons/gi";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { MdMailOutline } from "react-icons/md";

const myLoader = ({ src } : ImageLoaderProps) => {
    return src;
}

const Footer : FC = () => {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo-container">
                    <Image 
                        src={AllmatechLogo}
                        height={50}
                        width={250}  
                        alt="Picture of the author"
                        loader={myLoader}
                    />
                </div>

                <div className="footer-info-container">

                    <div className="menu-footer-container">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Contato</a>
                            </li>
                            <li>
                                <a href="#">Imóveis</a>
                            </li>
                            <li>
                                <a href="#">Aluguél</a>
                            </li>
                            <li>
                                <a href="#">Comercial</a>
                            </li>
                            <li>
                                <a href="#">Notícias</a>
                            </li>       
                        </ul>
                    </div>

                    <div className="contact-container">
                        <div>
                            <p>
                                <GiHouse size={20} spacing={20} /> 
                                <span>
                                    Rua Nove Norte, lt. 1 <br />
                                    (Ed., Atlantis Trade Center), <br />
                                    Brasília, DF, 71908-540
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <GiPhone size={20} /> 
                                <span>+55 61 3033-2184</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <MdMailOutline size={20} /> 
                                <span>atendimento@allmatech.com.br</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <GiCalendar size={20} /> 
                                <span>Seg-Sex: 9:00 – 17:00</span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="subscribe-container">
                            <h3>Insceva-se em nossa Newsletter</h3>
                            <form>
                                <input type="text" placeholder="Email" />
                                <input type="submit" />
                            </form>
                        </div>

                        <div className="other-pages">
                            <a href="">
                                <FaFacebookF 
                                    size={16}
                                    href={''}
                                />                        
                            </a>
                            <a href="">
                                <FaLinkedinIn 
                                    size={18}
                                    href={''}
                                />
                            </a>
                            <a href="">
                                <FaInstagram 
                                    size={18}
                                    href={''}
                                />
                            </a>
                            <a href="">
                                <FaTwitter 
                                    size={18}
                                    href={''}
                                />
                            </a>
                        </div>
                    </div>                    
                </div>
            </div>
                    
        </footer>    
    );
}

export default Footer;