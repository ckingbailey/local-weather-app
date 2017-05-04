export default function clouds(){
  var layers = ['foreground', 'midground', 'background'];
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');

  appendHere.classList.add('clouds8xx');

  for(let i=0; i<layers.length; i++){
    appendHere = document.querySelector('.' + layers[i]);

    appendMe.classList.add('cloud' + (i + 1));
    appendHere.appendChild(appendMe);

    appendMe = document.createElement('div');
  }

  appendMe.classList.add('sun');
  appendHere.insertAdjacentElement('afterbegin', appendMe);

  appendHere = appendMe;
  appendMe = document.createElement('div');
  appendMe.classList.add('ray-box');
  appendHere.appendChild(appendMe);

  appendHere = appendMe;

  for(let i = 1; i <= 10; i++) {
    appendMe = document.createElement('div');
    appendMe.classList.add('ray');
    appendMe.classList.add('ray' + i);
    appendHere.appendChild(appendMe);
  }

  function cloudLoop(element){
    var w = window.getComputedStyle(element).width.match(/^(\d+)(\D+)/);
    element.style.left = (-w[1] + 2) + w[2];
  }

  for(let i = 0; i<layers.length; i++){
    appendMe = document.querySelector('.cloud' + (i +1));
    appendMe.addEventListener('animationiteration', cloudLoop(appendMe));
  }
}
