const categoryButtons = document.getElementsByClassName("categoriaButton");
const categoriaAtiva = document.getElementById("categoriaAtiva");

for (let i = 0; i < categoryButtons.length; i++) {
  categoryButtons[i].addEventListener("click", function () {
    let currentButton = document.getElementsByClassName("ativo");
    if (currentButton.length > 0) {
      currentButton[0].classList.remove("ativo");
    }
    this.className += " ativo";
    categoriaAtiva.innerHTML = this.id;
    console.log("Categoria Selecionada " + this.id);
  });
}
