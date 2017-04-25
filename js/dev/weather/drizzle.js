export default function drizzle(){
  var dropsCount = 120;
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  appendHere.classList.add('drizzle3xx');

  for(let i=1; i<dropsCount; i++){
    var dropTop = randomInt(-120,129) + 'vh';
    var dropRight = randomInt(0,100) + 'vw';

    appendMe = document.createElement('div');
    appendMe.setAttribute('class', 'rain-drop');
    appendMe.style.left = dropRight;
    appendMe.style.top = dropTop;
    appendHere.appendChild(appendMe);
  }
}
