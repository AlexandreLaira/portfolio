

function menuLista(){

  const botaoMenu = document.querySelector('[data-botao]');
  const menuLista = document.querySelector('[data-menu]');
  
  function ativaMenu(event){
    event.currentTarget.classList.toggle('viraBotaoMenu');
    menuLista.classList.toggle('ativa-menu')
  }
  
  botaoMenu.addEventListener('click', ativaMenu);


}

export {menuLista}
