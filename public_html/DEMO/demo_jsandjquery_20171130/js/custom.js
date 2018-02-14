$(document).ready( function(){

	var weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

	//i++;  
	//i = i + 1
	//i += 1

	//i--
	// i = i - 1
	// i -= 1


	//my scripts go here
	for( var i = 0; i < weekdays.length; i++ ){
		//console.log( [ i, weekdays[ i ] ] )
		appendStuff(i);
	}

	$("#exampleLoop").on("change", function(){
		alert($(this).val())
	})

	function appendStuff(i){
		$("#exampleLoop").append("<option value='"+i+"'>"+weekdays[ i ]+"</option>");
		$("#monitor").append("<div class='day'>:)</div>");
	}


	appendStuff(3)

});