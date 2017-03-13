$(document).ready(function() {
	$('.plus_btn').click(function(event) {
		/* Act on the event */
		$(this).parent().find('.minus_btn').show();
		$(this).parent().toggleClass('question--active');
		$(this).parent().parent().find('.answer').slideToggle(500);
	});
});