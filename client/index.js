'use strict';
$(document).ready(init);

function init(){
  $('#getRandom').click(getRandom);
}

function getRandom(){
  var number = $('#input').val();
  $.getJSON('https://qrng.anu.edu.au/API/jsonI.php?length=' + number + '&type=uint16', function(response){
    $('#sum').text("Sum: " + (response.data).reduce(function(a,b){return a + b}));
    roots(response.data);
  });
}

function roots(numbers){
  $('#root').empty();
  var sqrts = numbers.map(function(e){
    return Math.sqrt(e);
  });

  console.log(sqrts);


  var divs = sqrts.map(function(e, i){
    var $div = $('<div>');
    $div.addClass('root');



    var $div1 = $('<div>');
    $div1.text(numbers[i]);
    var color = numbers[i] % 2 ? 'green' : 'red';
    $div1.css("background-color", color);


    var $div2 = $('<div>')
    $div2.text(parseInt(e));
    var color2 = e % 2 ? 'orange' : 'tomato'
    $div2.css("background-color", color2);


    $div.append($div1, $div2);
    return $div;
  });

  var max = Math.max.apply(Math, numbers);
  console.log(max);

  var $divMax = $('<div>');
  $divMax.text("Max: " + max);

  $('#root').append(divs, $divMax);
}
