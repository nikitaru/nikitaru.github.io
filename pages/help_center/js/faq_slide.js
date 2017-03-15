$(document).ready(function() {
	$('.question').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('question--active');
		$(this).parent().find('.answer').slideToggle(500);
	});
});