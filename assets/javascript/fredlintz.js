$(window).scroll(() => {
	
	let pixFromTop = $(this).scrollTop();	

	$('.logo').css({
		'transform': `translate(0px, ${pixFromTop/5}%)`
	});

});


var projectListOne = [
	"<p>Mini Projects</p>",
	"<hr>",
	"<div><a href='https://fredlintz5.github.io/week-4-game/' target='_blank'>Star Wars RPG</a></div>",
	"<div><a href='https://fredlintz5.github.io/rochambeau/' target='_blank'>Rochambeau</a></div>",	
	"<div><a href='https://fredlintz5.github.io/triviaGame/' target='_blank'>Trivia Game</a></div>",
	"<div><a href='https://fredlintz5.github.io/bicycle_rentals/' target='_blank'>Bicycle Rentals</a></div>",
	];
		
var projectListTwo = [
	"<p>Mini Projects</p>",
 	"<hr>",
 	"<div><a href='https://fredlintz5.github.io/calculator/' target='_blank'>Calculator</a></div>",
 	"<div><a href='https://fredlintz5.github.io/htmlCssPractice/qwerty/' target='_blank'>Jquery Qwerty Keyboard</a></div>",
 	"<div><a href='https://fredlintz5.github.io/htmlCssPractice/hover/' target='_blank'>CSS Layout/Hover Fun</a></div>",
	"<div><a href='https://fredlintz5.github.io/hangman-game/' target='_blank'>Hangman</a></div>"
	];
	 


projectListOne.forEach((element) => {
	$("#projectListOne").append(element);
})

projectListTwo.forEach((element) => {
	$("#projectListTwo").append(element);
})



$("#navWho").click(function() { 
	$('html,body').animate({
        scrollTop: $("#who").offset().top},800);           
});


$("#navPortfolio").click(function() { 
	$('html,body').animate({
        scrollTop: $("#portfolio").offset().top},1000);           
});


$("#navContact").click(function() { 
	$('html,body').animate({
        scrollTop: $("#footer").offset().top},1100);           
});


$('#navResume').click(() => {
	$('#resumeModal').modal('toggle');
});



