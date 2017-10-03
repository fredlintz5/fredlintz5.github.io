
var projectListOne = [
	"<p>Projects</p>",
	"<hr>",
	"<div><a href='https://fredlintz5.github.io/hangman-game/' target='_blank'>Hangman</a></div>",
	"<div><a href='https://fredlintz5.github.io/rochambeau/' target='_blank'>Rochambeau</a></div>",
	"<div><a href='https://fredlintz5.github.io/calculator/' target='_blank'>Calculator</a></div>",
	"<div><a href='https://fredlintz5.github.io/bicycle_rentals/' target='_blank'>Bicycle Rentals</a></div>",
	"<div><a href='https://fredlintz5.github.io/hailMinder/' target='_blank'>hailMinder</a></div>"
	];
		
var projectListTwo = [
	"<p>Projects</p>",
 	"<hr>",
 	"<div><a href='https://fredlintz5.github.io/htmlCssPractice/hover/' target='_blank'>CSS Layout/Hover Fun</a></div>",
	"<div><a href='https://fredlintz5.github.io/htmlCssPractice/hamburgerNav/' target='_blank'>Jquery Responsive Navbar</a></div>",
	"<div><a href='https://fredlintz5.github.io/htmlCssPractice/qwerty/' target='_blank'>Jquery Qwerty Keyboard</a></div>",
	"<div><a href='https://fredlintz5.github.io/week-4-game/' target='_blank'>Star Wars RPG</a></div>",
	"<div><a href='https://fredlintz5.github.io/triviaGame/' target='_blank'>Trivia Game</a></div>",
	];
	 


projectListOne.forEach((element) => {
	$("#projectListOne").append(element);
})

projectListTwo.forEach((element) => {
	$("#projectListTwo").append(element);
})



$("#navWho").click(function() { 
	$('html,body').animate({
        scrollTop: $("#who").offset().top},'slow');           
});

$('#navResume').click(() => {
	$('#resumeModal').modal('toggle');
});


$('#resumePhone').hover(() => {
	$('#resumePhone').text('352-514-1246');
}, () => {
	$('#resumePhone').text('Phone');
});


$('#resumeEmail').hover(() => {
	$('#resumeEmail').text('fred.lintz5@gmail.com');
}, () => {
	$('#resumeEmail').text('Email');
});


// function imageHover(id, imgP) {
// 	$(id).hover(() => {

// 		$(id).css({
// 			opacity: '0.6',
// 		});
// 		// $(imgP).css({
// 		// 	display: 'inherit',
// 		// 	color: 'white',
// 		// 	opacity: '1',
// 		// 	'z-index': '2',
// 		// });

// 	}, function() {
// 		$(id).css({
// 			opacity: '1',
// 		});
// 		// $(imgP).css({
// 		// 	display: 'none',
// 		// });
// 	});
// }

// imageHover("#image1", "#img1p");
// imageHover("#image2", "#img2p");
// imageHover("#image3", "#img3p");
// imageHover("#image4", "#img4p");
// imageHover("#image5", "#img5p");



