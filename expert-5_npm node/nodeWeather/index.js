#! /usr/bin/env node

var axios = require('axios')

var data = {}

if (process.argv[2]) {
    console.log(process.argv[2])
    data.params = {
        city: process.argv[2]
    }
}

axios.get('http://api.jirengu.com/weather.php',data)
  .then(function (response) {
    let weather = response.data.results[0].weather_data[0]
    console.log(weather.date)
    console.log('气温: ' + weather.temperature)
    console.log('天气: ' + weather.weather)
    console.log('PM2.5: ' + response.data.results[0].pm25)
  })
  .catch(function (error) {
    console.log(error);
  });