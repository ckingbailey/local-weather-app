import animateWeather from '../js/dev/index';
import clouds from '../js/dev/weather/clouds';
//import clear from '../js/dev/weather/clear';
import drizzle from '../js/dev/weather/drizzle';
import fog from '../js/dev/weather/fog';
import rain from '../js/dev/weather/rain';
import snow from '../js/dev/weather/snow';
import thunder from '../js/dev/weather/thunder';

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
}

animateWeather(weatherTypes.thunder);
