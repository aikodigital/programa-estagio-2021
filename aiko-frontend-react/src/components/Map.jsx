import React from 'react';
import { Grid } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';

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

  return (
    <Grid item xs={8} style={{ height: '100vh' }}>
      <GoogleMapReact center={[-23.5489, -46.6388]} zoom={11}>
        {vehicles.map((vehicle) => (
          <LocationOnIcon
            key={vehicle.p}
            lat={vehicle.py}
            lng={vehicle.px}
          />
        ))}
        {stops.map((value) => (
          <DirectionsBusIcon
            key={value.cp}
            lat={value.py}
            lng={value.px}
          />
        ))}
      </GoogleMapReact>
    </Grid>
  );
};
