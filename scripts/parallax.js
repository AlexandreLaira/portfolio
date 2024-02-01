export function parallaxMain() {
  const titulocentral = document.querySelector('.principal-titulo h1');
  const paragrafoCentral = document.querySelector('.principal-titulo h2');
  const principalTitulo = document.querySelector('.principal-titulo');
  const botaoIncial = document.querySelector('#botao');
  const nome = document.querySelector('.principal p');
  const menu = document.querySelector('.principal ul');
  function moveUp(e) {
    const topDistance = e.currentTarget.scrollY;
    const alturaTelaIncial = principalTitulo.clientHeight;
    titulocentral.style.top = -0.73 * topDistance + 'px';
    titulocentral.style.opacity = 1 - 0.003 * topDistance;
    paragrafoCentral.style.top = -1.03 * topDistance + 'px';
    paragrafoCentral.style.opacity = 1 - 0.003 * topDistance;
    botaoIncial.style.top = -1.03 * topDistance + 'px';
    botaoIncial.style.opacity = 1 - 0.003 * topDistance;
    const imagem = document.querySelector('.imagem img');
    const conteudo = document.querySelector('.conteudo-sobre');
    if (topDistance < alturaTelaIncial + 100) {
      imagem.style.left = 0.3 * topDistance - 150 + 'px';
      conteudo.style.right = 0.3 * topDistance - 350 + 'px';
      imagem.style.opacity = 0 + 0.002 * topDistance;
      conteudo.style.opacity = 0 + 0.002 * topDistance;
    }
  }
  setTimeout(() => {
    nome.style.opacity = 1;
    menu.style.opacity = 1;
    principalTitulo.style.opacity = 1;
  }, 300);
  window.addEventListener('scroll', moveUp);
}

function devTitle() {
  const titulo = document.querySelector('.principal-titulo h1');

  function handleMove(e) {
    let x = e.clientX;
    let y = e.clientY;
  }

  window.addEventListener('mousemove', handleMove);
}

devTitle();
