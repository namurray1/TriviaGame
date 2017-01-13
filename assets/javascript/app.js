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

Quiz.prototype.guess = function(answer) {
	

	if(this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}
	this.questionIndex++;
};

function populate() {
	if(quiz.isEnded()) {
		showScores();
	} 

	else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++) {
			var elements = document.getElementById("choice" + i);
			elements.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}

		showProgress();
	}

}

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	};
}
//shows the question x of y.
function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;

}
//shows the progress in the footer
function showScores() {
	var gameOverHtml = "<h1> Result </h1>";
	gameOverHtml += "<h2 id = 'score' > Your scores: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
}

//game questions
var questions = [
	new Question("What is an example of a non-semantic element?",["form","table","article","div"],"div"), 
	new Question("All but one of the following is a block level element",["div","h1","a","form"],"a"),   
	new Question("Which of these is not considered a head element?",["meta","style","h3","script"],"h3"),
	new Question("One of these is not considered a list tag.",["ul","p","dd","dl"],"p"), 
	new Question("Bootstraps grid system allows up to how many columns?",["12","16","10","8"],"12"), 
	new Question("One of the following is not a grid class for BootStrap.",["xxl","xs","lg","md"],"xxl"), 
	new Question("You should have a basic knowledge of HTML, CSS, and JavaScript before you learn what?",["Ruby on Rails","jQuery","SQL","Python"],"jQuery"),
	new Question("The PHP script starts with?",["php","doctype","{}","$"],"php"), 
	new Question("Searching for errors in programming is called?",["decluttering","debugging","deplaning","declaring"],"debugging"), 
	];

	var quiz = new Quiz(questions);

	populate();