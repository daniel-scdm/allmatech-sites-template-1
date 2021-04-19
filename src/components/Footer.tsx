/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
 
import Logo_W from "../../public/images/logo_w.png";
import { GiHouse, GiPhone, GiCalendar } from "react-icons/gi";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { MdMailOutline } from "react-icons/md";



const Footer : FC = () => {

    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-logo-container">
                        <img 
                            src={Logo_W}
                            alt="Empresa logo"
                        />
                    </div>

                    <div className="footer-info-container">

                        <div className="menu-description-container">
                            <h3>
                                Allmatech Imobiliária
                            </h3>
                            <span>
                                Rua 09 Norte, Lote 01, Salas 507 e 509 - Águas Claras,
                                <br /> 
                                Brasília
                            </span>

                            <p>
                                Venda e locação de imóveis. Plano Piloto em geral, Asa Sul, Asa Norte, 
                                Sudoeste, Noroeste, Lago Sul, Lago Norte, SMDB Park Way, Águas claras. <a target="_blank" href="https://www.google.com/maps/dir//Allmatech+Tecnologia+da+Informa%C3%A7%C3%A3o,+Atlantis+Trade+Center+-+Rua+09+Norte,+Lote+01,+Salas+507+e+509+Edif%C3%ADcio+-+%C3%81guas+Claras,+Bras%C3%ADlia+-+DF,+71908-540/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x935a3ae8905881a1:0xae293fc5b1737158?sa=X&ved=2ahUKEwj54_TVqP7vAhXDct8KHcDLA8EQ48ADMAB6BAgGEEQ">Veja no mapa.</a>
                            </p>
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
                                <p>Siga-nos</p>
                                <ul>
                                    <li>
                                        <a href="">
                                            <FaFacebookF 
                                                size={16}
                                                href={''}
                                            />
                                            <span>Facebook</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <FaLinkedinIn 
                                                size={18}
                                                href={''}
                                            />
                                            <span>LinkedIn</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <FaInstagram 
                                                size={18}
                                                href={''}
                                            />
                                            <span>Instagram</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <FaTwitter 
                                                size={16}
                                                href={''}
                                            />
                                            <span>Twitter</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>© {new Date().getFullYear()} Allmatech Imobiliária – Todos os direitos reservados – Desenvolvido por Allmatech TI</p>
                </div>

            </div>
        </>
    );
}

export default Footer;