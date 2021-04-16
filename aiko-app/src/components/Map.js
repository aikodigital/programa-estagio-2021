import React, {useState} from 'react';
import { GoogleMap, Marker, InfoWindow } from "react-google-maps"
import posJson from "./posJson";

const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const busPos = posJson();

export default function Map() {
  const [selectedBus, setSelectedBus] = useState(false);
     
  return (<GoogleMap 
    defaultZoom = {10} 
    defaultCenter={{lat:-23.55556, lng:-46.61984}}>

    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >

    {busPos.data.map(bus => (
        
        <Marker 
          key= {bus.cod} 
          position={{
            lat: bus.lat,
            lng: bus.lng
          }}
          onClick={() => {
            setSelectedBus(bus);
          }}

          icon={{
            url: 'https://image.freepik.com/free-icon/bus_318-2038.jpg',
            scaledSize: new window.google.maps.Size(25, 25)
          }}

        />
        
      ))
        
    }
    </MarkerClusterer>

    {selectedBus && (

      <InfoWindow 
          position={{
            lat: selectedBus.lat,
            lng: selectedBus.lng
        }}
        onCloseClick={() => {
          setSelectedBus(false)
        }}
      > 
        <div>
          <h3>{selectedBus.cod}</h3>
          <p>Origem: {selectedBus.origem}</p>
          <p>Destino: {selectedBus.destino}</p>
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  );
  
  } 