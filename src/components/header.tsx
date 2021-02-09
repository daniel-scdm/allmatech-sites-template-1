/** @jsx jsx */
import { jsx, Box, MenuButton } from "theme-ui";

import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

import { IHeaderComponent } from "src/interfaces/HeaderComponent";
import styles from 'src/styles/Home.module.css';
import headerStyles from 'src/styles/Header.module.css';

import { useState, useEffect } from "react";

import { CSSTransition } from "react-transition-group";
import React from 'react';

const HeaderComponent : React.FC<IHeaderComponent> = ({ logoUrl, logoWidth, logoHeight }) => {

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
    
    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(false);
        } else {
            setIsSmallScreen(true);
        }
    };
    
    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <>
            <Head>
                <title>Allmatech Template 1</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <header className={headerStyles.Header} sx={{ backgroundColor: "#7a7a7a" }}>
                <Box>
                    <Image 
                        src={logoUrl}
                        width={logoWidth}
                        height={logoHeight}
                        alt="Picture of the author"
                        className={styles.imageLogo}
                    />
                </Box>
                
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                >
                    <nav className={headerStyles.Nav}>
                        <Link href="#">
                            <a>Home</a>
                        </Link>
                        <Link href="#">
                            <a>Quem Somos</a>
                        </Link>
                        <Link href="#">
                            <a>Equipe</a>
                        </Link>
                        <Link href="#">
                            <a>Serviços</a>
                        </Link>
                        <Link href="#">
                            <a>Notícias</a>
                        </Link>
                        <Link href="#">
                            <a>Contatos</a>
                        </Link>
                    </nav>
                </CSSTransition>    
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

export default HeaderComponent;
