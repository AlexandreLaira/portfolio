function popUp(){

  const fundo = document.getElementById('fundo');
  const nome = document.querySelector('.apresentacao h1');
  const popup = document.querySelector('.popup');
  // const popupP = document.querySelector('.popup p');
  const sobre = document.querySelector('.links');
  const botaoPop = document.querySelector('.botao-popup');

  function abrePopup(event){
    popup.classList.toggle('ativo');
    // popupH1.classList.toggle('ativo');
    // popupP.classList.toggle('ativo');
    fundo.classList.toggle('fundo');

  }


  nome.addEventListener('click', abrePopup);
  sobre.addEventListener('click', abrePopup);
  botaoPop.addEventListener('click', abrePopup);

}
popUp();


const menu = document.querySelector('.header span');
let lista = document.querySelector('.lista-header');

function abreDisplay(event){

  lista.classList.toggle('ativo');

}

menu.addEventListener('click', abreDisplay);


let descExperiencia = document.querySelectorAll('.empresa-experiencia').forEach((event) => {
  event.addEventListener('click', ()=> {
    event.classList.toggle('ativo');
  });
})
