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
