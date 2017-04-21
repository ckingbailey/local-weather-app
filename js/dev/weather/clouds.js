export default function clouds(){
  var layers = ['foreground', 'midground', 'background'];
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');

  appendHere.classList.add('clouds8xx');
  
  for(let i=0; i<layers.length; i++){
    appendHere = document.querySelector('.' + layers[i]);
    
    appendMe.className.add('cloud' + i);
    appendHere.appendChild(appendMe);
    
    appendMe = document.createElement('div');
  }

  appendMe.classList.add('sun');
  appendHere.appendChild(appendMe);
}
