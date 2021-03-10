/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';  

import property from 'src/styles/Property.module.css';
import { CSSTransition } from 'react-transition-group';

import Image from "next/image";

import { GrClose } from "react-icons/gr";

import { ICarousel, IFoto } from "interfaces";
import { Carousel as GalleryCarousel } from 'react-responsive-carousel';


const myLoader = ({ src, width, quality } : any) => {
    return src
}

const thumbItems = (images : Array<any>, [setThumbIndex, setThumbAnimation] : Array<Function>) => {
    return images.map((item : any , i : number) => (
        <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
            {item}
        </div>
    ));
};

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
                                <Image loader={myLoader} src={photo.Link[1].URLArquivo._text} width={1200} height={800} />
                            </div>
                        ))}                
                    </GalleryCarousel>
                </div>
            </div>
        </CSSTransition> 
    );
}

export default Carousel;