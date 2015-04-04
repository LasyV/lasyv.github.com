$(window).scroll(function () {
    var height = $(window).scrollTop();
    placeLogo(height);
});


$(document).ready(function(){
    var height = $(window).scrollTop();
    placeLogo(height);
    $("#last-mod").text("Last Modified on "+this.lastModified);
});


function placeLogo(height){
    if (height > 50) {
        $("#logo-scroll").animate({
            backgroundSize: 100,
            opacity: 0.5,
            backgroundPositionX: '5%',
            backgroundPositionY: '50%',
            height: 50
        }, 500, function () {
            // Animation complete.
        });
        
        $("#logo-h1").animate({
            paddingTop: 0
        }, 500, function () {
            // Animation complete.
        });
    }
}





function thanks () {
    $("#contacts-form").trigger("reset");
    var div = $(".thanks-message");  
    div.animate({left:'0%', opacity: 1.0}, 600, 'easeOutExpo').delay(800);
    div.animate({left:'100%', opacity: 0.0}, 600, 'easeInExpo');
    div.animate({left:'-100%'},{duration: 0});
}


//$(document).ready(function(){
//    $("button").click(function(){
//    var div = $(".thanks-message");  
//    div.animate({left:'0%', opacity: 1.0}, 600, 'easeOutExpo').delay(800);
//    div.animate({left:'100%', opacity: 0.0}, 600, 'easeInExpo');
//    div.animate({left:'-100%'},{duration: 0});
//    });
//});