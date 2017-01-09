// Remember to add a timer for the game as well as some images! The player will have 10 seconds to answer each question. 
// There will be a total of 10 questions.
// Need to add classes for text, questions, and answer
// Do not remove this line. This line contains the code that will be used to populate the questions, choices, and text fields.
//use jQuery to add some added effects to clicks like sounds and animation.
function Question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}
Question.prototype.correctAnswer = function(choices) {
	return choices === this.answer;
};

function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function(answser) {
	this.questionIndex++;
	if(this.getQuestionIndex().correctAnswer(answser)) {
		this.score++;
	}
};

/*function populate() {
	if(quiz.isEnded()) {
		//showScores()
	} else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choices" + i);
			element.innerHTML = choices[i];
		}
	}
}
// Add 10 questions here plus a timer

var questions = [
	new Question(""),["","","",""],"", //Enter the question plus four answers using and array and include the actual answer last.
	new Question(""),["","","",""],"", //Enter the question plus four answers using and array and include the actual answer last.  
	new Question(""),["","","",""],"", //Enter the question plus four answers using and array and include the actual answer last.
	new Question(""),["","","",""],"", //Enter the question plus four answers using and array and include the actual answer last.
	new Question(""),["","","",""],"", //Enter the question plus four answers using and array and include the actual answer last.
	new Question(""),["","","",""],"", //Enter the question plus four answers using and array and include the actual answer last.
	new Question(""),["","","",""],"", //Enter the question plus four answers using and array and include the actual answer last.
	new Question(""),["","","",""],"", //Enter the question plus four answers using and array and include the actual answer last.
	new Question(""),["","","",""],"", //Enter the question plus four answers using and array and include the actual answer last.
	new Question(""),["","","",""],"", //Enter the question plus four answers using and array and include the actual answer last.
	];

	var quiz = new Quiz(questions);

	populate();
	*/