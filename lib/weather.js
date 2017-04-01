var rp = require('request-promise');

module.exports = {
  byZip: getWeather
};

function getWeather(zipCode) {
  // make request to open weather api - http://openweathermap.org/current
  var weatherHost = process.env.host;
  var key = process.env.api_key;
 
  var fullURL = weatherHost+'/data/2.5/weather?zip='+zipCode+',us&units=imperial&APPID='+key

  return rp(fullURL)
      .then(function(body) {
        var response = JSON.parse(body);

        //Builds the string (from the JSON response) which will constitute Alexa's vocal response.
        var message = [
            response.weather[0].description[0].toUpperCase()+response.weather[0].description.substring(1)+' in '+ response.name,
          'The temperature now is ' + Math.floor(response.main.temp),
          'The high today is ' + Math.floor(response.main.temp_max),
          'The low is ' + Math.floor(response.main.temp_min)
        ].join('. ');


    // Here we prepend Alexa's response with some weather-specific additions. For example, if there's rainy weather Alexa will
    // start by telling you to "grab an umbrella!"
	if (response.main.temp > 90) {

	    message = "Stay cool out there! " + message;

	} else if (response.weather[0].description.includes("rain")){

        message = "Grab an umbrella! " + message;

    } else if (response.main.temp <= 40){

        message = "Wear a coat! " + message;

    }

        return message;

      });
}
