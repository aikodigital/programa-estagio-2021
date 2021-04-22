import React from "react";
import { GET_LINHAS } from "../../api";
import { AppContext } from "../../context/AppContext";
import styles from "./Sidebar.module.css";
import SidebarInfo from "./SidebarInfo";

const Sidebar = () => {
  const { linha, sentido, setLinha, setSentido } = React.useContext(AppContext);

  const [linhaRecebida, setLinhaRecebida] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    puxarLinha(linha, sentido);
  }

  function puxarLinha(linha, sentido) {
    const { url, options } = GET_LINHAS(linha, sentido);
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => setLinhaRecebida(json));
  }

  function handleChange({ target }) {
    setLinha(target.value);
  }

  function handleChangeSelect({ target }) {
    setSentido(target.value);
  }

  return (
    <aside className={styles.sidebarContainer}>
      <header className={styles.title}>
        <h2>Pegue o ônibus</h2>
        <img src="/icons/logo.svg" alt="Mapa logo" />
      </header>
      <form onSubmit={handleSubmit}>
        <p>
          Clique nos elementos
          <img src="/icons/bus-stop.svg" alt="icone parada de onibus" /> ou
          <img src="/icons/bus.svg" alt="icone onibus" /> no mapa para
          informações.
        </p>
        <div className={styles.input}>
          <label htmlFor="linha">Digite o número da linha: </label>
          <input
            type="text"
            placeholder="Nº Linha"
            name="linha"
            value={linha}
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="sentido">Escolha o sentido da rota</label>
          <select value={sentido} onChange={handleChangeSelect} name="sentido">
            <option value="1">
              Sentido Terminal principal para secundário.
            </option>
            <option value="2">
              Sentido Terminal secundário para principal.
            </option>
          </select>
        </div>
        <button className={styles.btnBuscar}>Buscar</button>
      </form>
      <SidebarInfo linhaRecebida={linhaRecebida} />
    </aside>
  );
};

export default Sidebar;
