
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {apiCaller} from './api.js';


let displayResult = function(response){
  $("#output").empty();
  for (let i = 0; i < response.drinks.length; i++) {
    $("#output").append(`<div class='drink'><h3>${response.drinks[i].strDrink}</h3><img src=${response.drinks[i].strDrinkThumb}>`);
    let ingredientNumber = 1;
    $("#output").append("<ul>");
    while (response.drinks[i]["strIngredient" + ingredientNumber] != "") {
      $("#output").append(`<li>${response.drinks[i]["strIngredient" + ingredientNumber]}</li>`);
      ingredientNumber ++;
    }
    $("#output").append("</ul>");
    $("#output").append(`<p>${response.drinks[i].strInstructions}</p></div>`);
  }
}

let displayIngredientResult = function(response){
  $("#output").empty();
  for (let i = 0; i < response.drinks.length; i++) {
    $("#output").append(`<div class='drink'><h3>${response.drinks[i].strDrink}</h3><img src=${response.drinks[i].strDrinkThumb}></div>`);
  }
}

let errorResult = function(){
  $("#output").text("There was an error processing your request.");
}

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    let searchInput = "search.php?s=" + $("#input1").val();
    $("#form1")[0].reset();
    apiCaller(displayResult, searchInput, errorResult);
  });

  $("#form2").submit(function(event){
    event.preventDefault();
    let searchInput2 = "filter.php?i=" + $("#input2").val();
    $("#form2")[0].reset();
    apiCaller(displayIngredientResult, searchInput2, errorResult);
  });

});

$(document).on("click", ".drink", function() {
  let description = "search.php?s=" + ($(this).children("h3").text());
  apiCaller(displayResult, description, errorResult);
});

























//
// // this code would not work if the entry point was not   entry: './src/main.js',
// $(document).ready(function(){
//   $('#weatherLocation').click(function(){
//     let zip = $('#location').val();
//     console.log(zip);
//     $('#location').val("");
//     $.ajax({
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=${process.env.API_KEY}`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         $('.showHumidity').text(`The Humidity in ${zip} is ${response.main.humidity}%`);
//         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//       },
//       error: function() {
//         $('#errors').text("There was an error processing your request. Please try again.");
//       }
//     });
//   });
// });
