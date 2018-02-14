$(document).ready( function(){


	$("#topBox").animate( {"top":"-=100px"} );

	$("#bottomBox").animate( {"bottom":"-=100px"} );

	$("#fb").click(function(){

		$( this ).velocity("callout.bounce");

	});


});