/** @jsx jsx */
import { ImageProps, jsx } from 'theme-ui';

import React, { useState, useEffect } from "react";
import property from "src/styles/Property.module.css";

const SuspenseImage : React.FC<ImageProps> = ({ src = "", className, ...rest }) => {

    const [image, setImage] = useState("");

    useEffect(() => {
        const imageToLoad = new Image();

        imageToLoad.onload = () => {
            setImage(src);
        }

        imageToLoad.onerror = () => {
            src = "http://allmateste.com.br/site-next/public/images/missing-image.png";
            imageToLoad.src = src;
        }

        if(!src) {
            src = "http://allmateste.com.br/site-next/public/images/missing-image.png";
        }

        imageToLoad.src = src;


    }, [src]);

    const imageProps = {
        image,
        className,
        ...rest,
        alt: "Imagem Imóvel"
    }

    if(!image) return <div className={property.suspense}>Carregando...</div>;

    return <img {...imageProps}  />
}

export default SuspenseImage;