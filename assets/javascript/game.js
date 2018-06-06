// make an array for the letters available for the computer to guess from

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// establish user starting variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = []; //make javascript create an array for each letter guessed
var userIndex = [];
var computerGuess = null;




// get the computer to generate a new random letter every time it resets

var newComputerGuess = function() { 
    this.computerGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];

    // indexing the computer's choice from the array to evaluate against the user's choice
    var computerIndexNumber = computerChoices.indexOf(computerGuess);
};

// setting a variable for the html element for guesses left and guesses so far. 
// used on new game to reset the html element

var guessCounter = function () {
    document.querySelector("#guessesRemaining").innerHTML = "Guesses Left: " + guessesLeft;
};

var guessesSoFar = function () {
    document.querySelector("#guessesSoFar").innerHTML = "You guesses so far: " + guessedLetters.join(", ");
};

// this function will reset all of the variables and restart the game

var gameReset = function() {
guesses = 10;
guessesLeft = 10;
guessedLetters = [];
userIndex = [];

newComputerGuess();
guessCounter();
guessesSoFar();

};

// STARTS THE GAME
guessCounter();
newComputerGuess();

// establishing what key the user has pushed, then determining what to do next

document.onkeyup = function(event) {

    // get the user's guess
    var userGuess = event.key.toLowerCase();
       
    // do all of this if the user hasn't already picked the letter
    // check for the win, reset the game
    if (userGuess === computerGuess) {  
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        alert("You are a psychic! Do it again!");
        gameReset();
    };

    // evaluates whether the two guesses are the same 
    // ADDITIONAL NOTE: I attempted to evaluate for duplicates, but the loop wasn't working as intended
    if (userGuess !== computerGuess) {
        // check for duplicates
        if (guessedLetters.indexOf(userGuess) === -1) {
            guessedLetters.push(userGuess);
            guessesSoFar();
            guessesLeft--;
            guessCounter();
                // check for the loss, reset the game
            if (guessesLeft === 0) {
                losses++;
                document.querySelector("#losses").innerHTML = "Losses: " + losses;
                alert("You are no psychic! But try again if I'm wrong!");
                gameReset();
            };
        } else {
            alert("pick another letter!");
        };
    };
};

