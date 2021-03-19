/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from "react";

import section from 'src/styles/Section.module.css';
import styles from 'src/styles/Home.module.css';
import Footer from "src/components/Footer";
import TeamCard from "src/components/TeamCard";
import AnimatedLoadingScreen from "src/components/AnimatedLoadingScreen";


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
                            image="https://dunk.brickthemes.com/wp-content/uploads/2020/01/5.jpg"
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
                            image="https://dunk.brickthemes.com/wp-content/uploads/2020/01/5.jpg"
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