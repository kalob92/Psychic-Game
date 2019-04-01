window.onload = function() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var userWins = 0;
    var userWinsElement = document.getElementById('win-count');
    var userLosses = 0;
    var userLossesElement = document.getElementById('loss-count');
    var guessesLeft = 10;
    var guessesLeftElement = document.getElementById('guess-countdown');
    var userInputElement = document.getElementById('letter-count');

    // psychicLetter array needs to be separated into whatever function resets the game
    // var psychicLetter = letters[Math.floor(Math.random() * letters.length)];
    // console.log("The letter to be guessed is ", psychicLetter);

    document.onkeyup = function(event) {
        var userInput = event.key.toLowerCase();
        // I *REALLY* do not want the psychicLetter var here in the .onkeyup event, however this seems to be
        // the only way I can get the psychicLetter to randomize again after
        // a win or a loss. I can hide the mistake by taking out the console.log
        // on line 22, but I'd rather leave it there to remind me what I need to fix
        var psychicLetter = letters[Math.floor(Math.random() * letters.length)];
        // console.log("The letter to be guessed is ", psychicLetter);
    
        // here I'll only have the "if we win" scenario, which will add to the wins tally,
        // reset guessesLeft to 10, clear out the userInputElement, then pull a new letter
        if (letters.indexOf(userInput) > -1) {
            userInputElement.innerText += userInput;

            if (userInput === psychicLetter && guessesLeft >= 1) {
                // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
                userWins++;
                console.log("the user has won", userWins, "times");
                guessesLeft = 10;
                console.log("you have", guessesLeft, "guesses left");
                userInputElement.innerText = "";
                // var userHasWon = true;
            } 
            
            // this seems to negate the previous if statement, console logs nothing and no win happens
            // if (userHasWon) {
            //     var psychicLetter = letters[Math.floor(Math.random() * letters.length)];
            //     console.log("The letter to be guessed is ", psychicLetter);        
            // };
            
            if (userInput !== psychicLetter && guessesLeft >= 1) {
                guessesLeft--;
                if (guessesLeft >= 1) {
                    console.log("there are only", guessesLeft, "guesses left");
                } else {
                    console.log('there are no guesses left');
                };
            };
            
            if (userInput !== psychicLetter && guessesLeft < 1) {
                // now the same but for losses
                userLosses++;
                console.log("the user has lost", userLosses, "times");
                guessesLeft = 10;
                userInputElement.innerText = "";
                // var psychicLetter = letters[Math.floor(Math.random() * letters.length)];
                // console.log("The letter to be guessed is ", psychicLetter);            
            };
            
            if (userInput === psychicLetter && guessesLeft < 1) {
                guessesLeft = 10;
                userInputElement.innerText = "";
                console.log('you guessed too late');
            };

            // if (userInput === psychicLetter || guessesLeft < 1) {
            //     var psychicLetter = letters[Math.floor(Math.random() * letters.length)];
            //     console.log("The letter to be guessed is ", psychicLetter);            
            // };

        };


        userWinsElement.innerText = userWins;
        userLossesElement.innerText = userLosses;
        guessesLeftElement.innerText = guessesLeft;
    
    };




};