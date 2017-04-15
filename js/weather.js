/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import clouds from './';
	import fog from './';

	var temperature;

	/*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_
	  button to switch temperature units
	-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*/

	function units(){
	  var C, F;
	  if($(".temp").hasClass("degF")){
	    C = Math.round((temperature - 32) * 5 / 9);
	    console.log(C);
	    $(".temp").removeClass("degF");
	    $(".switch").text("F");
	    $(".temp").text(Math.round(C) + " C")
	    temperature = C;
	  }

	  else {
	    F = Math.round((temperature * 9 / 5) + 32);
	    console.log(F);
	    $(".temp").addClass("degF");
	    $(".switch").text("C");
	    $(".temp").text(Math.round(F) + "\xb0 F")
	    temperature = F;
	  }
	  console.log(temperature);
	}

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

	  console.log("url =", url);

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
	      //console.log("rounded 'temperature' = ", temperature);
	      $(".temp").text(temperature + "\xb0 F").addClass("degF");
	      $(".weather").text(api.weather[0].description);
	      //animateWeather(api.weather[0].id);
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

	// function to get location
	// then fire location-dependent fcns
	// such as get weather fcn
	function getLocalWeather(locURL){
	  $.ajax({
	    url: locURL,
	    type: 'GET',
	    dataType: 'jsonp',

	    success: function(json){
	      console.log("location object =", json);
	      requestWeather(json);
	      $(".locale").text(json.city + ", " + json.regionName + " " + json.zip + ", " + json.country);
	    },
	    xhrField: {
	      withCredentials: true
	    },
	    error: function(json,errorText) {
	      console.log(json);
	      $(".locale").text("There was a problem with the location request: ", errorText);
	    }
	  });
	}

	function animateWeather(weatherId) {
	  if (weatherId >= 200 && weatherId < 300) {
	    thunder();
	  }
	  else if (weatherId >= 300 && weatherId < 400) {
	    drizzle();
	  }
	  else if (weatherId >= 500 && weatherId < 600) {
	    rain();
	  }
	  else if (weatherId >= 600 && weatherId < 700) {
	    snow();
	  }
	  else if (weatherId >= 700 && weatherId < 800) {
	    atmosphere();
	  }
	  else if (weatherId === 800) {
	    clear();
	  }
	  else if (weatherId > 800 && weatherId < 900) {
	    clouds();
	  }
	  else if (weatherId >= 900 && weatherId <= 950) {
	    extreme();
	  }
	  else if (weatherId > 950 && weatherId < 1000) {
	    other();
	  }
	  else clear();
	}

	$(document).ready(getLocalWeather('http://ip-api.com/json'));

	console.log("temperature = ", temperature);

	$(".switch").on("click", units);


/***/ }
/******/ ]);