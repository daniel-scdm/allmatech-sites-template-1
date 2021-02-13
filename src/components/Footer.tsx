/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import Image from "next/image";

import AllmatechLogo from  "assets/images/logo_w.png";

import { GiHouse, GiPhone, GiCalendar } from "react-icons/gi";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { MdMailOutline } from "react-icons/md";

const Footer : FC = () => {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo-container">
                    <Image 
                        src={AllmatechLogo}
                        height={80}
                        width={280}  
                        alt="Picture of the author"
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
                            <li>
                                <a href="#">Listagem</a>
                            </li>
                            <li>
                                <a href="#">Terrenos</a>
                            </li>
                            <li>
                                <a href="#">Rural</a>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-container">
                        <div>
                            <p>
                                <GiHouse size={20} spacing={20} /> 
                                <span>
                                    2067 – 2069 Robinson Lane, <br />
                                    Columbus, OH 43201, US
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <GiPhone size={20} /> 
                                <span>+1 859-698-5236</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <MdMailOutline size={20} /> 
                                <span>sales@sample-domain.com</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <GiCalendar size={20} /> 
                                <span>Mon-Sat: 9:00 AM – 16:00 PM</span>
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