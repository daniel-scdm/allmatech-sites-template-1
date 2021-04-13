/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from "react";

import section from 'src/styles/Section.module.css';
import styles from 'src/styles/Home.module.css';
import Footer from "src/components/Footer";
import TeamCard from "src/components/TeamCard";

import AllmatechLogo from "public/images/Allmatech-logo-complete.jpeg";
import AnimatedLoadingScreen from "src/components/AnimatedLoadingScreen";
import Header from "src/components/header";
import Head from "next/head";

function Team() {

    const [isLoadingPage, setIsLoadingPage] = useState(true);

    useEffect(() => {
        setIsLoadingPage(false);
    }, []);

    if(isLoadingPage) {
        return <AnimatedLoadingScreen />;
    }

    return (
        <>
            <Head>
                <title>Allmatech Imobiliária - Equipe</title>
                <meta name="description" content="Conheça a nossa equipe." />
            </Head>
            <Header 
                logoUrl={AllmatechLogo}
                logoHeight={40}
                logoWidth={190}  
                bgHeaderColor={"#f9f9f9"}
            />
            <div className={section.bannerTeam}>
                <div className={section.bannerOverlay}>
                    <div className={section.bannerText}>
                        <h1>Equipe</h1>
                    </div>
                </div>
            </div>

            <section className={section.containerStaticPage}>
                <div className={section.TeamContentFull}>
                    <div className={styles.latestCards}>
                        <TeamCard 
                            name="Fatima Beatriz"
                            cellphone="+1 236 456 7898"
                            image="public/images/woman.jpg"
                            linkFB="#"
                            linkLI="#"
                            linkTW="#"
                            linkI="#"
                        />
                        <TeamCard 
                            name="Frazer Mccann"
                            cellphone="+1 236 456 7898"
                            linkFB="#"
                            linkLI="#"
                            linkTW="#"
                            linkI="#"
                        />
                        <TeamCard 
                            name="Bret Walker"
                            cellphone="+1 236 456 7898"
                            linkFB="#"
                            linkLI="#"
                            linkTW="#"
                            linkI="#"
                        />
                        <TeamCard 
                            name="Jordanna Snow"
                            cellphone="+1 236 456 7898"
                            linkFB="#"
                            linkLI="#"
                            linkTW="#"
                            linkI="#"
                        />

                        <TeamCard 
                            name="Fatima Beatriz"
                            cellphone="+1 236 456 7898"
                            image="public/images/woman.jpg"
                            linkFB="#"
                            linkLI="#"
                            linkTW="#"
                            linkI="#"
                        />
                        <TeamCard 
                            name="Frazer Mccann"
                            cellphone="+1 236 456 7898"
                            linkFB="#"
                            linkLI="#"
                            linkTW="#"
                            linkI="#"
                        />
                        <TeamCard 
                            name="Bret Walker"
                            cellphone="+1 236 456 7898"
                            linkFB="#"
                            linkLI="#"
                            linkTW="#"
                            linkI="#"
                        />
                        <TeamCard 
                            name="Jordanna Snow"
                            cellphone="+1 236 456 7898"
                            linkFB="#"
                            linkLI="#"
                            linkTW="#"
                            linkI="#"
                        />
                        <TeamCard 
                            name="Frazer Mccann"
                            cellphone="+1 236 456 7898"
                            linkFB="#"
                            linkLI="#"
                            linkTW="#"
                            linkI="#"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Team;