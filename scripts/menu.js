

function menuLista(){

  const botaoMenu = document.querySelector('[data-botao]');
  const menuLista = document.querySelector('[data-menu]');
  
  function ativaMenu(event){
    // event.currentTarget.classList.toggle('viraBotaoMenu');
    menuLista.classList.toggle('ativa-menu');
    botaoMenu.classList.toggle('viraBotaoMenu')
  }
  
  botaoMenu.addEventListener('click', ativaMenu);

  const listaMobile = document.querySelectorAll('li[data-listaMobile]');

  listaMobile.forEach((item) =>{
    item.addEventListener('click', ativaMenu);
  })

}

export {menuLista}
