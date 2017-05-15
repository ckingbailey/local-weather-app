import rain from './rain';

export default function extreme(id){
  var appendHere = document.querySelector('.sky');
  var appendMe;

  switch (id) {
    case 900:
      appendHere.classList.add('tornado900');
      break;
    case 901: { //'tropical-storm'
      rain('hurricane', 250, -40, 125);
      var drops = document.querySelectorAll('.rain-drop');
      console.log(drops);
      drops.forEach(function(el) {
        el.style.animationName += ', wind-1';
      });
      break;
    }
    case 902: {
      rain('hurricane', 250, -40, 125);
      //add wind
      var drops = document.querySelectorAll('.rain-drop');
      drops.forEach(function(el) {
        el.style.animationName += ', wind-1';
      });
      break;
    }
    case 903:
      appendHere.classList.add('cold903');
      break;
    case 904:
      appendHere.classList.add('hot904');
      break;
    case 905:
      appendHere.classList.add('windy905');
      break;
    case 906: {
      rain('hail', 180, 0, 100);
      break;
    }
    default:
      break;
  }
}
