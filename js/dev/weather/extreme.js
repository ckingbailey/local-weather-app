import clouds from './clouds';
import rain from './rain';
import thunder from './thunder';
import tornado from './tornado';
import windy from './windy';

export default function extreme(id){
  var appendHere = document.querySelector('.sky');
  var appendMe;

  switch (id) {
    case 900: {
      tornado();
      break;
    } //done
    case 901: { //'tropical-storm'
      rain('hurricane', 250, -40, 125);
      var drops = document.querySelectorAll('.rain-drop');
      console.log(drops);
      drops.forEach(function(el) {
        el.style.animationName += ', wind-1';
      });
      break;
    } //done
    case 902: {
      rain('hurricane', 250, -40, 125);
      //add wind
      var drops = document.querySelectorAll('.rain-drop');
      drops.forEach(function(el) {
        el.style.animationName += ', wind';
      });
      break;
    } //done
    case 903: {
      appendHere.classList.add('cold903');
      break;
    }//done
    case 904: {
      appendHere.classList.add('hot904');
      break;
    }//done
    case 905: { //'windy'
      //clouds();
      //document.querySelectorAll('[class^=cloud]').forEach(function(cloud){
        //cloud.style.animationDuration = +(window.getComputedStyle(cloud).animationDuration.match(/\d+\.*\d*/)) / 12 + 's';
      //});
      windy(10);
      break;
    }
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
    case 952: {  //'light-breeze'
      windy(3);
    }
    case 953: { // 'gentle-breeze'
      windy(3);
    }
    case 954: { // 'moderate-breeze'
      windy(5);
    }
    case 955: { // 'fresh-breeze'
      windy(5);
    }
    case 956: { // 'strong-breeze'
      windy(7);
    }
    case 957: { // 'high-wind'
      windy(15);
    }
    case 958: { // 'gale'
      windy(15);
    }
    case 959: { // 'sever-gale'
      windy(20);
    }
    case 960: {
      thunder();
    }
    case 961: {
      appendHere.classList.add('violent-storm');
    }
    case 962: {
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
