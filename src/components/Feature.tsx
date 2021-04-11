import React from 'react';
import styles from 'src/styles/Home.module.css';
import LazyLoad from "react-lazyload";

import { IFeatureComponent } from "interfaces/index";

const FeatureComponent : React.FC<IFeatureComponent> = ({ icon, text, title }) => {
  return (
    <LazyLoad
        offset={200}
        debounce={true}
        once
    >
      <div className={styles.feature}>
          <div>{icon}</div>
          <div>{title}</div>
          <div>{text}</div>
      </div> 
    </LazyLoad>
  );
}


export default FeatureComponent;