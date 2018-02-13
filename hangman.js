var prompt = require("prompt");
var Game = require('./game.js');
var hangmanGame = new Game();
var userGuess = 10;


//Introduction to the game 
console.log("**************************************")
console.log("WELCOME TO FOODIE HANGMAN")
console.log(" ")
console.log("Guess a type of cuisine!")
console.log("**************************************")
	prompt.start();
	BeginGame(userGuess);

  //starting the game allowing user guess and letting the user know

		function BeginGame(guesses){
			console.log("Guesses left: " + guesses);
			if(hangmanGame.currentWord.comparingWords() == true){
				console.log("You win!!!! The cuisine was: " + hangmanGame.randomWord);
				return;
			}
			//user out of guesses and game over
			if(guesses <= 0){
				console.log("Game Over! You are out of guesses");
				return;
			}

		// displaying "_"
		console.log(hangmanGame.currentWord.display());

	prompt.get(["theGuess"], function(err, result){
		if(err){
			return err;
		}
		//boolean for comparison
		//removes a guess if user is wrong
		if(hangmanGame.currentWord.letterFound(result.theGuess) == false){
			guesses --;
		}
		BeginGame(guesses);

	});
}
