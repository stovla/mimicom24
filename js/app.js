$(document).ready(function () {
    // ----- scrolling header -----
    var welcome = "";
    var word = "MimiCom24";
    typingText();
    function typingText (){
        var index = 0;
        var interval = setInterval(function() {
        if (index !== word.length) {
            welcome += word[index];
            $('.text-thin em').html(welcome);
            index++;
        }
      }, 300);
    }
    
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
