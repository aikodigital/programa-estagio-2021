import React, {useState} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import * as busPos from "../data/posVeiculo.json";
import Header from "./Header";

require('dotenv').config()



function Map() {
  const [selectedBus, setSelectedBus] = useState(null);
  const image = {
    url:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };
  return (<GoogleMap 
    defaultZoom = {10} 
    defaultCenter={{lat:-23.55556, lng:-46.61984}}>
    {busPos.l.map(bus => (

      <Marker 
        key={bus.cl} 
        position={{
          lat: bus.vs[0].py,
          lng: bus.vs[0].px
        }}
        onClick={() => {
          setSelectedBus(bus);
        }}
      />
      
    ))}

    {selectedBus && (
      <InfoWindow 
          position={{
            lat: selectedBus.vs[0].py,
            lng: selectedBus.vs[0].px
        }}
        onCloseClick={() => {
          setSelectedBus(null);
        }}
      > 
        <div>
          <h3>{selectedBus.c}</h3>
          <p>Origem: {selectedBus.lt0}</p>
          <p>Destino: {selectedBus.lt1}</p>
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  );

} 

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return( 
    <div>
      <Header />
      <div className = "map-div">
        <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement = {<div style= {{height: "100%"}} />}
          containerElement = {<div style= {{height: "100%"}} />}
          mapElement = {<div style= {{height: "100%"}} />}
        />
      </div>
    </div>
  ); 
}

export default App;