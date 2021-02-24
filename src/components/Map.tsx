/** @jsx jsx */
import { jsx } from 'theme-ui';
import { IProperty } from "interfaces/index";
import React from 'react';  

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";


const MapComponent : React.FC = () => {

    return (
        <MapContainer center={[40.8054,-74.0241]} zoom={14} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <Marker 
            position={[40.8054,-74.0241]}
            draggable={true}
            animate={true}
            >
                <Popup>
                    Hey ! you found me
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapComponent;