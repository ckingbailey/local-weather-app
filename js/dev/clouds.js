export default function clouds(){
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');

  appendHere.classList += ' clouds');

  appendMe.classList += 'sun';
  appendHere.appendChild(appendMe);

  appendMe = document.createElement('div');
  appendMe.classList += ' cloud1';
  appendHere.appendChild(appendMe);

  appendMe = document.createElement('div');
  appendMe.classList += ' cloud2';
  appendHere.appendChild(appendMe);

  appendMe = document.createElement('div');
  appendMe.classList += ' cloud3';
  appendHere.appendChild(appendMe);

}
