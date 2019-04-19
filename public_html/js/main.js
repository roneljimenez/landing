jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
    }
    
    AOS.init({
        duration: 1000,
        easing: 'ease-out-back'
    });

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width<1300) {
        $(window).scroll(function(){
            var height = $(window).scrollTop();
            if(height > 20) {
                $( "#top-nav" ).addClass('nav-color');
            }
            else {
                $( "#top-nav" ).removeClass('nav-color');
            }
        });
    }

    //funcion para traspasar clase active en menu de terminos y condiciones
    $('.navbar-nav .nav-item a').click(function(e) {

        $('.navbar-nav .nav-item.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        
    });

});

    //Desplegable Menu 
    $('#nav-menu').click(function(){
        $('#right-nav').addClass('fadeInRight').css('right', 0);
        $('#right-nav').removeClass('fadeOutRight');
    });
    //Close Desplegable Menu 
    $('#close-right-nav').click(function(){
        $('#right-nav').addClass('fadeOutRight');
        $('#right-nav').removeClass('fadeInRight');
    });
    //Close Desplegable Menu on scroll
    $(window).on('scroll', function(){
        $('#right-nav').addClass('fadeOutRight');
        $('#right-nav').removeClass('fadeInRight');
    });

    $(function() {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if(width>1200) {
            //onePage Scroll
            var smartscroll = $.smartscroll({
                mode: 'set',
                autoHash: false,
                sectionWrapperSelector: ".section-container",
                sectionClass: "section"
            });
        }
    });

    //mostrar boton volver cuando se hace scroll 
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if(height > 20){
            $(".back-button").show();
        } else {
            $(".back-button").hide();
        }
    });