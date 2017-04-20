export default function fog() {
  var appendMe = document.createElement('div');
  var appendHere = document.querySelector('.sky');
  var layers = ['sub', 'background','midground','foreground','sup'];

  appendHere.classList.add('fog7xx');

  for(let i=0; i<layers.length; i++){
    if(!document.querySelector('.' + layers[i])){
      console.log(document.querySelector('.' + layers[i]));
      appendMe.classList.add(layers[i]);
      console.log(document.querySelector('.' + layers[i]));
      console.log(appendMe);
      appendHere.appendChild(appendMe);
      appendHere = appendMe;
    }

    else appendHere = document.querySelector(layers[i]);

    for(let j=1; j<=3; j++){
      console.log('j =', j);
      console.log(appendHere);
      appendMe = document.createElement('div');
      appendMe.classList.add('fog-' + j);
      appendHere.appendChild(appendMe);
    }
    appendMe = document.createElement('div');
    appendHere = document.querySelector('.sky');
    console.log('layer successfully built', appendHere);
  }
}
