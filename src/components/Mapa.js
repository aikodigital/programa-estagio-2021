import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerMap from "./MarkerMap";
import { Icon } from "leaflet";

const Mapa = ({ dataPosicao, dataParada, latitude, longitude }) => {
  const paradaIcon = new Icon({
    iconUrl: "./icons/bus-stop.svg",
    iconSize: [25, 25],
  });

  const busIcon = new Icon({
    iconUrl: "./icons/bus.svg",
    iconSize: [15, 15],
  });

  if (dataParada)
    return (
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dataParada.map((item, index) => (
          <MarkerMap
            key={index}
            py={item.py}
            px={item.px}
            nomeParada={item.np}
            codParada={item.cp}
            icon={paradaIcon}
          />
        ))}
        {dataPosicao.map((item, index) => (
          <MarkerMap
            key={index}
            py={item.vs[0].py}
            px={item.vs[0].px}
            linha={item.c}
            origem={item.lt1}
            destino={item.lt0}
            icon={busIcon}
          />
        ))}
      </MapContainer>
    );
};

Mapa.defaultProps = {
  latitude: -23.5489,
  longitude: -46.6388,
};

export default Mapa;
