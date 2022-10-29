	//  Closes navbar automatically when anchor is pressed 
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
            $(".navbar-toggler").click();
        });

	// end