	// animates anchor scrolling
	$(document).ready(function(){
	  $("a").on('click', function(event) { 
		if (this.hash !== "") {    
		  event.preventDefault();    
		  var hash = this.hash;   
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 1600, function(){  
			window.location.hash = hash;
		  });
		}
	  });
	});
	// end