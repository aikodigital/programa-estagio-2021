//Dado uma parada informar a previsão de chegada de cada veículo que passe pela parada selecionada.
async function arrivalForecast() {
  const arrivalsStop = document.querySelector("#arrivals-stop").value;
  const arrivalsLine = document.querySelector("#arrivals-line").value;
  const response = await (
    await fetch(
      `${base_url}/Previsao?codigoParada=${arrivalsStop}&codigoLinha=${arrivalsLine}`,
      {
        method: "GET",
        headers,
      }
    )
  ).json();
  const getLineInfo = response.l;
  const getStopInfo = response.p;
  console.log(response);
}

// Em construção
