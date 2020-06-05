let categoryButtons = document.getElementsByClassName("categoriaButton");
const filmesContainer = document.getElementById("filmesContainer");
const categoriaBay = document.getElementById("categorias");

const Genero_API = "http://localhost:3000/api/genero";

window.onload = async function getGeneros() {
  const API_CALL = await fetch(Genero_API);
  const GenerosJson = await API_CALL.json();
  let html = "";
  html += `<button class="categoriaButton ativo" id=todos>Todos</button>`;
  for (const genero of GenerosJson) {
    html += `<button class="categoriaButton" id=${genero.id}>${genero.nome}</button>`;
  }
  categoriaBay.innerHTML = html;
  categoryButtons = document.getElementsByClassName("categoriaButton");
  for (let i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].addEventListener("click", function () {
      let currentButton = document.getElementsByClassName("ativo");
      if (currentButton.length > 0) {
        currentButton[0].classList.remove("ativo");
      }
      this.className += " ativo";
      getMoviesByGen(this.id);
    });
  }
  getMoviesByGen("todos");
};

async function getMoviesByGen(id) {
  let API_CALL = "";
  if (id === "todos") {
    API_CALL = await fetch("http://localhost:3000/api/filmes");
  } else {
    API_CALL = await fetch(Genero_API + `/${id}`);
  }

  const imgURL = "http://localhost:3000";

  const FilmesJSon = await API_CALL.json();

  let html = ``;

  for (const filme of FilmesJSon) {
    html += `<a  href="./filme.html?id=${filme.id}">
    <section class="filmeCard">
      <img class="poster" src="${imgURL + filme.poster}" alt="" />
      <h3 class="pontuação ${getGradeColor(filme.media)}">
        ${filme.media.toFixed(1)}
      </h3>
      <h2 class="titulo">${filme.nome}</h2>
    </section></a>`;
  }
  filmesContainer.innerHTML = html;
}

function getGradeColor(media) {
  if (media >= 8) {
    return "pGood";
  }
  if (media < 5) {
    return "pBad";
  }
  if (media == 0) {
    return "pNull";
  } else {
    return "pMedium";
  }
}
