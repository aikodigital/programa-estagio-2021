import React, { useState, Component } from "react";
import { toggleDarkmode } from "reacthalfmoon";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import { REACT_APP_GOOGLE_KEY, API_KEY } from ".env.local.js";
import Map from "./Maps.js";
import ONIBUS from "url:./../common/Icons/Onibus.png";
import PONTO from "url:./../common/Icons/ponto.png";

const WrappedMap = withScriptjs(withGoogleMap(Map));
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

export default function App(props) {
  //DEFININDO PREDEFINIÇÕES
  require("halfmoon/css/halfmoon-variables.min.css");
  /*----CONSTANTE UTILIZADA PARA CARREGAR JSON----*/
  const [json, setJson] = useState({});
  /*----CONSTANTE UTILIZADA PARA CARRREGAMENTO, ERRO NO CARREGAMENTO, ESCONDER INFORMAÇÕES----*/
  const [loading, setLoading] = useState(true);
  const [ErroState, setDeuErro] = useState(false);
  const [Esconder, setEsconder] = useState(false);
  /*----INICIALIZA O HALFMOON (BOOTSTRAP)----*/
  const halfmoon = require("halfmoon");
  halfmoon.onDOMContentLoaded();
  //TELA DE CARREGAMENTO
  if (loading) {
    //FAZ UM REQUEST PARA A API UTILIZANDO A CHAVE DE SEGURANÇA COMO FORMA DE LOGIN
    fetch(
      `https://aiko-olhovivo-proxy.aikodigital.io/Login/Autenticar?token={${API_KEY}}`,
      {
        method: "POST",
        headers: new Headers({
          Authorization: `${API_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }
    );
    //FAZ UM REQUEST A API PARA COLETAR O JSON DE POSIÇÕES.
    fetch("https://aiko-olhovivo-proxy.aikodigital.io/Posicao/", {
      method: "GET",
      headers: new Headers({
        Authorization: `${API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => response.json())
      .then((j) => {
        if (j["Message"]) {
          setDeuErro(true);
        }
        setJson(j);
        setLoading(false);
      });

    //RETORNA TELA DE LOADING, SERVE APENAS ENQUANTO ESTIVER CARREGANDO DADOS DE ROTAS
    return (
      <>
        <div className="content">
          <center>
            <h2>Carregando dados</h2>
            <img
              src="https://i.stack.imgur.com/27Rnd.gif"
              alt="..."
              width="30px"
            />
          </center>
        </div>
      </>
    );
    //QUANDO NÃO ESTIVER MAIS CARREGANDO DADOS RETORNA TELA PADRÃO
  } else if (json != null) {
    //CASO NÃO CONSIGA EFETUAR O REQUEST, RETORNA ERRO
    if (ErroState) {
      return (
        <>
          <h2 variant="h2">O servidor está com problemas.</h2>
          <h2 variant="h4">{json["Message"]}</h2>
        </>
      );
    }
    let rotas = [];
    //COLETANDO POSIÇÃO DOS ONIBUS VIA JSON E ADICIONA A LISTA DE ÔNIBUS.
    for (let i = 0; i < json["l"].length; i++) {
      let lista_onibus = [];
      for (let j = 0; j < json["l"][i]["vs"].length; j++) {
        lista_onibus.push({
          cod_onibus: json["l"][i]["vs"][j]["p"],
          acessivel: json["l"][i]["vs"][j]["a"],
          x: json["l"][i]["vs"][j]["px"],
          y: json["l"][i]["vs"][j]["py"],
        });
      }
      //ADICIONA INFORMAÇÕES A LISTA DE ROTAS VERIFICANDO O JSON.
      rotas.push({
        letreiro: json["l"][i]["c"],
        cod_linha: json["l"][i]["cl"],
        sentido: json["l"][i]["sl"],
        letreiro_destino: json["l"][i]["lt0"],
        letreiro_origem: json["l"][i]["lt1"],
        qtd_onibus: json["l"][i]["qv"],
        onibus: lista_onibus,
      });
    }

    //IMPRIME TODAS AS INFORMAÇÕES NA TELA POR LISTA DE DADOS.
    let listaRotas = [];
    for (let i = 0; i < rotas.length; i++) {
      let listaOnibus = [];
      //ADICIONA INFORMAÇÕES SOBRE ÔNIBUS PARA A LISTA DE ÔNIBUS
      if (Esconder == true) {
        for (let j = 0; j < rotas[i].onibus.length; j++) {
          listaOnibus.push(
            <>
              <ul id="OnibusList" style={{ listStyleType: "square" }}>
                <li key={j}>
                  {"Código do ônibus:" + rotas[i]["onibus"][j]["cod_onibus"]}
                </li>
                <li key={j + 1}>
                  'O ônibus é acessível?:'
                  {rotas[i]["onibus"][j]["acessivel"] ? "Sim" : "Não"}{" "}
                </li>
                <li key={j + 2}>{"Posição X:" + rotas[i]["onibus"][j]["x"]}</li>
                <li key={j + 3}>{"Posição Y:" + rotas[i]["onibus"][j]["y"]}</li>
              </ul>
              <hr />
            </>
          );
        }
        //ADICIONA INFORMAÇÕES SOBRE ROTAS PARA A LISTA DE ROTAS
        listaRotas.push(
          <>
            <p> Rota </p>
            <ul key={i} style={{ listStyleType: "disc" }}>
              <li key={i + 2}>{"Letreiro:" + rotas[i]["letreiro"]}</li>
              <li key={i + 3}>{"Código da Linha:" + rotas[i]["cod_linha"]}</li>
              <li key={i + 4}>
                {"Sentido:" + (rotas[i]["sentido"] == 1)
                  ? "Terminal Principal para Terminal Secundário"
                  : "Terminal Secundário para Terminal Principal"}
              </li>
              <li key={i + 5}>{"Destino:" + rotas[i]["letreiro_destino"]}</li>
              <li key={i + 6}>{"Origem:" + rotas[i]["letreiro_origem"]}</li>
              <li key={i + 7}>{"Qtd. Ônibus:" + rotas[i]["qtd_onibus"]}</li>
            </ul>
            <p>Ônibus</p>
            {listaOnibus}
          </>
        );
        //console.log(listaRotas);
      }
      /*
       * QUANDO ESSA FUNÇÃO É CHAMADA, ALTERNA O ESTADO DE "ESCONDER".
       * CASO ESCONDER SEJA TRUE, ESCONDER SERÁ FALSO, RELACIONADO AO BOTÃO.
       */
      function BotaoMostrar() {
        Esconder == true ? setEsconder(false) : setEsconder(true);
      }
    }
    //CASO ESCONDER SEJA VERDADEIRO, RETORNA BOTÃO PARA MOSTRAR INFORMAÇÕES
    let button;
    if (Esconder) {
      button = (
        <button className={"btn btn-block"} onClick={BotaoMostrar}>
          {" "}
          Esconder{" "}
        </button>
      );
      //CASO ESCONDER SEJA FALSO, RETORNA BOTÃO PARA ESCONDER INFORMAÇÕES.
    } else {
      button = (
        <button
          className={"btn btn-block"}
          data-toggle="tooltip"
          data-placement="bottom"
          data-title="Exibe dados sobre rotas e ônibus no final da barra lateral (pode demorar)."
          onClick={BotaoMostrar}
        >
          {" "}
          Carregar lista de dados{" "}
        </button>
      );
    }

    //RETORNA TODAS AS INFORMAÇÕES QUE DEVEM APARECER NA TELA PARA O INDEX.JS
    return (
      <>
        {/*CONTEUDO PRINCIPAL DA PAGINA (MAPA, INFORMAÇÕES...)*/}
        <div
          className="page-wrapper with-navbar with-sidebar"
          data-sidebar-type="overlayed-sm-and-down"
        >
          <div
            className="sidebar-overlay"
            onClick={halfmoon.toggleSidebar.bind(halfmoon)}
          ></div>
          <div className="content-wrapper overflow-x-hidden overflow-y-hidden">
            <center>
              {/*CHAMA O MAPA*/}
              <div>
                <div
                  className="container-fluid"
                  style={{ width: "75vw", height: "70vh" }}
                >
                  <h2 className="card-title"></h2>
                  <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_KEY}&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ heigth: `0%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </div>
              </div>
            </center>
          </div>
          {/*BARRA DE NAVEGAÇÃO*/}
          <nav className="navbar">
            {/*BOTÃO PARA MOSTRAR BARRA LATERAL*/}
            <button
              id={"toggle-sidebar-btn"}
              className={"btn btn-action"}
              type="button"
              onClick={halfmoon.toggleSidebar.bind(halfmoon)}
            >
              ☰
            </button>
            {/*TITULO DA PAGINA NA BARRA DE NAVEGAÇÃO*/}
            <a href="https://github.com/Caique-P" className="navbar-brand">
              <img src="https://img.icons8.com/plasticine/2x/bus.png" alt="" />
              Transporte de São Paulo
            </a>
          </nav>

          {/*BARRA LATERAL*/}
          <div className="sidebar">
            {/*ALTERNA TEMA DA PAGINA PARA ESCURO*/}
            <div className="sidebar-content">
              <h5 className="sidebar-title">Temas</h5>
              <div className="sidebar-divider"></div>
              <div className="custom-switch">
                <input
                  type="checkbox"
                  id="temaescuro"
                  onClick={toggleDarkmode}
                />
                {/*Quando estiver no tema escuro: */}
                <label htmlFor="temaescuro" class="hidden-lm">
                  Tema escuro <i class="fas fa-moon"></i>
                </label>
                <label htmlFor="temaescuro" class="hidden-dm">
                  Tema claro{" "}
                </label>
              </div>
              <br />
              {/*MAIS INFORMAÇÕES DA BARRA LATERAL:*/}
              <div className="collapse-group w-500 mw-full">
                <h5 className="sidebar-title"> Mais informações</h5>
                <div className="sidebar-divider"></div>
                {/*BOTÃO DE ESCONDER INFORMAÇOES OU MOSTRAR*/}
                {button}
                <br />
                {/*MOSTRA MAIS INFORMAÇÕES SOBRE A PAGINA*/}
                <h5 className="sidebar-title">Saiba mais</h5>
                <div className="sidebar-divider"></div>
                <details className="collapse-panel w-400 mw-full">
                  <summary className="collapse-header">
                    Como filtrar dados?
                  </summary>
                  <div className="collapse-content text-justify">
                    Para filtrar dados no mapa, clique em
                    <span className="badge badge-secondary badge-pill">
                      Paradas
                    </span>{" "}
                    ou{" "}
                    <span className="badge badge-primary badge-pill">
                      Ônibus
                    </span>
                    , localizados abaixo da barra de pesquisa.
                  </div>
                </details>
                <details className="collapse-panel w-400 mw-full">
                  <summary className="collapse-header">
                    Como encontrar um endereço?
                  </summary>
                  <div className="collapse-content text-justify">
                    Para realizar uma busca, clique na barra de pesquisa abaixo
                    do mapa, insira o endereço e clique em pesquisar
                  </div>
                </details>
                <details className="collapse-panel w-400 mw-full">
                  <summary className="collapse-header">
                    Como saber mais sobre ônibus e paradas?
                  </summary>
                  <div className="collapse-content text-justify">
                    Encontre a parada desejada no mapa{" "}
                    <img width="25" height="25" src={PONTO} /> e clique, os
                    dados serão mostrados por linhas de ônibus.
                  </div>
                  <summary className="collapse-header without-arrow">
                    Como saber informações sobre um ônibus?
                  </summary>
                  <div className="collapse-content text-justify">
                    Para encontrar mais informações sobre um ônibus, no mapa,
                    clique no icone <img width="25" height="25" src={ONIBUS} />
                  </div>
                </details>

                <details className="collapse-panel w-400 mw-full">
                  <summary className="collapse-header">
                    Preciso atualizar a pagina?
                  </summary>
                  <div className="collapse-content text-justify">
                    Não é necessário, pois a pagina é atualizada
                    automaticamente.
                  </div>
                </details>
                {/* <details className="collapse-panel w-400 mw-full">
                <summary className="collapse-header">
                  Como alterar o tema da pagina?
                </summary>
                <div className="collapse-content text-justify">
                  Clique no interruptor
                  <div className="custom-switch">
                    <input type="checkbox" id="switch-1" value="" />
                    <label htmlFor="switch-1" class="hidden-lm">Tema escuro</label>
                <label htmlFor="switch-1" class="hidden-dm">Tema claro </label>
                
                  </div>
                  no topo da barra lateral.
                </div>
              </details>*/}
              </div>
              <br />
              <div className="custom-footer">
                <hr />
                Feito por Caique Ponjjar,
                <br />
                desafio AIKO <i className="fas fa-copyright"></i> 2021.
              </div>
              {/*RETORNA AS LISTAS*/}
              {listaRotas == "" ? null : (
                <>
                  <br />
                  <h5 className="sidebar-title">Outros dados</h5>
                  <div className="sidebar-divider"></div> {listaRotas}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
