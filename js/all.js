$(document).ready(function() {
    $('.nav_so_icon').hide();
    $('a#open_contact').click(function() {
        $('.nav_so_icon').fadeToggle('slow');
    });
});
