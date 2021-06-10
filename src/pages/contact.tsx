/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';

import section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

//import AzureMap from 'src/components/AzureMap';

import Footer from "src/components/Footer";
import { GiHouse, GiPhone, GiCalendar } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import Header from "src/components/header";
import Head from "next/head";
import { useApi } from "src/hooks/useApi";

function Contact() {
    const { _sendEmail } = useApi();

    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);

    const handleContactForm = async (e : any) => {
        e.preventDefault();
        setIsSending(true);
        setSent(false);
        setError("");

        const formValues = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }

        const isSuccessfull = await _sendEmail(formValues);

        if(!isSuccessfull) {
            setError("Ocorreu um error ao enviar sua mensagem, tente mais tarde.");
            setIsSending(false);
            return;
        }

        setSent(true);
        setIsSending(false);
    }

    return (
        <>
            <Head>
                <title>Allmatech Imobiliária - Contato</title>
                <meta name="description" content="Venha tomar um café conosco. Lorem hendrerit suscipit, amet." />
            </Head>
            <Header />
            <div className={section.banner}>
                <div className={section.bannerText}>
                    <h1>Contatos</h1>
                </div>
            </div>

            <section className={section.containerStaticPage}>
                <div className={section.contactsContainer}>
                    <div className={section.contactstInfo}>
                        <form onSubmit={handleContactForm} className={property.comment}>
                            {error && (
                                <div className={section.errorMessage}>
                                    {error}
                                </div>
                            )}
                            <div>
                                <input type="text" name="name" id="" placeholder="Nome (Obrigatório)" />
                                <input type="text" name="email" id="" placeholder="Email (Obrigatório)" />
                                <input type="text" name="subject" id="" placeholder="Assunto" />
                            </div>

                            <textarea name="message" id="" placeholder="Sua mensagem" rows={10}>

                            </textarea>
                            <div className={property.formButton}>
                                <button type="submit" value="" disabled={isSending}>
                                    {isSending ? "Enviando..." : "Enviar mensagem"}
                                </button>
                                {sent && <IoIosCheckmarkCircleOutline size={35} color={"#24bd75"} />}
                            </div>
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
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;

/*
 <div className={section.mapContainer}>
    <AzureMap 
        lt={"-15.831890000000"}
        lg={"-48.016170"}
        height={"450px"}                            
    />
</div>

*/