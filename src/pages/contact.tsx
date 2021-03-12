/** @jsx jsx */
import { jsx } from 'theme-ui';

import section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import Header from "src/components/header";
import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import Footer from "src/components/Footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { GiHouse, GiPhone, GiCalendar } from "react-icons/gi";
import { FiMail } from "react-icons/fi";

function Contact() {

  return (
    <>
      <Header 
        logoUrl={AllmatechLogo}
        logoHeight={40}
        logoWidth={190}  
        bgHeaderColor={"#f9f9f9"}      
      />

        <div className={section.banner}>
            <div className={section.bannerText}>
                <h1>Contatos</h1>
            </div>
        </div>

        <section className={section.containerStaticPage}>           
            <div className={section.contactsContainer}>
                <div className={section.contactstInfo}>
                    <form onSubmit={() => {}} className={property.comment}>
                        <div>
                            <input type="text" name="name" id="" placeholder="Nome (Obrigatório)" />
                            <input type="text" name="email" id="" placeholder="Email (Obrigatório)" />
                            <input type="text" name="subject" id="" placeholder="Assunto" />
                        </div>

                        <textarea name="name" id="" placeholder="Sua mensagem" rows={10}>
                            
                        </textarea>

                        <button type="submit" value="">
                            Enviar mensagem
                        </button>
                    </form>

                    <div className={section.infoContainer}>
                        <div>
                            <div className={section.infoTitle}>
                                <GiHouse />
                                Endereço
                            </div>
                            <p>
                                2069 Robinson Lane, Columbus, 
                                OH 43201, United States
                            </p>
                        </div>

                        <div>
                            <div className={section.infoTitle}>
                                <GiPhone />
                                Telefone
                            </div>
                            <p>
                                +1 859-698-5236
                            </p>
                        </div>

                        <div>
                            <div className={section.infoTitle}>
                                <FiMail color="#2c3e50" />
                                Email
                            </div>
                            <p>
                                support@domain-name.com
                            </p>
                        </div>

                        <div>
                            <div className={section.infoTitle}>
                                <GiCalendar size={50} />
                                Horário de trabalho
                            </div>
                            <p>
                                Mon-Sat: 9:00 AM – 16:00 PM
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className={section.mapContainer}>
                    
                </div>
                
            </div>
        </section>
      
        <Footer />
    </>    
  )
}

export default Contact;