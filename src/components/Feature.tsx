import React from 'react';
import styles from 'src/styles/Home.module.css';

import { IFeatureComponent } from "interfaces/index";

const FeatureComponent : React.FC<IFeatureComponent> = ({ icon, text, title }) => {
  return (
    <div className={styles.feature}>
        <div>{icon}</div>
        <div>{title}</div>
        <div>{text}</div>
    </div>  
  );
}


export default FeatureComponent;