/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';  

import property from 'src/styles/Property.module.css';

import { IPropertyXML } from "interfaces/index";
import EmptyImage from "assets/images/empty.jpg"

import { GiHomeGarage, GiBathtub, GiPersonInBed } from "react-icons/gi";
import { FaCamera, FaMapMarkedAlt } from "react-icons/fa";
import dynamic from "next/dynamic";

import Carousel from "src/components/Carousel";

const myLoader = ({ src, width, quality } : any) => {
    return src;
}

const LazyImage = dynamic(
    () => import("next/image"), 
    {
        ssr: false,
        loading: () => <p></p>
    },    
);

const MapWithNoSSR = dynamic(() => import("src/components/Map"), {
    ssr: false
});

const numberWithCommas = (x : string | number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
}

const PropertyContainer : React.FC<IPropertyXML> = ({ TituloImovel, Observacao, PrecoLocacao, PrecoVenda, QtdBanheiros, QtdVagas, QtdDormitorios, thumbnail, Fotos, features, Videos, CodigoImovel }) => {

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

        const data = {
            comment: e.target.comment.value,
            name: e.target.name.value,
            email: e.target.email.value,
            website: e.target.website.value,
            code: CodigoImovel?._text
        }

        setIsSending(false);
    }

    return (
        <div className={property.containerProperty}>
            <Carousel 
                activeModal={showGallery}
                setActiveModal={handleShowModal}
                ListPhotos={Fotos?.Foto}
            />
            
            <h3 className={property.propertyTitle}>
                {TituloImovel?._text}
            </h3> 
            <div className={property.cardPrice}>
                {PrecoVenda?._text && <span>Venda: R$ {numberWithCommas(PrecoVenda._text)}</span>}

                {PrecoLocacao?._text && <span>Aluguel: R$ {numberWithCommas(PrecoLocacao._text)}</span>}
            </div>

            <div className={property.image}>
                <LazyImage
                    loader={myLoader}
                    src={thumbnail ? thumbnail : EmptyImage}
                    layout="responsive"
                    width={800}
                    height={500}
                />

                <ul className={property.galleryButton}>
                    <li>
                        <a 
                            href="#" 
                            onClick={() => setShowGallery(true)}
                        >
                            <FaCamera size={20} color={"#fff"} />
                        </a>
                    </li>
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
                        <GiPersonInBed size={38} /> <span>{QtdDormitorios ? QtdDormitorios._text : 0} </span>                           
                    </div>
                    <div>
                        <GiBathtub size={32} /> <span>{QtdBanheiros ? QtdBanheiros._text : 0}</span>
                    </div>
                    <div className={property.garages}>
                        <GiHomeGarage size={32} /> <span>{QtdVagas ? QtdVagas._text : 0}</span>
                    </div>
                </div>

                <div className={property.propertyDescription}>
                    <h3>Descrição</h3>

                    <p>
                        {Observacao?._cdata}
                    </p> 

                    {Videos && (
                        <iframe
                            height="400"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    )}
                    
                </div>

                <div className={property.propertyDescription}>
                    <h3>Mais detalhes</h3>

                    {features && (
                        <ul className={property.featureList}>
                            {features.map((f, i) => {
                                if(i % 2 === 1) {
                                    return <li className={property.featureOdd} key={i.toString()}>{f}</li>;
                                } 

                                return <li className={property.featureEven} key={i.toString()}>{f}</li>;
                            })}
                        </ul>
                    )}

                </div>

                <div className={property.propertyMap}>
                    <MapWithNoSSR />
                </div>
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