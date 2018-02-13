var Letter = function(letter){
  this.current = "_"
	this.theLetters = letter;
	
	//Shows letter
	this.showsLetter = false;
	this.letterin = function(letter){
		if(this.theLetters == letter){
			this.current = this.theLetters;
			return true;
		}
			return false;
	}

	this.letterShows = function(){
		return this.current;
	}
};
module.exports = Letter;