var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userWins = 0;
var userWinsElement = document.getElementById('win-count');
var userLosses = 0;
var userLossesElement = document.getElementById('loss-count');
var guessesLeft = 9;
var guessesLeftElement = document.getElementById('guess-countdown');
var userInputElement = document.getElementById('letter-count');

document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    userInputElement.innerText = userInput;

};


userWinsElement.innerText = userWins;
userLossesElement.innerText = userLosses;
guessesLeftElement.innerText = guessesLeft;

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// now the same but for losses