$(function(){
    $(".btn-danger").on("click", ()=>{
        $('body').rvReverseText().hide(15000, "swing", function(){
            $(this).rvReverseText().show(300, "swing", function(){
                let img = "img/death.jpg";
                $(this).empty().css('background-image', `url(${img})`).delay(1000).queue(function(next) { $(this).attr('style', `background-color: black`); next(); });
                $('body').append('<h1></h1>').attr('class', 'text-center');
                $('h1').text("KABOOM").hide(0).attr('class', 'text-white').delay(1000).show(3000);
            });
        });
    });
})