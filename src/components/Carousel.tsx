/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';  

import property from 'src/styles/Property.module.css';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const images = [
    <img src="https://picsum.photos/id/1018/1000/600/" className="item" alt="" />,
    <img src="https://picsum.photos/id/1015/1000/600/" className="item" alt="" />,
    <img src="https://picsum.photos/id/1019/1000/600/" className="item" alt="" />,
];

const thumbItems = (images : Array<any>, [setThumbIndex, setThumbAnimation] : Array<Function>) => {
    return images.map((item : any , i : number) => (
        <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
            {item}
        </div>
    ));
};

const Carousel : React.FC = () => {

    const [mainIndex, setMainIndex] = useState(0);
    const [mainAnimation, setMainAnimation] = useState(false);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems(images, [setThumbIndex, setThumbAnimation]));

    const slideNext = () => {
        if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };

    const slidePrev = () => {
        if (!thumbAnimation && thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        }
    };

    const syncMainBeforeChange = (e ) => {
        setMainAnimation(true);
        if (e.type === 'action') {
            setThumbAnimation(true);
        }
    };

    const syncMainAfterChange = (e) => {
        setMainAnimation(false);

        if (e.type === 'action') {
            setThumbIndex(e.item);
            setThumbAnimation(false);
        } else {
            setMainIndex(thumbIndex);
        }
    };

    const syncThumbs = (e) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);

        if (!mainAnimation) {
            setMainIndex(e.item);
        }
    };

    return (
        <div className={property.gallery}>
            <AliceCarousel 
                activeIndex={mainIndex}
                animationType="fadeout"
                animationDuration={800}
                disableDotsControls
                disableButtonsControls
                infinite
                items={images}
                mouseTracking={!thumbAnimation}
                onSlideChange={syncMainBeforeChange}
                onSlideChanged={syncMainAfterChange}
                touchTracking={!thumbAnimation}               
            />

            <div className={property.thumbs}>
                <AliceCarousel
                    activeIndex={thumbIndex}
                    autoWidth
                    disableDotsControls
                    disableButtonsControls
                    items={thumbs}
                    mouseTracking={false}
                    onSlideChanged={syncThumbs}
                    touchTracking={!mainAnimation}
                />
                <div className={property.btnPrev} onClick={slidePrev}>&lang;</div>
                <div className={property.btnNext} onClick={slideNext}>&rang;</div>
            </div>
        </div> 
    );
}

export default Carousel;