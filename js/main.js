// funcion para cambiar el navbar
$(document).ready(function () {
    var checkScrollBar = function(){
        $('.bg-main').css({
            backgroundColor: $(this)
            .scrollTop() > 1 ?
            'rgb(52, 73, 94, .5)' : 'bg-centro'
        })    
    }
    $(window).on('load resize scroll', checkScrollBar)
});

// funcion ir hacia arriba
$(document).ready(function(){ //Hacia Arriba
    irArriba();
});

function irArriba(){
    $('.ir-arriba').click(function(){ 
        $('body,html').animate({ scrollTop:'0px' },1000); 
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){ 
            $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); 
        }
    });
    $('.ir-abajo').click(function(){ 
        $('body,html').animate({ 
            scrollTop:'1000px' },1000); 
    });
}