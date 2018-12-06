
$("html").ready(function(){
	
$("#curiosidades").click(function(){ 
		$("main").slideDown(2000)
		$("#cur").css("display", "flex"),
		$("#cur").fadeOut(0),
		$("#cur").fadeIn(2000),
		$("#fotos").css("display", "none")
	}  
	);

$("footer").click(function(){ 
		$("main").slideUp(2000)
		
		
		
});

$("#galeria").click(function(){
	$("main").slideDown(400),
	$("#fotos").css("display", "flex"),
	$("#fotos").fadeOut(0),
	$("#fotos").fadeIn(2000),
		$("main #cur").css("display", "none")

		     });
			$("#fotos").css("display", "none"),
		   $.getJSON('json/dados.json', function(json) {
		    	for(i = 0; i < 3; i++){
                 $("#fotos").append(`
                 	<picture>
                 		<source srcset="${json.imagens[i].im}" type="image/svg+xml">
  						<img src="${json.imagens[i].im}" class="img-fluid img-thumbnail" alt="...">
  					
            `) }
 });
 

 });



	