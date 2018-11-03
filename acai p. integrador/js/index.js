
$("body").ready(function(){
	
$("#curiosidades").click(function(){ 
		$("main").slideDown(2000)
		$("#cur").css("display", "flex"),
		$("table").css("display", "none")
		
	}  );
$("footer").click(function(){ 
		$("main").slideUp(2000)
		
		
		
});

$("#galeria").click(function(){
	$("main").slideDown(400),
	$("main table").css("display", "flex"),
		$("main #cur").css("display", "none")
});



});


	