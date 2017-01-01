$(document).ready(function () {
    // ----- putting every button in paragraph to the right -----
    $('button').parent('p').css("text-align", "right");
    // ----- changing active navbar -----
    $('.nav li').click(function (e) {
        var $this = $(this);
        $('.nav li').removeClass('active');
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        
    });
    // ----- navigation toggle -----
    $('.nav li').click(function() {
        if (!this.hasClass('dropdown-toggle')) {
            $(".collapse").collapse('hide');
        }
	});
	// ----- back to top button -----
	var pixelNumber = 300;
	$(window).scroll(function() {
	    if ( $(window).scrollTop() > pixelNumber) {
	        $('.back-to-top').fadeIn('slow');
	    } else {
	        $('.back-to-top').fadeOut('slow');
	    }
	});
	
	$('.back-to-top').click(function() {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 700);
	    return false;
	});
});
