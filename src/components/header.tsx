/** @jsx jsx */
import { jsx, Box, MenuButton } from "theme-ui";

import Link from "next/link";

import { IHeaderComponent } from "interfaces/index";
import styles from 'src/styles/Home.module.css';
import headerStyles from 'src/styles/Header.module.css';

import { useState, useEffect } from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { CSSTransition } from "react-transition-group";
import React from 'react';

const HeaderComponent : React.FC<IHeaderComponent> = ({ logoWidth, logoHeight, bgHeaderColor }) => {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
    
        return () => {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    
    const handleMediaQueryChange = (mediaQuery : any) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(false);
        } else {
            setIsSmallScreen(true);
        }
    };
    
    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    }
    return (
        <>
            <header className={headerStyles.Header} sx={{ backgroundColor: bgHeaderColor }}>
                <Box>
                    <Link href="/">
                        <a>
                            <img 
                                src={"public/images/AllmaImob.png"}
                                width={logoWidth}
                                height={logoHeight}
                                alt="Picture of the author"
                                className={styles.imageLogo}
                            />
                        </a>
                    </Link>

                </Box>

                <div>
                    <div className={headerStyles.icons}>
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
                                size={16}
                                href={''}
                            />
                        </a>
                    </div>

                    <CSSTransition
                        in={!isSmallScreen || isNavVisible}
                        timeout={350}
                        classNames="NavAnimation"
                        unmountOnExit
                    >
                        <nav className={headerStyles.Nav}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <Link href="/company">
                                <a>Quem Somos</a>
                            </Link>
                            <Link href="/team">
                                <a>Equipe</a>
                            </Link>
                            <Link href="/services">
                                <a>Serviços</a>
                            </Link>
                            <Link href="/news">
                                <a>Notícias</a>
                            </Link>
                            <Link href="/contact">
                                <a>Contatos</a>
                            </Link>
                        </nav>
                    </CSSTransition>
                </div>

                    
                {isSmallScreen && (  
                    <Box 
                        aria-label='Toggle Menu'
                        className={headerStyles.Burger}
                    >
                        <MenuButton 
                            onClick={toggleNav} 
                        />
                    </Box>
                )}
            </header>
        </>    
    );
}

export default React.memo(HeaderComponent);
