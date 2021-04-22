import React from "react";
import styles from "./PopupMarkerBus.module.css";

const PopupMarkerBus = ({ linha, origem, destino }) => {
  return (
    <div className={styles.popupBusContainer}>
      <h2>Linha {linha}</h2>
      <p>Ônibus vindo de {origem}</p>
      <p>com destino a {destino}</p>
    </div>
  );
};

export default PopupMarkerBus;
