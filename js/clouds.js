(function clouds(){
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');
  var text = document.createTextNode('1');

  appendHere.setAttribute('class','sky clouds80x');

  appendMe.setAttribute('class','sun');
  appendHere.appendChild(appendMe);

  appendMe = document.createElement('div');
  appendMe.setAttribute('class','cloud1');
  appendMe.appendChild(text);
  appendHere.appendChild(appendMe);

  appendMe = document.createElement('div');
  appendMe.setAttribute('class','cloud2');
  appendHere.appendChild(appendMe);

  appendMe = document.createElement('div');
  appendMe.setAttribute('class','cloud3');
  appendHere.appendChild(appendMe);

}());
