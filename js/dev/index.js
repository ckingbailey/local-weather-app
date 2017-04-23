import randomInt from './utils/randomRolls';
import randomFlt from './utils/randomRolls';
import clouds from './weather/clouds';
import drizzle from './weather/drizzle';
import fog from './weather/fog';
import rain from './weather/rain';
import snow from './weather/snow';
import thunder from './weather/thunder';
import animateWeather from './weather/animateWeather';
import {temperature, requestWeather, getLocalWeather} from './ajax/fetchAPIs';
import convert from './utils/conversion';

$(document).ready(getLocalWeather('http://ip-api.com/json'));

//console.log("temperature = ", temperature);

$(".switch").on("click", convert);
