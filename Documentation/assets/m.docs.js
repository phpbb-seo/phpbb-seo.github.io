if (window.jQuery) {  
	 $('a.scroll-link').bind('click', function(e) {
		
		e.preventDefault();
			 
		var target = $(this).attr("href");
						
		$('html, body').stop().animate({ scrollTop: $(target).offset().top }, 1000, function() {
				 location.hash = target;
		});
						
		return false;
	});
  
	
	
	
	$(document).on("scroll", function() {
		$("#scroll-top-button").toggleClass("visible", $(document).scrollTop() >= 150);
		
		$.each( $('#content .row'), function() {
			
			if ( $(document).scrollTop() >= ( $(this).offset().top - 325 ) )   {
				
				$('.scroll-link.active').removeClass("active");
				
				element_id = "#" + $(this).attr('id');
				
				$.each( $('.scroll-link'), function( el, val ) {
					if ( ( $( $('.scroll-link')[el] ).attr('href') ) == element_id ) {
	
						$('.scroll-link.active').removeClass("active");
						$( $('.scroll-link')[el] ).addClass("active");
	
						}
						
				});
			}
		});

	});
}
