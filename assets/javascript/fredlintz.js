$(document).ready(function() {
	

	 var projectListOne = [
	 	"<p>Projects</p>",
	 	"<hr>",
	 	"<div><a href='https://fredlintz5.github.io/hangman-game/' target='_blank'>Hangman</a></div>",
		"<div><a href='https://fredlintz5.github.io/rochambeau/' target='_blank'>Rochambeau</a></div>",
		"<div><a href='https://fredlintz5.github.io/calculator/' target='_blank'>Calculator</a></div>",
		"<div><a href='https://fredlintz5.github.io/bootstrap-portfolio/' target='_blank'>BootStrap Portfolio</a></div>",
		"<div><a href='https://fredlintz5.github.io/bicycle_rentals/' target='_blank'>Bicycle Rentals</a></div>",
		];
	var projectListTwo = [
		"<p>More Projects</p>",
	 	"<hr>",
	 	"<div><a href='https://fredlintz5.github.io/htmlCssPractice/hover/' target='_blank'>CSS Layout/Hover Fun</a></div>",
		"<div><a href='https://fredlintz5.github.io/htmlCssPractice/hamburgerNav/' target='_blank'>Jquery Responsive Navbar</a></div>",
		"<div><a href='https://fredlintz5.github.io/htmlCssPractice/qwerty/' target='_blank'>Jquery Qwerty Keyboard</a></div>",
		"<div><a href='https://fredlintz5.github.io/week-4-game/' target='_blank'>Star Wars RPG</a></div>",
		"<div><a href='https://fredlintz5.github.io/triviaGame/' target='_blank'>Trivia Game</a></div>"];
	 

	function footerLI() {
		var firstArray = projectListOne.length;
		var secondArray = projectListTwo.length;

		for (var i = 0; i < firstArray; i++) {
			$("#projectListOne").append(projectListOne[i]);
		}

		for (var i = 0; i < secondArray; i++) {
			$("#projectListTwo").append(projectListTwo[i]);
		}
	}
	footerLI();














});