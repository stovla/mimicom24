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
    //  ----- scrolling message loop -----
    var word2 = "Stop waiting. Start building.";
    var modified2 = "";
    typingTextLoop(word2);
    function typingTextLoop (text){
        var index = 0;
        var interval = setInterval(function() {
        if (index !== text.length) {
            modified2 += text[index];
            $('#typeLoop').html(modified2);
            index++;
        } else {
            index = 0;
            $('#typeLoop').html("");
            modified2 = "";
        }
      }, 300);
    }
    // ----- change collors for the button 'get free quote' -----
    var colors = ["#8a2be", "#ff4500", "#008b8b", "#2e8b57", "#337ab7"];
    
        setInterval(function () {
            //color = colors[Math.floor(4 * Math.random())];
            $(".colored").css("background", colors[Math.floor(Math.random() * 5)]);
        }, 3000);
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
