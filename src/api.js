import $ from 'jquery';




export function apiCaller(displayResult, searchInput, errorResult) {

  $.get(`https://www.thecocktaildb.com/api/json/v1/1/${searchInput}`).then(function(response){
    console.log(response);
    displayResult(response);
  }).fail(function(){
    errorResult();
  })
}
