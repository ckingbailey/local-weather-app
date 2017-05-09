export default function clouds(){
  var layers = ['foreground', 'midground', 'background'];
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');

  appendHere.classList.add('clouds8xx');

//make clouds in css
  for(let i=0; i<layers.length; i++){
    appendHere = document.querySelector('.' + layers[i]);

    appendMe.classList.add('cloud' + (i + 1));
    appendHere.appendChild(appendMe);

    appendMe.addEventListener('animationiteration', function() {
      var w = window.getComputedStyle(this).width.match(/(\d+)(\D+)/);
      console.log(w);
      this.style.left = -(parseInt(w[1], 10) + (parseInt(w[1], 10) * 0.05)) + w[2];
    }, {once: true});

    appendMe = document.createElement('div');
  }

//create the sun in css
  appendMe.classList.add('sun');
  appendHere.insertAdjacentElement('afterbegin', appendMe);

  appendHere = appendMe;
  appendMe = document.createElement('div');
  appendMe.classList.add('ray-box');
  appendHere.appendChild(appendMe);

  appendHere = appendMe;

//make rays of sun in css
  for(let i = 1; i <= 10; i++) {
    appendMe = document.createElement('div');
    appendMe.classList.add('ray');
    appendMe.classList.add('ray' + i);
    appendHere.appendChild(appendMe);
  }

//make clouds start over from left side of screen on animationiteration
/*  for(let i = 0; i<layers.length; i++){
    appendMe = document.querySelector('.cloud' + (i + 1));
    console.log(appendMe);
    appendMe.addEventListener('animationiteration', function cloudLoop(){
      var w = window.getComputedStyle(appendMe).width.match(/^(\d+)(\D+)/);
      console.log(w);
      appendMe.style.left = '-10px';
    });
  }*/
}
