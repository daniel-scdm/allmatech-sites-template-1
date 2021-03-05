/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';  

import property from 'src/styles/Property.module.css';
import { CSSTransition } from 'react-transition-group';

import Image from "next/image";

import { GrClose } from "react-icons/gr";

import { ICarousel } from "interfaces/index";
import { Carousel as GalleryCarousel } from 'react-responsive-carousel';


const myLoader = ({ src, width, quality } : any) => {
    return src
}

const images = [
    <Image loader={myLoader} src="" layout="responsive" width={800} height={500} />,
    <Image loader={myLoader} src="" layout="responsive" width={800} height={500} />,
];

const thumbItems = (images : Array<any>, [setThumbIndex, setThumbAnimation] : Array<Function>) => {
    return images.map((item : any , i : number) => (
        <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
            {item}
        </div>
    ));
};

const Carousel : React.FC<ICarousel> = ({ activeModal, setActiveModal }) => {

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
                    <GalleryCarousel>
                        <div className={property.imageContainer}>
                            <Image loader={myLoader} src="https://picsum.photos/id/1018/1000/600/"  width={800} height={500} />,
                        </div>
                        <div className={property.imageContainer}>
                            <Image loader={myLoader} src="https://picsum.photos/id/1015/1000/600/"  width={800} height={500} />,
                        </div>
                        <div className={property.imageContainer}>
                            <Image loader={myLoader} src="https://picsum.photos/id/1019/1000/600/"  width={800} height={500} />,
                        </div>
                        <div className={property.imageContainer}>
                            <Image loader={myLoader} src="https://picsum.photos/id/1015/1000/600/"  width={800} height={500} />,
                        </div>
                        <div className={property.imageContainer}>
                            <Image loader={myLoader} src="https://picsum.photos/id/1015/1000/600/"  width={800} height={500} />,
                        </div>
                        <div className={property.imageContainer}>
                            <Image loader={myLoader} src="https://picsum.photos/id/1019/1000/600/"  width={800} height={500} />,
                        </div>
                        <div className={property.imageContainer}>
                            <Image loader={myLoader} src="https://picsum.photos/id/1015/1000/600/"  width={800} height={500} />,
                        </div>                        
                    </GalleryCarousel>
                </div>
            </div>
        </CSSTransition> 
    );
}

export default Carousel;