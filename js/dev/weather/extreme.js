import rain from './rain';

export default function extreme(id){
  var appendHere = document.querySelector('.sky');
  var appendMe;

  switch (id) {
    case 900:
      appendHere.classList.add('tornado900');
      break;
    case 901:
      appendHere.classList.add('tropical-storm901');
      break;
    case 902:
      hurricane();
      break;
    case 903:
      appendHere.classList.add('cold903');
      break;
    case 904:
      appendHere.classList.add('hot904');
      break;
    case 905:
      appendHere.classList.add('windy905');
      break;
    case 906:
      appendHere.classList.add('hail906');
      break;
    default:
      break;
  }

  function hurricane() {
    rain();
    appendHere.classList.add('hurricane902', 'rain5xx');
  }
}
