// This is where it all goes :)

window.onload = function() {

//getting the html div element where the description will be placed
var description = document.getElementById("city-description")

//getting the select html element
var select = document.getElementById("select");

//json request
var places = new XMLHttpRequest();
places.open('GET', 'cities.json');
places.onload = function() {
  var ourData = JSON.parse(places.responseText);
  renderHTML(ourData)
};
places.send();


//data is the object from the json file
function renderHTML(data) {
  var htmlString = "";

//loops through the json objects and prints them to the variable htmlString which is being written into the description variable
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].city + "</p>";
    htmlString += "<p>" + data[i].description + "</p>";
  }

  //writes the json object
  description.insertAdjacentHTML('beforeend',  htmlString)
  select.insertAdjacentHTML('beforeend',  htmlString)

}





  // var weather = new XMLHttpRequest();
  // weather.open("GET", "http://api.wunderground.com/api/5d0e93680814529e/conditions/q/gb/London.json", false);
  // weather.send(null);
  //
  // var r = JSON.parse(weather.response);
  // var weather = "Current location: " + r.current_observation.display_location.full + "<br />";
  // var temp = r.current_observation.temperature_string + "<br />";
  // var wind = r.current_observation.wind_string + "</br />";
  //
  // document.getElementById("weather").innerHTML = weather;
  // document.getElementById("temp").innerHTML = temp;
  // document.getElementById("wind").innerHTML = wind;



};
