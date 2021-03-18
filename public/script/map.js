//Habilitando mapa. Tutorial em https://leafletjs.com/
const mymap = L.map("mapid").setView([-23.5879824, -46.6616683], 14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 15,
}).addTo(mymap);

//Criando constantes para facilitar código.
const base_url = "https://aiko-olhovivo-proxy.aikodigital.io";
const token =
  "35779ce7c804e10322855a99110a9c1bf818aac328c3d591edb969f7972c4460";

// Criando parametros
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "https://aiko-olhovivo-proxy.aikodigital.io/",
};

//Função de autenticação - Seguindo orientação da API OlhoVivo.
async function auth() {
  const response = await (
    await fetch(`${base_url}/login/autenticar?token=${token}`, {
      method: "POST",
      headers,
    })
  ).json();
  response
    ? console.log("Autenticação concluida com êxito.")
    : alert(`
  Algo inesperado aconteceu, tente novamente mais tarde ou entre em contato com o desenvolvedor.
  `);
}

//Autenticando onload.
window.onload = auth();

// Documentação API: https://www.sptrans.com.br/desenvolvedores/api-do-olho-vivo-guia-de-referencia/documentacao-api/

// Desafio: https://github.com/aikodigital/programa-estagio-2021/blob/main/front-end.md
