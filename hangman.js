//Created the require of the npm package inquirer
var inquirer = require('inquirer');


//Splitting my words to count letter and separate each letter
var hangmanWord = function(word,category) {
	this.splitWord = word.split('');
	this.category = category;
	this.word = word;
	//this.checkSpaces = this.splitWord.indexOf (" ");
}

//Var's of my words and what genre it falls under
var firstWord = new hangmanWord ("Beatles", "Rock n Roll");
var secondWord = new hangmanWord ("Beck", "Rock Band");
var thirdWord = new hangmanWord ("Devo", "Rock Band");
var fourthWord = new hangmanWord ("Kiss", "Rock n Roll");

//
var wordArray = [firstWord, secondWord, thirdWord, fourthWord];

console.log (firstWord);

console.log (firstWord.splitWord.length);

//*My code stopped working here, I attemted to create my intro to the game
//and select a random word from my list

// function intro(){
// 	console.log("Hello welcome to Rock n Roll Hangman")
// 	inquirer.prompt([{

// // 	}]).then(function(answer)){}

// // } 

// // function hangMan(){
// // 	var selectedWord = wordArray[i].word
// // }
