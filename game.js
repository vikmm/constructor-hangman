//constructor function selection random word
var Word = require("./word.js");


var Game = function(){
	this.hangWords = ["mexican","italian","indian","greek","american","cajun"];

	this.randomWord = this.hangWords[ Math.floor(Math.random() * this.hangWords.length)];
	this.currentWord = new Word(this.randomWord);

}
	var hangMan = new Game();

module.exports = Game;