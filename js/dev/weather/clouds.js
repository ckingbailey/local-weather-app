export default function clouds(){
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');

  appendHere.classList.add('clouds8xx');

  appendMe.classList.add('sun');
  appendHere.appendChild(appendMe);

  appendMe = document.createElement('div');
  appendMe.classList.add('cloud1');
  appendHere.appendChild(appendMe);

  appendMe = document.createElement('div');
  appendMe.classList.add('cloud2');
  appendHere.appendChild(appendMe);

  appendMe = document.createElement('div');
  appendMe.classList.add('cloud3');
  appendHere.appendChild(appendMe);

}
