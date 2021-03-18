//Buscando uma linha a partir de um input
async function getLines() {
  const inputClient = document.querySelector("#lines").value;

  const lines = await (
    await fetch(`${base_url}/Linha/Buscar?termosBusca=${inputClient}`, {
      method: "GET",
      headers,
    })
  ).json();
  if (lines.length <= 0) {
    return alert(`
    Não encontramos nada pesquisando ${inputClient}.
    A pesquisa aceita denominação ou número da linha.
    Ex: Ramos, Lapa ou 8000.
    `);
  } else {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.add("active");
    const hiddenMap = document.querySelector(".hidden-map");
    hiddenMap.classList.add("active");
    const dataList = document.querySelector(".modal-container ul");
    dataList.innerHTML = lines.map((line) =>
      line.sl === 1
        ? `<li> <b>Cód linha:</b> ${line.cl}   <b>Sentido:</b> ${line.tp}.</li>`
        : `<li> <b>Cód linha:</b> ${line.cl}   <b>Sentido:</b> ${line.ts}.</li>`
    );
  }
}

function closeModal() {
  window.location.reload();
}
