$(function(){

    $('#myNavbar a').on("click", function(){
        $('#myNavbar').collapse('hide');
        $('.navTrigger').removeClass('active');
    });

    $('.navTrigger').click(function(){
        $('.navTrigger').toggleClass('active');
    });

    $("#myNavbar a, footer a").on("click", function(){
        if ($(window).width() < 768)
        {
            var sectionTo = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(sectionTo).offset().top - 205
            }, 1000);
        } else {
            var sectionTo = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(sectionTo).offset().top - 10
            }, 1000);
        }
    });
});
