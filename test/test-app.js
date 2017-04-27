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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

  for(let i = 0; i < 10; i++) {
    appendMe = document.createElement('div');
    appendMe.classList.add('ray');
    appendMe.classList.add('ray' + (i + 1));
    appendHere.appendChild(appendMe);
  }


}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clouds;
function clouds(){
  var layers = ['foreground', 'midground', 'background'];
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');

  appendHere.classList.add('clouds8xx');

  for(let i=0; i<layers.length; i++){
    appendHere = document.querySelector('.' + layers[i]);

    appendMe.classList.add('cloud' + (i + 1));
    appendHere.appendChild(appendMe);

    appendMe = document.createElement('div');
  }

  appendMe.classList.add('sun');
  appendHere.insertAdjacentElement('afterbegin', appendMe);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drizzle;
function drizzle(){
  var dropsCount = 120;
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  appendHere.classList.add('drizzle3xx');

  for(let i=1; i<dropsCount; i++){
    var dropTop = randomInt(-120,129) + 'vh';
    var dropRight = randomInt(0,100) + 'vw';

    appendMe = document.createElement('div');
    appendMe.setAttribute('class', 'rain-drop');
    appendMe.style.left = dropRight;
    appendMe.style.top = dropTop;
    appendHere.appendChild(appendMe);
  }
}


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rain;

function rain(){
  var dropsCount = 200;
  var appendHere = document.querySelector('.sky');
  var appendMe = document.createElement('div');
  var layers = ['foreground', 'midground', 'background'];

  appendHere.classList.add('rain5xx');

  for(let i=0; i<layers.length; i++){

    appendHere = document.querySelector('.' + layers[i]);

    for(let j=1; j<dropsCount; j++){
      var dropTop = randomInt(-120,99) + 'vh';
      var dropRight = randomInt(0,100) + 'vw';
      var anim = 'rain-fall-' + randomInt(1,3);

      appendMe = document.createElement('div');
      appendMe.className = 'rain-drop';
      appendMe.style.left = dropRight;
      appendMe.style.top = dropTop;
      appendMe.style.animationName = anim;
      appendHere.appendChild(appendMe);
    }
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFlt(min, max) {
  return Math.random() * (max - min + 1) + min;
}


/***/ }),
/* 5 */
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
      appendMe.style.animationDuration = 12 + i/2 + 's';
      appendHere.appendChild(appendMe);
    }
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = thunder;
function thunder() {

var appendHere = document.querySelector('.sky');
var appendMe = document.createElement('div');
var b, w, l, viewW;
var styles;

appendHere.classList += ' thunder2xx';

appendMe = document.createElement('div');

//make cloud puffs
cloudPuffs('.foreground');

cloudPuffs('.midground');

//make lightning (static for the mo')
appendMe = document.createElement('div');
appendMe.classList.add('lightning');

appendHere.appendChild(appendMe);

//clouds puffs maker function
function cloudPuffs(selector) {
  l = -1;
  appendHere = document.querySelector(selector);

  for(viewW = 100; viewW > 0; viewW -= (w - 1)){
    appendMe = document.createElement('div');

    appendMe.classList += 'puff';

    w = (Math.floor(Math.random() * (36 - 12) + 12))/4;
    b = -1 - (Math.floor(Math.random() * 2))/8;

    styles = 'width: ' + w + 'vw; left: ' + l + 'vw; bottom: ' + b + 'rem';
    appendMe.setAttribute('style', styles);

    appendHere.appendChild(appendMe);

    l += w - 1;
  }
}

function lightning(){

//appendHere = .midground



};
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export randomFlt */
function randomInt(min, max) {
  return Math.floor(Math.random * (max - min + 1) + min);
}

function randomFlt(min, max) {
  return Math.random * (max - min + 1) + min;
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clear__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clouds__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drizzle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fog__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rain__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__snow__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__thunder__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = animateWeather;










function animateWeather(weatherId) {
  if (weatherId >= 200 && weatherId < 300) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__thunder__["a" /* default */])();
  }
  else if (weatherId >= 300 && weatherId < 400) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__drizzle__["a" /* default */])();
  }
  else if (weatherId >= 500 && weatherId < 600) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__rain__["a" /* default */])();
  }
  else if (weatherId >= 600 && weatherId < 700) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__snow__["a" /* default */])();
  }
  else if (weatherId >= 700 && weatherId < 800) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__fog__["a" /* default */])();
  }
  else if (weatherId === 800) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__clear__["a" /* default */])();
  }
  else if (weatherId > 800 && weatherId < 900) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__clouds__["a" /* default */])();
  }
  else if (weatherId >= 900 && weatherId <= 950) {
    extreme();
  }
  else if (weatherId > 950 && weatherId < 1000) {
    other();
  }
  else __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__clear__["a" /* default */])();
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_dev_weather_animateWeather__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_dev_weather_clouds__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_dev_weather_clear__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_dev_weather_drizzle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_dev_weather_fog__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_dev_weather_rain__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_dev_weather_snow__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_dev_weather_thunder__ = __webpack_require__(6);









var weatherTypes = {
  thunder: 200,
  drizzle: 300,
  rain: 500,
  snow: 600,
  fog: 700,
  clear: 800,
  clouds: 801,
  extreme: 900,
  other: 951
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__js_dev_weather_animateWeather__["a" /* default */])(weatherTypes.clear);


/***/ })
/******/ ]);