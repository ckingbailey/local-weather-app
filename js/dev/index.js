import randomInt from './utils/randomRolls';
import randomFlt from './utils/randomRolls';
import clear from './weather/clear';
import clouds from './weather/clouds';
import drizzle from './weather/drizzle';
import fog from './weather/fog';
import rain from './weather/rain';
import snow from './weather/snow';
import thunder from './weather/thunder';
import animateWeather from './weather/animateWeather';
import {temperature, requestWeather, getLocalWeather} from './ajax/fetchAPIs';
import convert, {unitsBtn} from './utils/conversion';

var unitsBtn = document.querySelector('.switch');

getLocalWeather('http://ip-api.com/json');

//console.log("temperature = ", temperature);

unitsBtn.addEventListener('click', convert);
