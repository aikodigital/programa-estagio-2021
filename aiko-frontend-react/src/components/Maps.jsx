import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import {
  GoogleMap, withScriptjs, withGoogleMap, Marker,
} from 'react-google-maps';
import locbus from '../img/locBusBlue.png';
import stopbus from '../img/StopBus.png';
import { getPrediction } from '../apis/SPTrans';

const GOOGLEMAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;

export default (props) => {
  const prop = props;
  const vehicles = [];
  const stops = [];

  prop.selectLine.map((line) => (
    line.vs.map((vehicle) => vehicles.push(vehicle))
  ));
  prop.selectLine.map((line) => (
    line.stops.map((stop) => stops.push(stop))
  ));

  const [centerMap, setcenterMap] = useState({ cord: { lat: -23.5489, lng: -46.6388 }, zoom: 11 });

  const stopClick = (codStop) => async () => {
    const prediction = await getPrediction(codStop);
    if (prediction.p) {
      setcenterMap({ cord: { lat: prediction.p.py, lng: prediction.p.px }, zoom: 15 });
    }
    prop.setStopInfo(prediction);
  };

  const WrapperdMap = withScriptjs(withGoogleMap(() => (
    <GoogleMap
      defaultZoom={centerMap.zoom}
      defaultCenter={centerMap.cord}
    >
      {stops.map((value) => (
        <Marker
          key={value.cp}
          position={{ lat: value.py, lng: value.px }}
          onClick={stopClick(value.cp)}
          icon={{ url: stopbus, scaledSize: new window.google.maps.Size(25, 40) }}
        />
      ))}
      {vehicles.map((value) => (
        <Marker
          key={value.p}
          position={{ lat: value.py, lng: value.px }}
          icon={{ url: locbus, scaledSize: new window.google.maps.Size(25, 40) }}
        />
      ))}
    </GoogleMap>
  )));

  return (
    <Grid item xs={8} style={{ height: '80vh' }}>
      <WrapperdMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places${GOOGLEMAP_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </Grid>
  );
};
