$(function () {
    /*fixed menu js start*/
    
   $(window).on('scroll', function(){
       if ($(window).scrollTop() > $('#navsection').height()){
           $('#navsection').addClass('fixed-menu')
       }else {
           $('#navsection').removeClass('fixed-menu')
       }
   })

  /* fixed menu js ends*/


   /* back to top button js starts */

    $(window).on('scroll', function() {
        
        if($(this).scrollTop() > 450 ) {
            $('#topbtn').fadeIn(500);
        }else{
            $('#topbtn').fadeOut(500);
        }

    })



    $('#topbtn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        },800)
    })

    /* back to top button js ends */

    /* smooth jump js starts */

    
    $('a').on('click', function(event){
        event.preventDefault;
        if(this.hash !== '') {
            $('html,body').animate({
                scrollTop:$(this.hash).offset().top,
            },1000)
        }
    })

    /* smooth jump js ends */



















})