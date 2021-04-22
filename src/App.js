import React from "react";
import { GET_PARADA_TERMO_BUSCA, GET_POSICAO } from "./api";
import Mapa from "./components/Mapa";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [dataParada, setDataParada] = React.useState([]);
  const [dataPosicao, setDataPosicao] = React.useState([]);

  React.useEffect(() => {
    puxarParada();
    puxarPosicao();
  }, []);

  function puxarPosicao() {
    const { url, options } = GET_POSICAO();
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => json != null && setDataPosicao(json.l));
  }

  function puxarParada() {
    const { url, options } = GET_PARADA_TERMO_BUSCA();
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => setDataParada(json));
  }

  setTimeout(() => {
    puxarPosicao();
  }, 10000);

  return (
    <div className="container">
      <Sidebar />
      {dataParada != null && (
        <Mapa dataParada={dataParada} dataPosicao={dataPosicao} />
      )}
    </div>
  );
}

export default App;
