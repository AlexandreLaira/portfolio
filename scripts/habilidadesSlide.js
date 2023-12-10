

function habilidadeSlide(){
  
  function addAnimation(){
    const scrollers = document.querySelectorAll('.scroller');
    scrollers.forEach((scroller) =>{
      scroller.setAttribute("data-animated", true);
      
      const lista = scroller.querySelector('.lista');
      const listaContent = Array.from(lista.children);
      
      listaContent.forEach((itemLista) =>{
        const duplicarItem = itemLista.cloneNode(true);
        duplicarItem.setAttribute('aria-hidden', true);
        lista.appendChild(duplicarItem);
      })
    })
  }
  
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
  }
  

}

export {habilidadeSlide};

