/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { Suspense } from 'react';  

import property from 'src/styles/Property.module.css';
import { CSSTransition } from 'react-transition-group';

import { AiOutlineClose } from "react-icons/ai";

import { ICarousel } from "interfaces";
import { Carousel as GalleryCarousel } from 'react-responsive-carousel';

import SuspenseImage from "src/components/SuspenseImage";

const Loading : React.FC = () => {
    return (
        <div className={property.suspense}>
            Carregando...
        </div>
    )
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
                        <AiOutlineClose 
                            size={35}
                            color={"#eee"}

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
                            <Suspense fallback={<Loading />} key={i.toString()}>
                                <div className={property.imageContainer}>
                                    <SuspenseImage 
                                        src={photo.Link[1].URLArquivo} 
                                        height={800}
                                        width={1200}
                                    />
                                </div>
                            </Suspense>
                        ))}
                    </GalleryCarousel>
                </div>
            </div>
        </CSSTransition> 
    );
}

export default Carousel;