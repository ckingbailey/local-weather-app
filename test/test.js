import animateWeather from '../js/dev/index';
import clouds from '../js/dev/weather';
import clear from '../js/dev/weather';
import drizzle from '../js/dev/weather';
import fog from '../js/dev/weather';
import rain from '../js/dev/weather';
import snow from '../js/dev/weather';
import thunder from '../js/dev/weather';

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