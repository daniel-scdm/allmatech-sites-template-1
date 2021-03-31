import React from 'react';
import styles from 'src/styles/Home.module.css';
import LazyLoad from "react-lazyload";
import { IPartnerComponent } from "interfaces";

const PartnerComponent : React.FC<IPartnerComponent> = ({ logoImage, height, width }) => {
  return (
    <LazyLoad
        offset={100}  
        debounce={true}      
    >
      <div className={styles.partner}>
        <img 
            src={logoImage}
            width={width}
            height={height}
        /> 
      </div> 
    </LazyLoad>     
  );
}


export default PartnerComponent;