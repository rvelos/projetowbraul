
$("body").ready(function(){
	
$("#curiosidades").click(function(){ 
		$("main").slideDown(2000)
		$("main p").css("display", "block"),
		$("table").css("display", "none")
		
	}  );
$("footer").click(function(){ 
		$("main").slideUp(2000)
		
		
		
});

$("#galeria").click(function(){
	$("main").slideDown(400),
	$("main table").css("display", "block"),
		$("main p").css("display", "none")
});



});


	