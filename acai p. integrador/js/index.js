
$("body").ready(function(){
	
$("#curiosidades").click(function(){ 
		$("main").slideDown(2000)
		$("#cur").css("display", "flex"),
		$("table").css("display", "none")
	}  
	);

$("footer").click(function(){ 
		$("main").slideUp(2000)
		
		
		
});

$("#galeria").click(function(){
	$("main").slideDown(400),
	$("main table, tr").css("display", "flex"),
		$("main #cur").css("display", "none"),
		    $.getJSON('json/dados.json', function(json) {
                 $("tr").append(`
            <td><img src="${dados.imagens}"></td>
            `)
          console.log(dados.imagens);
    
      });
});





//Valor retornado: Verde Amarelo Azul Branco
cores = ["Verde", "Amarelo", "Azul", "Branco"];
 
function imprimir(item) {
    console.log(item); 
}
 
cores.forEach(imprimir);

 });



	