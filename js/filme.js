const stars = document.getElementsByClassName("star");

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", () => setStars(stars[i].id));
}

function setStars(id) {
  console.log("classificou em " + id);
  for (let j = 0; j < parseInt(id); j++) {
    if (stars[j].className.includes("unchecked")) {
      stars[j].classList.remove("unchecked");
      stars[j].classList.add("checked");
    }
  }
  for (let j = stars.length - 1; j >= parseInt(id); j--) {
    if (stars[j].className.includes("checked")) {
      stars[j].classList.remove("checked");
      stars[j].classList.add("unchecked");
    }
  }
}

const poster = document.getElementById("poster");
const title = document.getElementById("title");
const desc = document.getElementById("description");
const rating = document.getElementById("rating");
const ytb = document.getElementById("LinkYoutube");

const url = window.location;
const id = url.search.split("=")[1];
const URL = `http://localhost:3000/api/filmes/${id}`;

async function FetchFilme() {
  const filmeFetch = await fetch(URL);
  const filmejson = await filmeFetch.json();
  console.log(filmejson);

  const imgURL = "http://localhost:3000";

  poster.src = imgURL + filmejson.poster;
  title.innerHTML = filmejson.nome;
  desc.innerHTML = filmejson.descricao;
  rating.innerHTML = filmejson.media.toFixed(1);
  ytb.href = filmejson.trailer;
}

FetchFilme();
