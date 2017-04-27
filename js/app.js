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
/* unused harmony export randomFlt */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFlt(min, max) {
  return Math.random() * (max - min + 1) + min;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = drizzle;


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__ = __webpack_require__(0);
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
      var dropTop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["a" /* default */])(-120,99) + 'vh';
      var dropRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["a" /* default */])(0,100) + 'vw';
      var anim = 'rain-fall-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__["a" /* default */])(1,3);

      appendMe = document.createElement('div');
      appendMe.className = 'rain-drop';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_clouds__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_drizzle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weather_fog__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weather_rain__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weather_snow__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_thunder__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__weather_animateWeather__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return temperature; });
/* unused harmony export requestWeather */
/* harmony export (immutable) */ __webpack_exports__["a"] = getLocalWeather;










var temperature;

/*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-
  build query url and request AJAX
-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*/

function requestWeather(loc){
// building the uri weather query string
  var url = "http://api.openweathermap.org/data/2.5/weather?";

  var key = "&units=imperial&APPID=79aef489883f75aff91f8900796eb1ea";

  var lat = "lat=" + loc.lat.toString().slice(0,loc.lat.toString().indexOf(".")+3);

  var lon = "lon=" + loc.lon.toString().slice(0,loc.lon.toString().indexOf(".")+3);

  url += lat + "&" + lon + key;

  //console.log("url =", url);

/*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-
  AJAX weather request
-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*/
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'jsonp',

  /*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*
    success function
  -_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*/
    success: function publishWeather(api){
      //console.log("weather object: ", api);
      //console.log("api.main.temp = ", api.main.temp);
      temperature = Math.round(api.main.temp);
      console.log("rounded 'temperature' = ", temperature);
      $(".temp").text(temperature + "\xb0 F").addClass("degF");
      $(".weather").text(api.weather[0].description);
      console.log(api);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__weather_animateWeather__["a" /* default */])(api.weather[0].id);
    },
    xhrField: {
      withCredentials: true
    },
    error: function(api,errorText) {
      //console.log(api);
      $(".temp").text("There was a problem with the weather request<br>" + errorText);
    }
  });

}

/*-_-*-_-*-_-*-_-*-_-*-_-*
 function to get location
 then fire location-dependent fcns
 such as get weather fcn
_-*-_-*-_-*-_-*-_-*-_-*-_-*/
function getLocalWeather(locURL){
  $.ajax({
    url: locURL,
    type: 'GET',
    dataType: 'jsonp',

    success: function(json){
      //console.log("location object =", json);
      requestWeather(json);
      $(".locale").text(json.city + ", " + json.regionName + " " + json.zip + ", " + json.country);
    },
    xhrField: {
      withCredentials: true
    },
    error: function(json,errorText) {
      //console.log(json);
      $(".locale").text("There was a problem with the location request: ", errorText);
    }
  });
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clear__ = __webpack_require__(9);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax_fetchAPIs__ = __webpack_require__(7);
/* unused harmony export unitsBtn */
/* harmony export (immutable) */ __webpack_exports__["a"] = convert;



/*-_-*-_-*-_-*-_-*-_-*-_-*-_-
function used by units-switching button
-_-*-_-*-_-*-_-*-_-*-_-*-_-*/
var c, f;
var unitsBtn = document.querySelector('.switch');

function convert(){
  if($(".temp").hasClass("degF")){
    console.log('var temperature ==', __WEBPACK_IMPORTED_MODULE_0__ajax_fetchAPIs__["b" /* temperature */]);
    c = Math.round((__WEBPACK_IMPORTED_MODULE_0__ajax_fetchAPIs__["b" /* temperature */] - 32) * 5 / 9);
    console.log('c ==', c);
    $(".temp").removeClass("degF");
    $(".switch").text("F");
    $(".temp").text(Math.round(c) + " C")
  }

  else {
    console.log('var temperature ==', __WEBPACK_IMPORTED_MODULE_0__ajax_fetchAPIs__["b" /* temperature */]);
    f = __WEBPACK_IMPORTED_MODULE_0__ajax_fetchAPIs__["b" /* temperature */];
//    f = Math.round((t * 9 / 5) + 32);
    console.log(f);
    $(".temp").addClass("degF");
    $(".switch").text("C");
    $(".temp").text(Math.round(f) + "\xb0 F")
  }
  //console.log(temperature);
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_randomRolls__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_clear__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_clouds__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weather_drizzle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weather_fog__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weather_rain__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_snow__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__weather_thunder__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__weather_animateWeather__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ajax_fetchAPIs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_conversion__ = __webpack_require__(10);













var unitsBtn = document.querySelector('.switch');

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ajax_fetchAPIs__["a" /* getLocalWeather */])('http://ip-api.com/json');

//console.log("temperature = ", temperature);

unitsBtn.addEventListener('click', __WEBPACK_IMPORTED_MODULE_10__utils_conversion__["a" /* default */]);


/***/ })
/******/ ]);