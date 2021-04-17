import React, {useState} from 'react';
import { GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import { UseMap } from "./mapContext";

export default function Map() {

  const { mapData } = UseMap();
  const [selectedBus, setSelectedBus] = useState(false);

  return (<GoogleMap 
    defaultZoom = {10} 
    defaultCenter={{lat:-23.55556, lng:-46.61984}}>

    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >

    {mapData.busPos && mapData.busPos.data.map(bus => (
        
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
            url: mapData.searchData.icon,
            scaledSize: new window.google.maps.Size(30, 30)
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
          <h4 className="titleDesc">{mapData.searchData.info1} {selectedBus.cod}</h4>
          <p>{mapData.searchData.info2} {selectedBus.origem}</p>
          <p>{mapData.searchData.info3} {selectedBus.destino}</p>
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  );
  
  } 