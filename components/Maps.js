import ONIBUS from "url:./../common/Icons/Onibus.png";
import PONTO from "url:./../common/Icons/ponto.png";
import ESTILO from "./MapStyle.js";
import React, { useState } from "react";
import { REACT_APP_GOOGLE_KEY, API_KEY } from ".env.local.js";
import { GoogleMap, Marker, InfoWindow, TrafficLayer } from "react-google-maps";
//PREDEFINIÇÕES DO MAPA (Latitude, Longitude, Zoom, Pontos, Caixas de informações...):
export default function Map() {
  /*----CONSTANTES PARA SELECIONAR UM PONTO NO MAPA----*/
  const [SelecionarOnibus, setSelecionar] = useState(null);
  const [SelecionarParada, setSelecionarParada] = useState(null);
  const [ParadasOnibus, setParadasOnibus] = useState({});

  /*---- CARREGA INFORMAÇÃO SOBRE A POSIÇÃO DO ONIBUS ----*/
  const [PosBus, setPosBus] = useState({});
  /*---- CARREGA INFORMAÇÃO SOBRE A POSIÇÃO DA PREVISÃO DE PONTOS ----*/
  const [previsaoP, setPrevisaoP] = useState({});
  /*---- ATUALIZA INFORMAÇÃO SEMPRE QUE FOR DIFERENTE A ANTERIOR ----*/
  const [verificarPontos, setVerificarPontos] = useState({});
  /*---- CARREGA INFORMAÇÃO SOBRE CORREDORES ----*/
  const [corredores, setCorredor] = useState({});
  /*---- VARIAVÉIS PARA CARREGAMENTOS (Carregamento, Posição onibus ) ----*/
  const [loading, setLoading] = useState(true);
  const [loadingPos, setLoadingPos] = useState(true);
  /*---- CARREGAMENTO DE ULTIMAS ETAPAS (Corredores) ----*/
  const [loadingCor, setLoadingCor] = useState(true);
  const [loadingBus, setLoadingBus] = useState(true);
  /*---- CARREGA O VALOR DO INPUT DE PESQUISA E O RESULTADO  ----*/
  const [pesquisa, setPesquisa] = useState("");
  /*---- PERMITE EXIBIÇÃO DA PESQUISA (COM O RESULTADO)      ----*/
  const [Endereco, setEndereco] = useState(false);
  /*---- CARREGA INFORMAÇÃO SOBRE FILTROS:                        *
     Sem filtro, Filtrar parada, Filtrar onibus, Filtrar tudo ----*/
  const [Filtros, setFiltro] = useState("Sem filtro");
  /*----CONTADOR PARA ATUALIZAR INFORMAÇÕES----*/
  const [counter, setCounter] = useState(90);

  //DIMINUI 90 SEGUNDOS A CADA 90 SEGUNDOS
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 90), 90000);
  }, [counter]);
  //QUANDO FOR MENOR OU IGUAL A 0, RESETA CONTADOR E RECARREGA INFORMAÇÔES DA PAGINA
  if (counter <= 0) {
    setLoadingPos(true);
    setCounter(90);
  }
  //FAZ UM REQUEST A API PARA COLETAR O JSON DE POSIÇÕES.
  if (loadingPos) {
    fetch(`https://aiko-olhovivo-proxy.aikodigital.io/Posicao/`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((j) => {
        setPosBus(j);
        setLoadingPos(false);
      });
  }
  if (loading) {
    //FAZ UM REQUEST A API UTILIZANDO A CHAVE DE SEGURANÇA PARA LOGIN.
    fetch(
      `https://aiko-olhovivo-proxy.aikodigital.io/Login/Autenticar?token={${API_KEY}}`,
      {
        method: "POST",
      }
    );

    if (loadingCor) {
      //REQUESITANDO INFORMAÇÕES DOS PONTOS DE ONIBUS:

      fetch(`https://aiko-olhovivo-proxy.aikodigital.io/Corredor/`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((v) => {
          setCorredor(v);
          setLoadingCor(false);
        });
    }

    //CONSULTA O SITE DA API POR CORREDORES E ADICIONA A LISTA (RETORNA UMA URL DE PARADA PRA CADA CORREDOR)
    const urls = [];
    if (loadingCor == false && loadingBus) {
      for (let i = 0; i < 7; i++) {
        {
          urls[
            i
          ] = `https://aiko-olhovivo-proxy.aikodigital.io/Parada/BuscarParadasPorCorredor?codigoCorredor=${corredores[i].cc}`;
        }
      }
      //CONSULTA A URL E RETORNA UMA LISTA DE VETORES COM CADA PONTO DE PARADA
      Promise.all(urls.map((url) => fetch(url)))
        .then((resp) => Promise.all(resp.map((r) => r.json())))
        .then((result) => {
          setParadasOnibus(result);
          setLoadingBus(false);
        });
    }
    //CASO NÃO ESTEJA CARREGANDO A POSIÇÃO DO ONIBUS E CORREDORES.
    if (loadingPos == false && loadingCor == false) {
      setLoading(false);
    }
    return (
      <>
        <center>
          <h2>Carregando dados</h2>
          <img
            src="https://i.stack.imgur.com/27Rnd.gif"
            alt="..."
            width="30px"
          />
        </center>
      </>
    );
  } else {
    //RETORNA O VALOR DE TODAS AS PARADAS DE ÔNIBUS NO MAPA
    function PontosParadas() {
      const Marcadores = [];
      //CASO JA TENHA CARREGADO OS CORREDORES (LISTA URL) E NÃO ESTIVER FILTRANDO:
      if (
        loadingCor == false &&
        ((Filtros == "Filtrar parada" && Filtros != "Filtrar tudo") ||
          (Filtros == "Sem filtro" && Filtros != "Filtrar tudo"))
      ) {
        //CRIAR UMA LISTA (MARCADORES) COM A POSIÇÃO DE CADA PONTO DE PARADAS NO MAPA
        for (let i = 0; i < ParadasOnibus.length; i++) {
          {
            Marcadores.push(
              ParadasOnibus[i].map((PontosMaps) => (
                <Marker
                  position={{
                    //Marcando a posicao de cada onibus:
                    lat: PontosMaps["py"],
                    lng: PontosMaps["px"],
                  }}
                  onClick={() => {
                    setSelecionarParada(PontosMaps);
                  }}
                  icon={{
                    url: PONTO,
                    scaledSize: new window.google.maps.Size(37, 37),
                  }}
                />
              ))
            );
          }
        }
        //RETORNA A LISTA COM A POSIÇÃO DAS PARADAS NO MAPA
        return <div>{Marcadores}</div>;
      }
    }
    //ESSA FUNÇÃO É CHAMADA PARA CARREGAR A PREVISÃO DE CADA PARADA AO CLICAR NELA
    function PrevisaoParada(props) {
      //CONSULTA OS DADOS DA PARADA SOLICITADA
      if (verificarPontos != props) {
        fetch(
          `https://aiko-olhovivo-proxy.aikodigital.io/Previsao/Parada?codigoParada=${props}`,
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            //VERIFICAR PONTOS IRA GARANTIR QUE NÃO VERIFIQUE MUITAS VEZES O MESMO VALOR (evitando travamentos)
            setVerificarPontos(props);
            //CARREGA OS DADOS DA PREVISÃO DA PARADA SOLICITADA (previsaop)
            setPrevisaoP(data);
          });
      }
      //CASO NÃO HAJA PREVISÕES
      if (previsaoP["p"] == null && loadingPos == false) {
        if (previsaoP != null) {
          return (
            <>
              <strong>Horário da consulta: {previsaoP["hr"]}</strong>
              <br />
              <span className="badge badge-pill">
                Sem previsão para essa parada.
              </span>
              <hr />
            </>
          );
        } else {
          return (
            <>
              <span className="badge badge-pill">
                Sem previsão para essa parada.
              </span>
              <hr />
            </>
          );
        }
        //CASO HAJA PREVISÃO:
      } else {
        if (loadingPos == false && previsaoP != null) {
          let lista_previsao = [];
          //CRIA UMA LISTA COM TODOS OS DADOS DE CADA LINHA, POR MEIO DO FOR
          for (let i = 0; i < previsaoP["p"]["l"].length; i++) {
            lista_previsao.push(
              <div>
                <br />
                <strong>Linha</strong>
                <br /> {previsaoP["p"]["l"][i]["cl"]} <br />{" "}
                {previsaoP["p"]["l"][i]["vs"].length == 0 ? (
                  <span className="badge badge-pill">
                    Sem dados de previsão
                  </span>
                ) : (
                  <strong> Previsão: </strong>
                )}{" "}
                <br />
              </div>
            );
            //ADIOCIONA À LISTA DADOS DE PREVISÃO DA LINHA
            for (let j = 0; j < previsaoP["p"]["l"][i]["vs"].length; j++) {
              lista_previsao.push(
                <span className="badge badge-primary badge-pill">
                  {" "}
                  {previsaoP["p"]["l"][i]["vs"][j]["t"]}{" "}
                </span>
              );
            }
          }

          //RETORNA A LISTA DE PREVISÃO CRIADA
          return (
            <div>
              <strong>Horário da consulta: {previsaoP["hr"]}</strong>
              <br />
              <div>{lista_previsao}</div>
              <hr />
            </div>
          );
        }
      }
    }
    //FUNÇÃO PARA FILTRAR DADOS NO MAPA
    async function MudarFiltro(val) {
      /*-------------=FILTROS PARA ÔNIBUS--------------*/
      if (val.target.value == "Onibus") {
        //SE DESATIVOU O ÔNIBUS (FILTROU)
        if (val.target.className == "btn btn-primary btn-rounded") {
          //VERIFICA SE O BOTÃO É DE CORES PRIMÁRIAS, ALTERA COR PARA NEUTRO
          val.target.className = "btn btn-rounded";

          //ALTERNA PROPIEDADES DE FILTROS
          if (Filtros == "Sem filtro") {
            setFiltro("Filtrar parada");
            return;
          } else {
            setFiltro("Filtrar tudo");
            return;
          }
        }

        //SE ATIVOU O ÔNIBUS (DESATIVOU FILTRO)
        if (val.target.className == "btn btn-rounded") {
          //SE O BOTÃO NÃO TIVER COR, ALTERA COR PARA PRIMÁRIA
          val.target.className = "btn btn-primary btn-rounded";
          //ALTERNA PROPIEDADES DE FILTROS

          if (Filtros == "Filtrar parada") {
            setFiltro("Sem filtro");
            return;
          } else if (Filtros == "Filtrar tudo") {
            setFiltro("Filtrar onibus");
          }
        }
      } else if (val.target.value == "Parada") {
        /*---------------FILTROS PARA PARADAS--------------*/
        //SE DESATIVOU A PARADA (FILTROU)
        if (val.target.className == "btn btn-secondary btn-rounded") {
          //VERIFICA SE O BOTÃO É DE CORES SECUNDÁRIAS, ALTERA COR PARA NEUTRO
          val.target.className = "btn btn-rounded";

          //ALTERNA PROPIEDADES DE FILTROS
          if (Filtros == "Filtrar parada") {
            setFiltro("Filtrar tudo");
            return;
          } else if (Filtros == "Sem filtro") {
            setFiltro("Filtrar onibus");
            return;
          }
        }

        //SE ATIVOU A PARADA (DESTIVOU FILTRO)
        if (val.target.className == "btn btn-rounded") {
          //SE O BOTÃO NÃO TIVER COR, ALTERA COR PARA SECUNDÁRIA
          val.target.className = "btn btn-secondary btn-rounded";

          //ALTERNA PROPIEDADES DE FILTROS
          if (Filtros == "Filtrar onibus") {
            setFiltro("Sem filtro");
            return;
          } else {
            setFiltro("Filtrar parada");
            return;
          }
        }
      }
    }
    //FUNÇÃO ASSÍNCRONA PARA CONSEGUIR O VALOR (DATA) DA CAIXA DE PESQUISA E PROCESSAR PARA O BOTÃO
    async function getData(val) {
      /*----VERIFICA SE A CAIXA DE TEXTO FOR ALTERADA (input)----*/
      if (val.target.value != "Pesquisando...") {
        //ALTERA DADOS SOBRE O VALOR PARA PESQUISAR
        setPesquisa(val.target.value);

        /*----CASO O BOTÃO FOR PRESSIONADO----*/
      } else {
        //FAZ UM REQUEST PARA A PESQUISA DE ENDEREÇO, RETORNANDO A LOCALIZAÇÃO IDEAL
        await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=1%20${pesquisa},77700%20S%C3%A3o%20Paulo&&key=${REACT_APP_GOOGLE_KEY}`,
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            //PERMITE EXIBIR INFORMAÇÕES NO MAPA
            setEndereco(true);
            //CARREGA PESQUISA COM TODOS OS DADOS RETORNADOS NO MAPA (Rua, Posição, Lat, Lng...).
            setPesquisa(
              <InfoWindow
                position={{
                  lat: data["results"]["0"]["geometry"]["location"]["lat"],
                  lng: data["results"]["0"]["geometry"]["location"]["lng"],
                }}
                onCloseClick={() => {
                  setSelecionar(null);
                  setSelecionarParada(null);
                }}
              >
                <div
                  className="card p-4"
                  style={{ backgroundColor: "white !important" }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h2 className="content-title">
                      {data["results"]["0"]["formatted_address"]}{" "}
                    </h2>
                    <hr />
                  </div>
                </div>
              </InfoWindow>
            );
          });
      }
    }
    /*--------------------------RETORNA TODOS OS VALORES----------------------*/
    return (
      <>
        <div>
          {/* BARRA DE PESQUISA E BOTÃO DE PESQUISAR */}
          <div className="form-group input-group">
            <div className="input-group">
              {/*Ira adicionar as propiedades ao pesquisar.*/}
              <input
                className="form-control"
                type="text"
                onBlur={getData}
                placeholder="Digite um endereço..."
              />
              <button
                className="input-group-text"
                data-title="Pesquise um local no google maps"
                data-toggle="tooltip"
                data-placement="left"
                onClick={getData}
                value="Pesquisando..."
              >
                Pesquisar
              </button>
            </div>
          </div>
          <div className="d-flex">
            {/* OPÇÕES DE FILTROS */}
            <div className="font-size-16">
              <span className="align-middle">Filtros:⠀</span>
            </div>
            <div className="flex-grow-0 " />
            <div className="font-size-14">
              <span className="btn-group" role="group" aria-label="...">
                <button
                  className="btn btn-secondary btn-rounded"
                  type="button"
                  value="Parada"
                  onClick={MudarFiltro}
                >
                  Paradas
                </button>
                <button
                  className="btn btn-primary btn-rounded"
                  value="Onibus"
                  type="button"
                  onClick={MudarFiltro}
                >
                  Ônibus
                </button>
              </span>
            </div>
            {/* EXIBE HORÁRIO DE ATUALIZAÇÃO AO LADO OPOSTO DO FILTRO*/}
            <div className="flex-grow-1 " />
            <span class="badge align-middle">
              Horário de atualização
              <br />
              {loadingPos || PosBus == null ? (
                <i className="far fa-circle"></i>
              ) : (
                PosBus["hr"]
              )}
            </span>
          </div>
        </div>
        <br />
        {/* CONFIGURAÇÕES E INFORMAÇÕES A MOSTRAR NO MAPA */}
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: -23.5489, lng: -46.6388 }}
          defaultOptions={{ styles: ESTILO }}
        >
          {/* MOSTRA LINHAS DE TRAFICO NO MAPA */}
          <TrafficLayer autoUpdate />
          {
            //VERIFICA SE HÁ FILTROS, SENÃO ADICIONA PONTOS DE ONIBUS NO MAPA:
            (loadingPos == false &&
              Filtros == "Filtrar onibus" &&
              Filtros != "Filtrar tudo") ||
            (PosBus != null &&
              loadingPos == false &&
              Filtros == "Sem filtro" &&
              Filtros != "Filtrar tudo")
              ? PosBus.l.map((dataonibus) => (
                  <Marker
                    key={dataonibus["vs"][0]["p"]}
                    position={{
                      //MARCANDO A POSICAO DE CADA ONIBUS:
                      lat: dataonibus["vs"][0]["py"],
                      lng: dataonibus["vs"][0]["px"],
                    }}
                    //INDICANDO A RELAÇÃO SELECIONARONIBUS E DATA ONIBUS AO CLICAR.
                    onClick={() => {
                      setSelecionar(dataonibus);
                    }}
                    onMouseUp={() => {
                      setSelecionarParada(null);
                    }}
                    //INDICANDO O ICONE E ALTERANDO O TAMANHO DELE.
                    icon={{
                      url: ONIBUS,
                      scaledSize: new window.google.maps.Size(35, 35),
                    }}
                  />
                ))
              : null
          }
          {/*--------------------*/}

          {
            //ADICIONA PONTOS DE PARADAS NO MAPA
            PontosParadas()
          }

          {
            /* EXIBE ENDEREÇO QUANDO PESQUISADO NO MAPA */
            Endereco ? <div className="invisible">{pesquisa}</div> : null
          }
          {
            //ADICIONA CAIXA DE INFORMAÇÃO A UM ÔNIBUS QUANDO SOLICITADO
            SelecionarOnibus && (
              <InfoWindow
                position={{
                  lat: SelecionarOnibus["vs"][0]["py"],
                  lng: SelecionarOnibus["vs"][0]["px"],
                }}
                onCloseClick={() => {
                  setSelecionar(null);
                  setSelecionarParada(null);
                }}
                //EXIBE DADOS SOBRE O ÔNIBUS SELECIONADO
              >
                <div className="card p-4">
                  <i className="fas fa-bus"></i>
                  <h2 className="content-title">Informações sobre o Ônibus</h2>
                  <div>
                    <strong>Letreiro</strong>
                    <br />
                    {SelecionarOnibus.c}
                  </div>
                  <hr />
                  <div>
                    <strong>Código identificador da linha</strong>
                    <br />
                    {SelecionarOnibus.cl}
                  </div>
                  <hr />
                  <div>
                    <strong>Origem e destino</strong>
                    <br />
                    {SelecionarOnibus.lt1}{" "}
                    <i className="fas fa-arrow-right" alt="<->"></i>{" "}
                    {SelecionarOnibus.lt0}
                  </div>
                  <hr />
                  <div>
                    <strong>Ônibus acessivel</strong>
                    <br />
                    {SelecionarOnibus["vs"][0]["a"] ? "Sim" : "Não"}
                  </div>
                </div>
              </InfoWindow>
            )
          }
          {
            //ADICIONA CAIXA DE INFORMAÇÃO A CADA PONTO DE PARADA DE ONIBUS QUANDO SOLICITADO
            SelecionarParada && (
              <InfoWindow
                position={{
                  lat: SelecionarParada["py"],
                  lng: SelecionarParada["px"],
                }}
                onCloseClick={() => {
                  setSelecionarParada(null);
                  setSelecionar(null);
                }}
                onDomReady={() => {
                  setSelecionar(null);
                }}
                //EXIBE DADOS SOBRE O PONTO DE PARADA SELECIONADO
              >
                <div className="card p-4">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h2 className="content-title">
                      Previsão da parada selecionada:{" "}
                    </h2>
                    <hr />
                    <div>{PrevisaoParada(SelecionarParada["cp"])}</div>
                    <h2 className="content-title">
                      Informações sobre essa parada{" "}
                    </h2>
                    <strong>Nome da parada:</strong>
                    <br />
                    {SelecionarParada["np"]}
                  </div>
                  <div>
                    <hr />
                    <strong>Código identificador da parada:</strong>
                    <br />
                    {SelecionarParada["cp"]}
                  </div>
                  <div>
                    <hr />
                    <strong>Endereço de localização da parada:</strong>
                    <br />
                    {SelecionarParada["ed"]}
                  </div>
                </div>
              </InfoWindow>
            )
          }
        </GoogleMap>
      </>
    );
  }
}
