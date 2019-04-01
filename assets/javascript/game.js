window.onload = function() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var userWins = 0;
    var userWinsElement = document.getElementById('win-count');
    var userLosses = 0;
    var userLossesElement = document.getElementById('loss-count');
    var guessesLeft = 9;
    var guessesLeftElement = document.getElementById('guess-countdown');
    var userInputElement = document.getElementById('letter-count');

    // psychicLetter array needs to be separated into whatever function resets the game
    var psychicLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log("The letter to be guessed is ", psychicLetter);

    document.onkeyup = function(event) {
        var userInput = event.key.toLowerCase();
        userInputElement.innerText += userInput;

        if (userInput === psychicLetter && guessesLeft >= 1) {
            userWins++;
            console.log("the user has won", userWins, "times");
            guessesLeft = 9;
            userInputElement.innerText = "";
        } else if (userInput !== psychicLetter && guessesLeft >= 1) {
            guessesLeft--;
            console.log("there are only", guessesLeft, "guesses left");
        }
        
        if (userInput !== psychicLetter && guessesLeft === 0) {
            userLosses++;
            console.log("the user has lost", userLosses, "times");
            userInputElement.innerText = "";
        } else if (userInput === psychicLetter && guessesLeft === 0) {
            
            console.log('you guessed too late');
        }

        userWinsElement.innerText = userWins;
        userLossesElement.innerText = userLosses;
        guessesLeftElement.innerText = guessesLeft;
    
    };



    // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

    // now the same but for losses
};