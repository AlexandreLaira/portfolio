
function asideScript(){

  /* 
  
  Oculta o label 
  quando o input não estiver checked 

  */

  const aside_input = document.querySelectorAll('.guia input[type=radio]');
  const aside_label = document.querySelectorAll('.guia label');


  function colocaDisplay(event, index){

      aside_label.forEach((label) => {
        label.classList.add('semcheck');
      });
  
      aside_label[index].classList.remove('semcheck');
      aside_label[index].classList.add('checado');  
  
  }

  aside_input.forEach((input , index) => {
    input.addEventListener('change', ()=>{
      colocaDisplay(event, index)
    });
  });


}

function scrollSide(){


  /*
    Adiciona checked nos inputs correspondentes
    de acordo com a atulra da tela

  */

  // const topo = document.documentElement;
  const input = document.querySelectorAll('.guia input[type=radio]');
  const secoes = document.querySelectorAll('[data-secao]');
  const label2 = document.querySelectorAll('.guia label');


  
  function colocaDisplay(event, index){

    label2.forEach((label) => {
      label.classList.add('semcheck');
    });

    label2[index].classList.remove('semcheck');
    label2[index].classList.add('checado');  

}


  function pegaTopo(){
    const topoScroll = window.scrollY;
    mudaInput(topoScroll)
  }

  function mudaInput(top){

    if(top < secoes[1].offsetTop - 100){
      input[0].checked = true;
      colocaDisplay(input[0], 0)

    }else if(top > secoes[1].offsetTop -100 && top < secoes[2].offsetTop - 100){
      input[1].checked = true;
      colocaDisplay(input[1], 1)

    }
    else if(top > secoes[2].offsetTop -100 && top < secoes[3].offsetTop - 100){
      input[2].checked = true;
      colocaDisplay(input[2], 2)

    }
    else if(top > secoes[3].offsetTop -100 && top < 2900){
      input[3].checked = true;
      colocaDisplay(input[3], 3)

    }else if (top > 3000){
      input[4].checked = true;
      colocaDisplay(input[4], 4)

    }

  }




  addEventListener('scroll', pegaTopo);

  }




export {asideScript, scrollSide};

