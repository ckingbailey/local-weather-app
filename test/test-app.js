/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = randomInt;
/* harmony export (immutable) */ __webpack_exports__["b"] = randomFlt;
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFlt(min, max) {
  return Math.random() * (max - min) + min;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rain;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__ = __webpack_require__(0);


function rain(weatherType, number, left, right){
  var dropsCount = number;
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');
  var layers = ['foreground', 'midground', 'background'];

  appendHere.classList.add(weatherType);

  for(let i=0; i<layers.length; i++){

    appendHere = document.querySelector('.' + layers[i]);

    for(let j=1; j<dropsCount; j++){
      var dropTop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["a" /* default */])(-120,99) + 'vh';
      var dropRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["a" /* default */])(left,right) + 'vw';
      var anim = 'rain-fall-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["a" /* default */])(1,3);

      appendMe = document.createElement('div');
      appendMe.classList.add('rain-drop');
      appendMe.style.left = dropRight;
      appendMe.style.top = dropTop;
      appendMe.style.animationName += anim;
      appendHere.appendChild(appendMe);
    }
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clear;
function clear(){
  var layers = ['foreground', 'midground', 'background'];
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');

  appendHere.classList.add('clear800');
  appendHere = document.querySelector('.' + layers[2]);

  appendMe.classList.add('sun');
  appendHere.appendChild(appendMe);

  appendHere = appendMe;
  appendMe = document.createElement('div');
  appendMe.classList.add('ray-box');
  appendHere.appendChild(appendMe);

  appendHere = appendMe;

  for(let i = 1; i <= 10; i++) {
    appendMe = document.createElement('div');
    appendMe.classList.add('ray');
    appendMe.classList.add('ray' + i);
    appendHere.appendChild(appendMe);
  }


}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clouds;
function clouds(){
  var layers = ['foreground', 'midground', 'background'];
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');

  appendHere.classList.add('clouds8xx');

//make clouds in css
  for(let i=0; i<layers.length; i++){
    appendHere = document.querySelector('.' + layers[i]);

    appendMe.classList.add('cloud' + (i + 1));
    appendHere.appendChild(appendMe);

    appendMe.addEventListener('animationiteration', function() {
      var w = window.getComputedStyle(this).width.match(/(\d+)(\D+)/);
      
      this.style.left = -(parseInt(w[1], 10) + (parseInt(w[1], 10) * 0.05)) + w[2];
    }, {once: true});

    appendMe = document.createElement('div');
  }

//create the sun in css
  appendMe.classList.add('sun');
  appendHere.insertAdjacentElement('afterbegin', appendMe);

  appendHere = appendMe;
  appendMe = document.createElement('div');
  appendMe.classList.add('ray-box');
  appendHere.appendChild(appendMe);

  appendHere = appendMe;

//make rays of sun in css
  for(let i = 1; i <= 10; i++) {
    appendMe = document.createElement('div');
    appendMe.classList.add('ray');
    appendMe.classList.add('ray' + i);
    appendHere.appendChild(appendMe);
  }

//make clouds start over from left side of screen on animationiteration
/*  for(let i = 0; i<layers.length; i++){
    appendMe = document.querySelector('.cloud' + (i + 1));
    console.log(appendMe);
    appendMe.addEventListener('animationiteration', function cloudLoop(){
      var w = window.getComputedStyle(appendMe).width.match(/^(\d+)(\D+)/);
      console.log(w);
      appendMe.style.left = '-10px';
    });
  }*/
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__ = __webpack_require__(0);


function drizzle(){
  var dropsCount = 50;
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');
  var layers = ['foreground', 'background', 'midground'];

  appendHere.classList.add('drizzle3xx');

  for(let i=0; i<layers.length; i++){

    appendHere = document.querySelector('.' + layers[i]);

    for(let j=0; j<dropsCount; j++){
      var dropTop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["a" /* default */])(-120,129) + 'vh';
      var dropRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["a" /* default */])(0,100) + 'vw';
      var anim = 'drizzle-fall-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["a" /* default */])(1,3);

      appendMe = document.createElement('div');
      appendMe.classList.add('rain-drop');
      appendMe.style.left = dropRight;
      appendMe.style.top = dropTop;
      appendMe.style.animationName = anim;
      appendHere.appendChild(appendMe);
    }
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extreme;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rain__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tornado__ = __webpack_require__(9);



function extreme(id){
  var appendHere = document.querySelector('.sky');
  var appendMe;

  switch (id) {
    case 900: {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tornado__["a" /* default */])();
      break;
    }
    case 901: { //'tropical-storm'
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rain__["a" /* default */])('hurricane', 250, -40, 125);
      var drops = document.querySelectorAll('.rain-drop');
      console.log(drops);
      drops.forEach(function(el) {
        el.style.animationName += ', wind-1';
      });
      break;
    }
    case 902: {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rain__["a" /* default */])('hurricane', 250, -40, 125);
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
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rain__["a" /* default */])('hail', 180, 0, 100);
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
    case 953: {
      appendHere.classList.add('gentle-breeze');
    }
    case 954: {
      appendHere.classList.add('moderate-breeze');
    }
    case 955: {
      appendHere.classList.add('fresh-breeze');
    }
    case 956: {
      appendHere.classList.add('strong-breeze');
    }
    case 957: {
      appendHere.classList.add('high-wind');
    }
    case 958: {
      appendHere.classList.add('gale');
    }
    case 959: {
      appendHere.classList.add('severe-gale');
    }
    case 960: {
      appendHere.classList.add('storm');
    }
    case 961: {
      appendHere.classList.add('violent-storm');
    }
    case 962: {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rain__["a" /* default */])('hurricane', 250, -40, 125);
      //add wind
      var drops = document.querySelectorAll('.rain-drop');
      drops.forEach(function(el) {
        el.style.animationName += ', wind';
      });
      break;
    }
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fog;
function fog() {
  var appendMe = document.createElement('div');
  var appendHere = document.querySelector('.sky');
  var layers = ['sub', 'background','midground','foreground','sup'];

  appendHere.classList.add('fog7xx');

  for(let i=0; i<layers.length; i++){
    if(!document.querySelector('.' + layers[i])){
      appendMe.classList.add(layers[i]);

      if(i == 0){
        appendHere.insertAdjacentElement('afterbegin', appendMe);
      }

      else {
      appendHere.appendChild(appendMe);
      }
      
      appendHere = appendMe;
    }

    else appendHere = document.querySelector('.' + layers[i]);

    for(let j=1; j<=3; j++){
      appendMe = document.createElement('div');
      appendMe.classList.add('fog-' + j);
      appendHere.appendChild(appendMe);
    }
    appendMe = document.createElement('div');
    appendHere = document.querySelector('.sky');
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = snow;
function snow(){
  var dropsCount = 70;
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');
  var layers = ['foreground', 'midground', 'background'];

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomFlt(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  appendHere.classList.add('snow6xx');

  for(var i=0; i<layers.length; i++){

    appendHere = document.querySelector('.' + layers[i]);

    for(let j=1; j<dropsCount; j++){
      var flakeTop = randomInt(-1,-9) + 'vh';
      var flakeRight = randomFlt(0,100) + 'vw';
      var animDelay = randomFlt(0 + i/4,10 + i) + 's';
      //var driftTime = randomFlt(3,6) + 's';

      appendMe = document.createElement('div');
      appendMe.className = 'snow-flake';
      appendMe.style.left = flakeRight;
      appendMe.style.top = flakeTop;
      appendMe.style.animationDelay = animDelay;
      appendHere.appendChild(appendMe);
    }
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = thunder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__ = __webpack_require__(0);


function thunder() {

var appendHere = document.querySelector('.sky');
var appendMe = document.createElement('div');
var b, w, l, viewW;
var styles;

appendHere.classList.add('thunder2xx');

appendMe = document.createElement('div');

//make cloud puffs
cloudPuffs('.foreground');

cloudPuffs('.background');

//make lightning (static for the mo')
appendMe = document.createElement('div');
appendMe.classList.add('lightning');
appendHere = document.querySelector('.midground');

appendHere.appendChild(appendMe);

//clouds puffs maker function
function cloudPuffs(selector) {
  l = -1;
  appendHere = document.querySelector(selector);

  for(viewW = 100; viewW > 0; viewW -= (w - 1)){
    appendMe = document.createElement('div');

    appendMe.classList += 'puff';

//what ranges am I trying to acheive here?
//find a way to use randomInt() instead
    w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["a" /* default */])(3,9);
    b = -(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["b" /* randomFlt */])(1,1.125));

    styles = 'width: ' + w + 'vw; left: ' + l + 'vw; bottom: ' + b + 'rem';
    appendMe.setAttribute('style', styles);

    appendHere.appendChild(appendMe);

    l += w - 1;
  }
}

function moveLightning(){

  appendMe.style.left = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["b" /* randomFlt */])(-20, 80) + 'vw';

};

appendMe.addEventListener('animationiteration', moveLightning);

}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tornado;
function tornado() {

  var appendHere = document.querySelector('.sky');
  var partCt = +(window.getComputedStyle(document.querySelector('.tornado')).height.match(/\d+/))/10;
  var layerCt = 5;
  var b, c, l, appendMe, comSty, offset, rate, run;

  appendHere.classList.add('tornado');

  for(let i = 0; i < layerCt; i++) {
    appendMe = document.createElement('div');
    appendMe.classList.add('layer', 'layer-' + (i+1));
    appendHere.appendChild(appendMe);
  }

  appendMe = document.querySelector('.layer-1');

  //length of run of slope = the difference between the width of layers 1 & 2
  run = window.getComputedStyle(document.querySelector('.layer-2')).width.match(/\d+\.*\d*/)[0] - window.getComputedStyle(appendMe).width.match(/\d+\.*\d*/)[0];

  offset = window.getComputedStyle(appendMe).width.match(/\d+\.*\d*/)[0] - run;

  //rise/run = height of layer element / length of run of slope
  rate = window.getComputedStyle(appendMe).height.match(/\d+\.*\d*/)[0] / run;

  function randomFlt(min, max) {
    return Math.random() * (max - min) + min;
  }

  //grab layers and layer styles to contain particles
  for(let i = 0; i < layers.length; i++) {
    appendHere = document.querySelector('.layer-' + (i+1));
    comSty = window.getComputedStyle(appendHere);

    comSty = {
      wd: comSty.width.match(/(\d+\.*\d*)(\D+)/),
      ht: comSty.height.match(/(\d+\.*\d*)(\D+)/)
    };

    comSty.wd[1] = +(comSty.wd[1]);
    comSty.ht[1] = +(comSty.ht[1]);

  //create particles within current layer
    for(let j = 0; j < partCt * comSty.wd[1] / comSty.ht[1]; j++) {
      b = randomFlt(-1,20);
      c = (comSty.wd[1] - ((comSty.wd[1] - l) * 2))/2;

      appendMe.classList.add('particle');
      appendMe.style.bottom = b + 'vh';
      //console.log('bottom,', window.getComputedStyle(appendMe));
      //b = window.getComputedStyle(appendMe).bottom.match(/\d+\.*\d*/)[0];
      l = randomFlt(b/rate + (comSty.wd[1] - run), b/rate + comSty.wd[1]);
      appendMe.style.left = l + comSty.wd[2];
      appendMe.style.height = randomFlt(.1,.25) + 'rem';
      appendMe.style.width = randomFlt(.15,.35) + 'rem';
      appendMe.style.transformOrigin = -l + 'px';

      appendMe.setAttribute('c', c);

      if(c <= 0) {
        appendMe.style.animationDuration = randomFlt((c * -1) ** .02, (c* -1) ** .1) + 's';
      }
      else appendMe.style.animationDuration = randomFlt(c ** .01, c ** .08) + 's';

      //appendMe.style.backgroundColor = '#664';
      //appendMe.style.transform = 'rotateY(' + randomFlt(0,360) + 'deg)';
      appendHere.appendChild(appendMe);
      appendMe = document.createElement('div');
    }

  }

  document.querySelectorAll('.particle').forEach(function(el) {
    el.style.opacity = 1;
  });
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = animateWeather;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clear__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clouds__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drizzle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extreme__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fog__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rain__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__snow__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__thunder__ = __webpack_require__(8);











function animateWeather(weatherId) {
  if (weatherId >= 200 && weatherId < 300) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__thunder__["a" /* default */])();
  }
  else if (weatherId >= 300 && weatherId < 400) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__rain__["a" /* default */])('drizzle', 50, 0, 100);
  }
  else if (weatherId >= 500 && weatherId < 600) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__rain__["a" /* default */])('rain', 200, 0, 100);
  }
  else if (weatherId >= 600 && weatherId < 700) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__snow__["a" /* default */])();
  }
  else if (weatherId >= 700 && weatherId < 800) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__fog__["a" /* default */])();
  }
  else if (weatherId === 800) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__clear__["a" /* default */])();
  }
  else if (weatherId > 800 && weatherId < 900) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__clouds__["a" /* default */])();
  }
  else if (weatherId >= 900 && weatherId <= 950) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__extreme__["a" /* default */])(weatherId);
  }
  else if (weatherId > 950 && weatherId < 1000) {
    other();
  }
  else __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__clear__["a" /* default */])();
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_dev_weather_animateWeather__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_dev_weather_clouds__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_dev_weather_clear__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_dev_weather_drizzle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_dev_weather_extreme__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_dev_weather_fog__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_dev_weather_rain__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_dev_weather_snow__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_dev_weather_thunder__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_dev_weather_tornado__ = __webpack_require__(9);











var weatherTypes = {
  thunder: 200,
  drizzle: 300,
  rain: 500,
  snow: 600,
  fog: 700,
  clear: 800,
  clouds: 801,
  extreme: {
    tornado: 900,
    tropicalStorm: 901,
    hurricane: 902,
    cold: 903,
    hot: 904,
    windy: 905,
    hail: 906
  },
  other: 951
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__js_dev_weather_animateWeather__["a" /* default */])(weatherTypes.extreme.tornado);


/***/ })
/******/ ]);