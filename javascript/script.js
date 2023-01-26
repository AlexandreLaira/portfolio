function popUp(){
  const nome = document.querySelector('.apresentacao h1');
  const popup = document.querySelector('.popup');
  const popupH4 = document.querySelector('.popup h4');
  const popupP = document.querySelector('.popup p');

  const sobre = document.querySelector('.links');

  function abrePopup(event){
    popup.classList.toggle('ativo');
    popupH1.classList.toggle('ativo');
    popupP.classList.toggle('ativo');

  }


  nome.addEventListener('click', abrePopup);
  sobre.addEventListener('click', abrePopup);

}
popUp();


const menu = document.querySelector('.header span');
let lista = document.querySelector('.lista-header');

function abreDisplay(event){

  lista.classList.toggle('ativo');

}

menu.addEventListener('click', abreDisplay);


