
const nome = document.querySelector('.apresentacao h1');
const popup = document.querySelector('.popup');

function abrePopup(event){
  popup.classList.toggle('ativo');
}


nome.addEventListener('click', abrePopup);



