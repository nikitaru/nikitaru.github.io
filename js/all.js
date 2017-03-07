// Nav mobile

window.addEventListener("load", function() {
    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 10);
});

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
$(document).ready(function() {
    $('.nav_so_icon').hide();
    $('a#open_contact').mouseenter(function() {
        $('.nav_so_icon').fadeToggle('slow');
    });
});


// Slider


$(function() {
    var width = $('#slider').width();
    var animationSpeed = 1000;
    var pause = 4000;
    var currentSlide = 1;
    //cache DOM
    var $slider = $('#slider')
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');
    //function
    setInterval(function() {
        $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function() {

            $('#caption' + currentSlide).css('opacity', 0.5);
            currentSlide++;
            $('#caption' + currentSlide).css('opacity', 1);

            if (currentSlide === $slides.length) {
                currentSlide = 1;
                $('#caption' + $slides.length).css('opacity', 0.5);
                $('#caption' + currentSlide).css('opacity', 1);
                $slideContainer.css('margin-left', 0);
            };
        });
    }, pause)
});

//icon slider
$(document).ready(function() {
    $('.text_container').css('margin-left', '-215px');
    var currentBox = 1;
    var animationSpeed = 800;
    var moveLength;
    var iconMoveLength;
    var $iconSlide = $('.cap_container');
    var $textSlide = $('.text_container');
    var $boxLength = $('.text_container>a').length;
    //function
    // right  click
    $('#rightarrow').click(function(event) {
        /* Act on the event */
        //text
        if (currentBox < $boxLength && currentBox != ($boxLength - 2)) {
            moveLength = '-=270px';
            iconMoveLength = '-=297px';
            currentBox++;
            $('.box' + currentBox).css('opacity', '1');
            $('.box' + (currentBox + 1)).css('opacity', '0.5');
            $('.box' + (currentBox - 1)).css('opacity', '0.5');
            $textSlide.animate({ marginLeft: moveLength }, animationSpeed);
            $iconSlide.animate({ marginLeft: iconMoveLength }, animationSpeed);
        } else {
            currentBox = 1;
            moveLength = -215;
            iconMoveLength = 0;
            $textSlide.animate({ marginLeft: moveLength }, animationSpeed, function() {
                $('.box' + currentBox).css('opacity', '1');
                $('.box' + (currentBox + 1)).css('opacity', '0.5');
                $('.box' + ($boxLength - 2)).css('opacity', '0.5');
            });
            $iconSlide.animate({ marginLeft: iconMoveLength }, animationSpeed);
        };
    });
    // left  click
    $('#leftarrow').click(function(event) {
        /* Act on the event */
        //text
        if (currentBox <= ($boxLength - 2) && currentBox > 1) {
            moveLength = '+=270px';
            iconMoveLength = '+=297px';
            currentBox--;
            $('.box' + currentBox).css('opacity', '1');
            $('.box' + (currentBox + 1)).css('opacity', '0.5');
            $('.box' + (currentBox - 1)).css('opacity', '0.5');

            $textSlide.animate({ marginLeft: moveLength }, animationSpeed);
            $iconSlide.animate({ marginLeft: iconMoveLength }, animationSpeed);
        } else {
            currentBox = 1;
            moveLength = -215;
            iconMoveLength = 0;
            $('.box' + currentBox).css('opacity', '1');
            $('.box' + (currentBox + 1)).css('opacity', '0.5');
            $('.box' + ($boxLength - 2)).css('opacity', '0.5');
            $textSlide.animate({ marginLeft: moveLength }, animationSpeed);
            $iconSlide.animate({ marginLeft: iconMoveLength }, animationSpeed);
        };
    });
});
// SlideuP
$(document).ready(function() {
    $('#intro_btn1').click(function(event) {
        /* Act on the event */
        // click 01
        // icon change
        $('#shop_icon,#arrowplace_hover,#bag_hover').css('display','none');
        $('#shop_hover,#arrowplace_icon,#bag_icon').css('display','block');
        // icon underline show
        $('#underline1').addClass('underline_show');
        $('#underline2').removeClass('underline_show');
        $('#underline3').removeClass('underline_show');
        // active line show
        $('#line1').removeClass('active_line_hide').addClass('active_line_show');
        $('#line2').addClass('active_line_hide');
        $('#line3').addClass('active_line_hide');
        // box move
        $('#mobile_intro_box1').animate({ zIndex: "3", top: "23%", width: "280px", marginLeft: "-140px" }, 400);
        $('#mobile_intro_box2').delay(50).animate({ zIndex: "2", top: "45%", width: "250px", marginLeft: "-125px" }, 500);
        $('#mobile_intro_box3').delay(50).animate({ zIndex: "1", top: "0%", width: "250px", marginLeft: "-125px" }, 500);
    });
    $('#intro_btn2').click(function(event) {
        /* Act on the event */
        // click 02
        // icon change
        $('#shop_hover,#arrowplace_icon,#bag_hover').css('display','none');
        $('#shop_icon,#arrowplace_hover,#bag_icon').css('display','block');
        // icon underline show
        $('#underline2').addClass('underline_show');
        $('#underline1').removeClass('underline_show');
        $('#underline3').removeClass('underline_show');
        // // active line show
        $('#line2').removeClass('active_line_hide').addClass('active_line_show');
        $('#line1').addClass('active_line_hide');
        $('#line3').addClass('active_line_hide');
        // box move
        $('#mobile_intro_box2').animate({ zIndex: "3", top: "23%", width: "280px", marginLeft: "-140px" }, 400);
        $('#mobile_intro_box3').delay(50).animate({ zIndex: "2", top: "45%", width: "250px", marginLeft: "-125px" }, 500);
        $('#mobile_intro_box1').delay(50).animate({ zIndex: "1", top: "0%", width: "250px", marginLeft: "-125px" }, 500);
    });
    $('#intro_btn3').click(function(event) {
        /* Act on the event */
        // click 03
        // icon change
        $('#shop_hover,#arrowplace_hover,#bag_icon').css('display','none');
        $('#shop_icon,#arrowplace_icon,#bag_hover').css('display','block');
        // icon underline show
        $('#underline3').addClass('underline_show');
        $('#underline2').removeClass('underline_show');
        $('#underline1').removeClass('underline_show');
        // active line show
        $('#line3').removeClass('active_line_hide').addClass('active_line_show');
        $('#line1').addClass('active_line_hide');
        $('#line2').addClass('active_line_hide');
        // box move
        $('#mobile_intro_box3').animate({ zIndex: "3", top: "23%", width: "280px", marginLeft: "-140px" }, 400);
        $('#mobile_intro_box1').delay(50).animate({ zIndex: "2", top: "45%", width: "250px", marginLeft: "-125px" }, 500);
        $('#mobile_intro_box2').delay(50).animate({ zIndex: "1", top: "0%", width: "250px", marginLeft: "-125px" }, 500);
    });
});
