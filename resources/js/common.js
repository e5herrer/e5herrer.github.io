(function() {
    $(".hidden-sec").each( function(index){
        $(this).attr('index', index);

        if(index != 0){
            $(this).hide();
        }
    });
})();


(function() {
    $('.appicon').each( function(index){
        $(this).attr("index", index); 
        $(this).parent().click( function(event){
            event.preventDefault();
            $(".hidden-sec").each(function(item_num){
                if(index === item_num){
                    $(this).show();
                }
                else{
                    $(this).hide();
                }
            });
        });
    });
})();

/* RECALCULATE VIEWPORT ON SCREENL RESIZE */
var altcrement = -1;
$(window).resize(function(){
    var currentFontSize = parseFloat($('html').css('font-size'));
    $('html').css('font-size', currentFontSize + (altcrement *= -1) + 'px');
});
/* RECALCULATE VIEWPORT ON SCREENL RESIZE */


/* SAM DUN SLIDING JQUERY */
$(document).ready(function(){

    //Caption Sliding (Partially Hidden to Visible)
    $('.boxgrid.caption').hover(function(){
        $(".cover", this).stop().animate({top:'50%'},{queue:false,duration:160});
    }, function() {
        $(".cover", this).stop().animate({top:'88%'},{queue:false,duration:160});
    });
});
/* SAM DUN SLIDING JQUERY */

