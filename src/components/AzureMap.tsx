import { FC } from "react";
import { 
  AzureMap, 
  AzureMapsProvider, 
  IAzureMapOptions,  
  AzureMapLayerProvider, 
  AzureMapDataSourceProvider, 
  AzureMapFeature,
  AzureMapHtmlMarker
} from 'react-azure-maps';
import { 
  AuthenticationType, 
  getLanguage,
} from 'azure-maps-control';

interface IMaps {
  lt? : string,  
  lg? : string,
  height? : string
}

const AzureMapComponent : FC<IMaps> = ({ lg, lt, height }) => {
  const renderCenter = () => {
    if(lg && lt) {
      return [parseFloat(lg), parseFloat(lt)];
    }

    return [-47.8828057615547, -15.7939394201285];
  }

  const option: IAzureMapOptions = {
      authOptions: {
          authType: AuthenticationType.subscriptionKey,
          subscriptionKey: 'an7Tl9OY2u-SSX9Q4vdbTvXmdC1k6ZAk7Y6x8y8jM1g'
      },
      center: renderCenter(),
      zoom: 13,
      language: getLanguage(),
      showLogo: false

  }

  return (
    <AzureMapsProvider>
      <div style={{ height: height }}>
          <AzureMap options={option}>
          <AzureMapDataSourceProvider id={'LayerExample1 DataSource '}>
              </AzureMapDataSourceProvider>
              <AzureMapDataSourceProvider id={'LayerExample1 DataSource2 '}>
                <AzureMapLayerProvider
                  id={'LayerExample1 Layer2'}
                  options={{
                    opacity: 0.8
                  }}
                  type={'SymbolLayer'}
                />
                <AzureMapFeature
                  id={'LayerExample1 MapFeature'}
                  type="Point"
                  coordinate={renderCenter()}
                  properties={{
                    title: 'Local da Rua',
                  }}
                />
              </AzureMapDataSourceProvider>
            <AzureMapHtmlMarker
              markerContent={<div className="pulseIcon"></div>}
              options={option}
            />
          </AzureMap>
      </div>
    </AzureMapsProvider>
  );

}

export default AzureMapComponent;

