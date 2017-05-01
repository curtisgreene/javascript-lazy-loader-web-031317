"use strict";

// this is the base API url
var baseUrl = "https://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var html = '<div class="row">'
  $.each(carsJSON, function(index, car){
    html += '<div class="col-md-4 car">'
    html += "<h2>" + car["Make"] + "</h2>"
    html += "<p><strong>Model:</strong> " + car["Model"] + "</p>"
    html += "<p><strong>Year:</strong> " + car["Year"] + "</p></div>"
  });
  html += "</div>"
  return html
}


function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  const carsHTML = formatCars(carsJSON)
  $("#cars").append(carsHTML)
}

var pageNumber = 3
function fetchJSON() {
  var url = baseUrl + pageNumber + "/3"
  pageNumber += 1
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  })
}
