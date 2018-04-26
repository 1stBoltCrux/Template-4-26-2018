
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {apiCaller} from './api.js';


let displayResult = function(response){
 $("#output").text(response);
}
let errorResult = function(){
  $("#output").text("There was an error processing your request.");
}

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    let searchInput = $("#input1").val();
    apiCaller(displayResult, searchInput, errorResult);
  });
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
