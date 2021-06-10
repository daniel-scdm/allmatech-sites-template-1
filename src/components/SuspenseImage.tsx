/** @jsx jsx */
import { ImageProps, jsx } from 'theme-ui';

import React, { useState, useEffect } from "react";
import property from "src/styles/Property.module.css";

const SuspenseImage : React.FC<ImageProps> = ({ src = "https://allmateste.com.br/site-next/public/images/missing-image.png" , className, ...rest }) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const imageToLoad = new Image();
        if(src === "") {
            src = "https://allmateste.com.br/site-next/public/images/missing-image.png";
        }

        imageToLoad.onload = () => {
            setImageLoaded(true);
        }

        imageToLoad.onerror = () => {
            console.log("Error")
            src = "https://allmateste.com.br/site-next/public/images/missing-image.png";
            imageToLoad.src = src;
        }

        if(!src) {
            src = "https://allmateste.com.br/site-next/public/images/missing-image.png";
        }

        imageToLoad.src = src;
    }, []);

    const imageProps = {
        className,
        ...rest,
        alt: "Imagem Imóvel"
    }

    if(!imageLoaded) return <div className={property.suspense}>Carregando...</div>;

    return <img {...imageProps} src={src} />
}

export default SuspenseImage;