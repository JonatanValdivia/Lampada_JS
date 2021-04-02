'use strict'
//Eventos para o mouse:
const lampada =  window.document.getElementById('lampada');;
lampada.addEventListener('mouseenter', ligar);
lampada.addEventListener('mouseout', desligar);
lampada.addEventListener('dblclick', quebrar);

function isLampBroken(){
  return lampada.src.indexOf('quebrada') > -1;
}
function ligar(){
  if( !isLampBroken()){ 
    lampada.src = './ligada.jpg';
  }
}

function desligar(){
  if( !isLampBroken()){ 
    lampada.src = './desligada.jpg';
  }
}

function quebrar(){
  lampada.src = './quebrada.jpg';
  /*
  lampadaQuebrada.removeEventListener('mouseenter', ligar, false);
  lampadaQuebrada.removeEventListener('mouseout', desligar, false)
  ;*/
}
//Eventos para os botões:
  const btnLigar = window.document.getElementById('ligar')
  btnLigar.addEventListener('click', ligar);
  const btnDesligar = window.document.getElementById('desligar')
  btnDesligar.addEventListener('click', desligar);

//Eventos para touch
const touch = window.document.getElementById('lampada');
touch.addEventListener('touchstart',toqueLigar, false)
touch.addEventListener('touchmove',  toqueQuebrar, false)

function toqueQuebrar(){
  touch.src = './quebrada.jpg'
}

function toqueLigar(){
  if(!isLampBroken){
    touch.src = './ligada.jpg';
  }
}