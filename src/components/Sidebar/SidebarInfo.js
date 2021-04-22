import React from "react";
import styles from "./SidebarInfo.module.css";

const SidebarInfo = ({ linhaRecebida }) => {
  return (
    <div className={styles.responseContainer}>
      {linhaRecebida != null &&
        linhaRecebida.map((item, index) => (
          <div key={index} className={styles.response}>
            <p>
              Código da Linha: <span>{item.cl}</span>
            </p>
            <p>
              Sentido Terminal Principal: <span>{item.tp.toLowerCase()}</span>
            </p>
            <p>
              Sentido Terminal Secundário: <span>{item.ts.toLowerCase()}</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default SidebarInfo;
