/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';  

import property from 'src/styles/Property.module.css';
import { CSSTransition } from 'react-transition-group';

import Image from "next/image";

import { GrClose } from "react-icons/gr";

import { ICarousel } from "interfaces";
import { Carousel as GalleryCarousel } from 'react-responsive-carousel';


const myLoader = ({ src } : any) => {
    return src
}

const Carousel : React.FC<ICarousel> = ({ activeModal, setActiveModal, ListPhotos }) => {

    const closeModal = () => setActiveModal(false);
    
    return (
        <CSSTransition 
            in={activeModal}
            timeout={300}
            classNames="alert"
            unmountOnExit
            
        >
            <div className={property.modal}>
                <div className={property.modalActions}>
                    <a href="#" onClick={closeModal}>
                        <GrClose 
                            size={25}
                            color={"#707070"}
                        />
                    </a>                    
                </div>

                <div className={property.gallery}>
                    <GalleryCarousel
                        showThumbs={false}
                        showIndicators={false}
                        className={property.sliderGallery}
                    >
                        {ListPhotos?.map((photo : any, i : number) => (
                            <div className={property.imageContainer} key={i.toString()}>
                                <Image loader={myLoader} src={photo.Link[1].URLArquivo._text} width={1200} height={800} loading="lazy" placeholder="Carregando..." />
                            </div>
                        ))}                
                    </GalleryCarousel>
                </div>
            </div>
        </CSSTransition> 
    );
}

export default Carousel;