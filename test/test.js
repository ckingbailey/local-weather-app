import animateWeather from '../js/dev/weather/animateWeather';
import clouds from '../js/dev/weather/clouds';
import clear from '../js/dev/weather/clear';
import drizzle from '../js/dev/weather/drizzle';
import extreme from '../js/dev/weather/extreme';
import fog from '../js/dev/weather/fog';
import rain from '../js/dev/weather/rain';
import snow from '../js/dev/weather/snow';
import thunder from '../js/dev/weather/thunder';
import tornado from '../js/dev/weather/tornado';

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

animateWeather(weatherTypes.extreme.tornado);
