// enter text into input (capture)
// click enter and add a new item
// if they dont like they can strike out or delete item

$(document).ready(function () {
	$("input[type='button']").on("click", function() {
		var item = $("input[type='text']").val();
		$("ol").append("<li style='display:none;'>"+ item+"<input type='checkbox'></li>");
        $("li:last").show("clip");
	});
	$("input[type='text']").keyup(function(event) {
	  
	   if(event.keyCode == 13) {
	   
		  $("input[type='button']").click(); 
	   }
   });
   $("ol").on("click", "input[type='checkbox']", function() {
	   $(this).parent().remove();   
   });
});
