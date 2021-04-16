import React, {useState} from 'react';
import { GoogleMap, Marker, InfoWindow } from "react-google-maps"
import posJson from "./posJson";
import paradaJson from "./paradaJson";

const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
let busPos = null;
let op = "Ônibus";

const searchData = {
  icon: null,
  info1: null,
  info2: null,
  info3: null
};

if(op === "Ônibus"){
  busPos = posJson();

  searchData.icon = 'https://image.freepik.com/free-icon/bus_318-2038.jpg';
  searchData.info1 = 'Ônibus:';
  searchData.info2 = 'Origem';
  searchData.info3 = 'Destino';

}else if(op === "Estações"){
  busPos = paradaJson();

  searchData.icon =  'https://img.icons8.com/material/452/stop-sign-2.png';
  searchData.info1 = 'Código:';
  searchData.info2 = 'Nome:';
  searchData.info3 = 'Localização:';

}

export default function Map() {
  console.log("map function");

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
            url: searchData.icon,
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
          <h4 className="titleDesc">{searchData.info1} {selectedBus.cod}</h4>
          <p>{searchData.info2} {selectedBus.origem}</p>
          <p>{searchData.info3} {selectedBus.destino}</p>
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  );
  
  } 