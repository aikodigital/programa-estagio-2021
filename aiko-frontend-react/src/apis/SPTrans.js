const SPTRANS_URL_BASE = process.env.REACT_APP_SPTRANS_URL_BASE;
const SPTRANS_KEY = process.env.REACT_APP_SPTRANS_KEY;

export const getAllLine = async () => {
  const req = await fetch(`${SPTRANS_URL_BASE}Posicao`);
  const json = await req.json();
  return json;
};

export const getLine = async (line) => {
  const req = await fetch(`${SPTRANS_URL_BASE}Linha/Buscar?termosBusca=${line}`);
  const json = await req.json();
  return json;
};

export const authentication = async () => {
  const req = await fetch(`${SPTRANS_URL_BASE}Login/Autenticar?token=${SPTRANS_KEY}`, { method: 'post' });
  const json = await req.json();
  return json;
};

export const getStop = async (line) => {
  const req = await fetch(`${SPTRANS_URL_BASE}Parada/BuscarParadasPorLinha?codigoLinha=${line}`);
  const json = await req.json();
  return json;
};

export const getPrediction = async (codStop) => {
  const req = await fetch(`${SPTRANS_URL_BASE}Previsao/Parada?codigoParada=${codStop}`);
  const json = await req.json();
  return json;
};
