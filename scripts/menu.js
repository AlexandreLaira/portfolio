function menuLista() {
  const botaoMenu = document.querySelector("[data-botao]"),
        menuLista = document.querySelector("[data-menu]");
  function ativaMenu(event) {
      menuLista.classList.toggle("ativa-menu"), botaoMenu.classList.toggle("viraBotaoMenu");
  }
  botaoMenu.addEventListener("click", ativaMenu);
  const listaMobile = undefined;
  document.querySelectorAll("li[data-listaMobile]").forEach((item) => {
      item.addEventListener("click", ativaMenu);
  });
}
export { menuLista };