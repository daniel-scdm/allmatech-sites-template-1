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
                                Rua Nove Norte, lt. 1 
                                (Ed., Atlantis Trade Center), 
                                Brasília, DF, 71908-540
                            </p>
                        </div>

                        <div>
                            <div className={section.infoTitle}>
                                <GiPhone />
                                Telefone
                            </div>
                            <p>
                                +55 61 3033-2184
                            </p>
                        </div>

                        <div>
                            <div className={section.infoTitle}>
                                <FiMail color="#2c3e50" />
                                Email
                            </div>
                            <p>
                             atendimento@allmatech.com.br
                            </p>
                        </div>

                        <div>
                            <div className={section.infoTitle}>
                                <GiCalendar size={50} />
                                Horário de trabalho
                            </div>
                            <p>
                                Seg-Sex: 9:00 – 17:00
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