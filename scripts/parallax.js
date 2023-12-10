

export function parallaxMain(){

  const titulocentral = document.querySelector('.principal-titulo h1');
  const paragrafoCentral = document.querySelector('.principal-titulo h2');
  const principalTitulo = document.querySelector('.principal-titulo');
  const botaoIncial = document.querySelector('#botao'); 
  const nome = document.querySelector('.principal p');
  const menu = document.querySelector('.principal ul');

  setTimeout(()=>{
    nome.style.opacity = 1;
    menu.style.opacity = 1;
    principalTitulo.style.opacity = 1;
    
  }, 300)

  // if(window.matchMedia("(max-width: 600px)").matches){
  //   moveUp();
  // }

  

  function moveUp(e){
   const topDistance = e.currentTarget.scrollY;
   const alturaTelaIncial = principalTitulo.clientHeight;

   titulocentral.style.top = topDistance * -0.73 + 'px';
   titulocentral.style.opacity = 1 - (topDistance * 0.003);

   paragrafoCentral.style.top = topDistance * -1.03 + 'px';
   paragrafoCentral.style.opacity = 1 - (topDistance * 0.003);

   botaoIncial.style.top = topDistance * -1.03 + 'px';
   botaoIncial.style.opacity = 1 - (topDistance * 0.003);


    const imagem = document.querySelector('.imagem img');
    const conteudo = document.querySelector('.conteudo-sobre');

    if(topDistance < (alturaTelaIncial + 100)){

      imagem.style.left = -150 + ((topDistance) * 0.3) + 'px';
      conteudo.style.right = -300 + ((topDistance) * 0.3) + 'px';
      imagem.style.opacity = 0 + (topDistance * 0.002);
      conteudo.style.opacity = 0 + (topDistance * 0.002);
    }


  }
  
  window.addEventListener('scroll', moveUp)
}