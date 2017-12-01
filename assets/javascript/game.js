// variables defined set to zero for default
var yourWins = 0;
var yourLosses = 0;
var addition = 0;
var total = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

var emerald = Math.floor((Math.random() * 12) + 1);
var diamond = Math.floor((Math.random() * 12) + 1);
var ruby = Math.floor((Math.random() * 12) + 1);
var amethyst = Math.floor((Math.random() * 12) + 1);

var updateAddition = function () {
    $('.addition').empty();
    $('.addition').append(addition);

    $('#yourWins').empty();
    $('#yourWins').append(yourWins);

    $('#yourLosses').empty();
    $('#yourLosses').append(yourLosses);
}


var restart = function (){
    addition = 0;
    total = Math.floor((Math.random() * 100) + 19);

    $('.total').empty();
    $('.total').append(total);

    var emerald = Math.floor((Math.random() * 12) + 1);
    var diamond = Math.floor((Math.random() * 12) + 1);
    var ruby = Math.floor((Math.random() * 12) + 1);
    var amethyst = Math.floor((Math.random() * 12) + 1);
    updateAddition();
}	

var game = function (){
    if (addition == total) {
        yourWins = yourWins + 1;
        alert("You win!");
        restart();
    } else if (addition > total) {
        yourLosses = yourLosses + 1;
        alert("You lost");
        restart();
    } else {
        updateAddition();
    }
}

$('.total').append(total);
$('.addition').append(addition);

$( document ).ready(function() {
    $('#emerald').click(function(){
        addition = addition + emerald;
        game();
    })

    $('#diamond').click(function(){
        addition = addition + diamond;
        game();
    })

    $('#ruby').click(function(){
        addition = addition + ruby;
        game();
    })

    $('#amethyst').click(function(){
        addition = addition + amethyst;
        game();
    })
});







// make guessing number 19-120 display 

// guessingNumber = Math.floor((Math.random() * 120) + 1);
// console.log(guessingNumber);

// function genRandomNumber() {
    // return Math.Floor(Math.random() * (120 - 19 + 1)) + 19;
// }


// assign a random number to the buttons when clicked



// score updates based on the crystal click



// make a if statement when score is met you win, else if you go over then you lose



// keep track of wins and losses



// restart game but don't reset score