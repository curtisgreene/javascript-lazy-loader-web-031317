"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  $("#load-cars").on("click", function(e){
    //fetchJSON()
    console.log("I was clicked")
    fetchJSON()
  });
});
