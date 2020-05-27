window.onload = async function () {
  try {
    const Genero_API = "http://localhost:3000/api/genero";
    const API_CALL = await this.fetch(Genero_API);
    const GenerosJson = await API_CALL.json();
    let html = "";
    for (let genero of GenerosJson) {
      html += `<option value="${genero.id}">${genero.nome}</option>`;
    }
    document.getElementById("Categorias").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

function postFilme() {
  try {
    let filme = {
      nome: document.getElementById("nome").value,
      desc: document.getElementById("desc").value,
      Trailer: document.getElementById("Trailer").value,
      Pais: document.getElementById("Pais").value,
      Duracao: document.getElementById("Duracao").value,
      Categorias: document.getElementById("Categorias").value,
      poster: document.getElementById("poster").value,
    };
    let result = fetch("http://localhost:3000/api/filmes", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(filme),
    });
  } catch (err) {
    console.log(err);
  }
}
