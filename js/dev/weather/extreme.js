import rain from './rain';
import tornado from './tornado';

export default function extreme(id){
  var appendHere = document.querySelector('.sky');
  var appendMe;

  switch (id) {
    case 900: {
      tornado();
      break;
    }
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
        el.style.animationName += ', wind';
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

function other(id) {
  var appendHere = document.querySelector('.sky');
  var appendMe;

  switch (id) {
    case 951: {
      appendHere.classList.add('calm');
    }
    case 952: {
      appendHere.classList.add('light-breeze');
    }
    case 953 {
      appendHere.classList.add('gentle-breeze');
    }
    case 954 {
      appendHere.classList.add('moderate-breeze');
    }
    case 955 {
      appendHere.classList.add('fresh-breeze');
    }
    case 956 {
      appendHere.classList.add('strong-breeze');
    }
    case 957 {
      appendHere.classList.add('high-wind');
    }
    case 958 {
      appendHere.classList.add('gale');
    }
    case 959 {
      appendHere.classList.add('severe-gale');
    }
    case 960 {
      appendHere.classList.add('storm');
    }
    case 961 {
      appendHere.classList.add('violent-storm');
    }
    case 962 {
      rain('hurricane', 250, -40, 125);
      //add wind
      var drops = document.querySelectorAll('.rain-drop');
      drops.forEach(function(el) {
        el.style.animationName += ', wind';
      });
      break;
    }
  }
}
