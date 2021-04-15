/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';  

import property from 'src/styles/Property.module.css';

import { IPropertyXML } from "interfaces/index";

import { GiHomeGarage, GiBathtub, GiPersonInBed, GiSnowflake1, GiPoolDive, GiSecurityGate } from "react-icons/gi";
import { FaCamera, FaMapMarkedAlt } from "react-icons/fa";

import Carousel from "src/components/Carousel";
import AzureMap from 'src/components/AzureMap';

const numberWithCommas = (x : string | number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
}

const PropertyContainer : React.FC<IPropertyXML> = ({ 
    TituloImovel, 
    Observacao, 
    PrecoLocacao, 
    PrecoVenda, 
    QtdBanheiros, 
    QtdVagas, 
    QtdDormitorios, 
    thumbnail, 
    Fotos, 
    features, 
    Videos, 
    ArCondicionado,
    Piscina, 
    Guarita,
    Latitude,
    Longitude
 }) => {
    const [showGallery, setShowGallery] = useState(false);
    const [isSending, setIsSending] = useState(false);    

    useEffect(() => {
        if(showGallery) {
            document.body.style.overflowY = "hidden";
            return;
        }
        document.body.style.overflowY = "scroll";
    }, [showGallery]);

    const handleShowModal = (showGalleryModal : boolean) => setShowGallery(showGalleryModal);

    const handleContact = (e : React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        /**
         * const data = {
            comment: e.target.comment.value,
            name: e.target.name.value,
            email: e.target.email.value,
            website: e.target.website.value,
            code: CodigoImovel
        }
         */


        setIsSending(false);
    }

    return (
        <div className={property.containerProperty}>
            {(Fotos && Fotos.Foto && Array.isArray(Fotos?.Foto)) && (
                <Carousel 
                    activeModal={showGallery}
                    setActiveModal={handleShowModal}
                    ListPhotos={Fotos?.Foto}
                />
            )}

            <h1 className={property.propertyTitle}>
                {TituloImovel}
            </h1> 
            <div className={property.cardPrice}>
                {(PrecoVenda && !Array.isArray(PrecoVenda)) && <span>Venda: R$ {numberWithCommas(PrecoVenda)}</span>}

                {(PrecoLocacao && !Array.isArray(PrecoLocacao)) && <span>Aluguel: R$ {numberWithCommas(PrecoLocacao)}</span>}
            </div>

            <div className={property.image}>
                <img
                    src={thumbnail}
                />

                <ul className={property.galleryButton}>
                    {(Fotos && Fotos.Foto && Array.isArray(Fotos?.Foto)) && (
                        <li>
                            <a 
                                href="#" 
                                onClick={() => setShowGallery(true)}
                            >
                                <FaCamera size={20} color={"#fff"} />
                            </a>
                        </li>
                    )}
                    <li>
                        <a href="#">
                            <FaMapMarkedAlt size={20}  color={"#fff"}/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={property.propertyInfoContainer}>
                <div className={property.cardFeatures}>
                    <div>
                        <GiPersonInBed size={38} /> <span>{typeof QtdDormitorios === "string" ? QtdDormitorios : 0} </span>                           
                    </div>
                    <div>
                        <GiBathtub size={32} /> <span>{typeof QtdBanheiros === "string"  ? QtdBanheiros : 0}</span>
                    </div>
                    <div className={property.garages}>
                        <GiHomeGarage size={32} /> <span>{typeof QtdVagas === "string"  ? QtdVagas : 0}</span>
                    </div>

                    {ArCondicionado && (
                        <div className={property.garages}>
                            <GiSnowflake1 size={32} />
                        </div>
                    )}

                    {Piscina && (
                        <div className={property.garages}>
                            <GiPoolDive size={32} />
                        </div>
                    )}

                    {Guarita && (
                        <div className={property.garages}>
                            <GiSecurityGate size={32} />
                        </div>
                    )}
                </div>

                <div className={property.propertyDescription}>
                    <h3>Descrição</h3>

                    <p>
                        {Observacao}
                    </p> 

                    {Videos && (
                        <iframe
                            height="400"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    )}

                </div>

                {features && features.length > 0 && (
                    <div className={property.propertyDescription}>
                        <h3>Mais detalhes</h3>
                        <ul className={property.featureList}>
                            {features.map((f, i) => {
                                if(i % 2 === 1) {
                                    return <li className={property.featureOdd} key={i.toString()}>{f}</li>;
                                } 

                                return <li className={property.featureEven} key={i.toString()}>{f}</li>;
                            })}
                        </ul>
                    </div>
                )}

                {(Latitude && Longitude) && (
                    <div className={property.propertyMap}>
                        <AzureMap 
                            lt={Latitude}
                            lg={Longitude}
                        />
                    </div>
                )}
            </div>

            <div className={property.contactContainer}>
                <h3>Contato</h3>

                <form onSubmit={handleContact} className={property.comment}>
                    <textarea name="comment" placeholder="Comentário" rows={10}>
                    </textarea>

                    <div>
                        <input type="text" name="name" id="" placeholder="Nome (Obrigatório)" />
                        <input type="text" name="email" id="" placeholder="Email (Obrigatório)" />
                        <input type="text" name="website" id="" placeholder="Website" />
                    </div>

                    <button type="submit" disabled={isSending}>
                        {isSending ? "Enviando..." : "Enviar mensagem"}
                    </button>
                </form>

            </div>
        </div> 
    )
}

export default PropertyContainer;