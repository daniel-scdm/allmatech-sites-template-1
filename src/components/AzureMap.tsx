import { FC } from "react";
import { AzureMap, AzureMapsProvider, IAzureMapOptions } from 'react-azure-maps';
import * as atlas from 'azure-maps-control';

interface IMaps {
  lt? : string,  
  lg? : string
}

const AzureMapComponent : FC<IMaps> = ({ lg, lt }) => {
  const renderCenter = () => {
    if(lg && lt) {
      return [parseFloat(lg), parseFloat(lt)];
    }

    return [-47.8828057615547, -15.7939394201285];
  }


  const option: IAzureMapOptions = {
      authOptions: {
          authType: atlas.AuthenticationType.subscriptionKey,
          subscriptionKey: 'an7Tl9OY2u-SSX9Q4vdbTvXmdC1k6ZAk7Y6x8y8jM1g'
      },
      center: renderCenter(),
      zoom: 15,
      language: atlas.getLanguage(),
      showLogo: false,
  }

  return (
    <AzureMapsProvider>
      <div style={{ height: "340px "}}>
        <AzureMap options={option} />
      </div>
    </AzureMapsProvider>
  );

}

export default AzureMapComponent;

