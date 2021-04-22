import React from "react";
import { Marker, Popup } from "react-leaflet";
import PopupMarker from "./PopupMarker";
import PopupMarkerBus from "./PopupMarkerBus";

const MarkerMap = ({
  py,
  px,
  nomeParada,
  codParada,
  icon,
  linha,
  origem,
  destino,
}) => {
  return (
    <Marker position={[py, px]} icon={icon}>
      <Popup>
        {linha ? (
          <PopupMarkerBus linha={linha} origem={origem} destino={destino} />
        ) : (
          <PopupMarker nomeParada={nomeParada} codParada={codParada} />
        )}
      </Popup>
    </Marker>
  );
};

export default MarkerMap;
