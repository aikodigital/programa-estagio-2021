//Buscando uma parada a partir de um input
async function getStops() {
  const inputClient = document.querySelector("#stops").value;
  const stops = await (
    await fetch(`${base_url}/Parada/Buscar?termosBusca=${inputClient}`, {
      method: "GET",
      headers,
    })
  ).json();
  if (stops.length <= 0) {
    alert(`
        Não encontramos nada pesquisando ${inputClient}.
        A consulta possibilida encontrar pontos de parada
        de ônibus na cidade de São Paulo.
        Exemplo: Afonso ou Balthazar da Veiga.
        `);
  } else {
    stops.forEach((stops) => {
      var marker = L.marker([stops.py, stops.px]).addTo(mymap);
      marker
        .bindPopup(
          `
                <strong>CÓDIGO: </strong>${stops.cp} <br>
                <strong>NOME: </strong>${stops.np} <br>
                <strong>ENDEREÇO: </strong>${stops.ed}
              `
        )
        .openPopup();
    });
  }
}
