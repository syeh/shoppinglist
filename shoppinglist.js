// enter text into input (capture)
// click enter and add a new item
// if they dont like they can strike out or delete item

$(document).ready(function () {
	$("input[type='button']").on("click", function() {
		var item = $("input[type='text']").val();
		$("ol").append("<li>"+ item+"<input type='checkbox'></li>");		
	});
	$("input[type='text']").keyup(function(event) {
	  
	   if(event.keyCode == 13) {
	   
		  $("input[type='button']").click(); 
	   }
   });

});
