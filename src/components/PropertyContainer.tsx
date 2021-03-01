/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';  

import property from 'src/styles/Property.module.css';
import { IProperty } from "interfaces/index";

import { GiHomeGarage, GiBathtub, GiPersonInBed } from "react-icons/gi";
import { FaCamera, FaMapMarkedAlt } from "react-icons/fa";
import dynamic from "next/dynamic";

import Carousel from "src/components/Carousel";

import Image from "next/image";

const myLoader = ({ src, width, quality } : any) => {
    return `https://picsum.photos/id/1018/1000/600/`
}

const features = ["Casa", "2 banheiros", "3 quartos", "ar condicionado", "3 garagens"];

const PropertyContainer : React.FC<IProperty> = ({ title, text, price, bathrooms, garages, bedrooms, }) => {

    const [showGallery, setShowGallery] = useState(false);

    const MapWithNoSSR = dynamic(() => import("src/components/Map"), {
        ssr: false
    });

    useEffect(() => {
        if(showGallery) {
            document.body.style.overflowY = "hidden";
            return;
        }

        document.body.style.overflowY = "scroll";
    }, [showGallery]);

    const handleShowModal = (showGalleryModal : boolean) => setShowGallery(showGalleryModal);

    return (
        <div className={property.containerProperty}>
            <Carousel 
                activeModal={showGallery}
                setActiveModal={handleShowModal}
            />
            
            <h3 className={property.propertyTitle}>
                {title}
            </h3> 
            <div>
                <span className={property.propertyPrice}>
                    A partir de R$ {price}
                </span>
            </div>

            <div className={property.image}>
                <Image
                    loader={myLoader}
                    src="https://picsum.photos/id/1018/1000/600/"
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
                        <GiPersonInBed size={38} /> <span>{bedrooms} </span>                           
                    </div>
                    <div>
                        <GiBathtub size={32} /> <span>{bathrooms}</span>
                    </div>
                    <div className={property.garages}>
                        <GiHomeGarage size={32} /> <span>{garages}</span>
                    </div>
                </div>

                <div className={property.propertyDescription}>
                    <h3>Descrição</h3>

                    <p>
                        {text}
                    </p>
                    <p>
                        {text}
                    </p>

                    <iframe
                        height="400"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>

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

                <div className={property.propertyMap}>
                    <MapWithNoSSR />
                </div>
            </div>
        </div> 
    )
}

export default PropertyContainer;