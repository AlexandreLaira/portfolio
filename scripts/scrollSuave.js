

function scrollSuave(){

  const secao = document.querySelectorAll('a[href^="#"]');

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 600;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

function distanciaDoTopo(elemento){
  const secao = elemento.getAttribute("href");
  return document.querySelector(secao).offsetTop;
}

function scrollSuave(event){
  event.preventDefault();
  const distancia = distanciaDoTopo(event.target);
  smoothScrollTo(0, distancia);
}

secao.forEach((links) => {
  links.addEventListener('click', scrollSuave);
});
}

export {scrollSuave}