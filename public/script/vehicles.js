// Posições dos veículos: Exibir no mapa onde os veículos estavam na sua última atualização.
async function getVehicles() {
  function loadingGif() {
    var loadGif = document.querySelector(".load-gif");
    loadGif.classList.add("active");
    const hiddenMap = document.querySelector(".hidden-map");
    hiddenMap.classList.add("active");
    setTimeout(function () {
      loadGif.classList.remove("active");
      hiddenMap.classList.remove("active");
    }, 20000);
  }
  loadingGif();
  const response = await (
    await fetch(`${base_url}/Posicao`, { method: "GET", headers })
  ).json();
  const vehicles = response.l;
  vehicles.forEach(({ vs, cl, lt0 }) => {
    const [coordinates] = vs;
    var myIcon = L.icon({
      iconUrl: "../assets/bus.png",
      iconSize: [45, 45],
    });
    var marker = L.marker([coordinates.py, coordinates.px], {
      icon: myIcon,
    }).addTo(mymap);
    marker
      .bindPopup(
        `<strong>Código Linha:</strong> ${cl}<br><strong>Destino:</strong> ${lt0}`
      )
      .openPopup();
  });
}
