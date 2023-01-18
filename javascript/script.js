
const nome = document.querySelector('.apresentacao h1');
const popup = document.querySelector('.popup');
const popupH4 = document.querySelector('.popup h4');
const popupP = document.querySelector('.popup p');

function abrePopup(event){
  popup.classList.toggle('ativo');
  popupH1.classList.toggle('ativo');
  popupP.classList.toggle('ativo');

}


nome.addEventListener('click', abrePopup);



