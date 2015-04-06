$(document).ready(function(){
    
    $("img[class^='scroll-']").on('click', function(e) {
    // prevents the default action of the link
    e.preventDefault();
    // assigns the text of the clicked-link to a variable for comparison purposes
    var currentClass = $(this).attr('class');
    
    if (currentClass == "scroll-u"){
        $('html, body').animate({
        scrollTop: $("#navbar").offset().top
    }, 500);
    }
    else if (currentClass == "scroll-r"){
        
    }else if (currentClass == "scroll-l"){
        
    }else{
        
    }
});
    
    
    
    /* This is basic - uses default settings */


	
	$("a.fancybox-img").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
        'closeClick'    :   true
	});

});

