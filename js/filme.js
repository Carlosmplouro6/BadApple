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
