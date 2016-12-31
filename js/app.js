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
    //   navigation toggle
    $('.nav li').click(function() {
        if (!this.hasClass('dropdown-toggle')) {
            $(".collapse").collapse('hide');
        }
	});
});
