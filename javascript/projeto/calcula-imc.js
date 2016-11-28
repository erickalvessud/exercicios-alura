var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs;

botao.addEventListener("click", function(){
    console.log("Algu�m clicou no bot�o!");
});

botao.addEventListener("click", function(){
    console.log("Essa � outra fun��o");
});

botao.addEventListener("click", function(){	
	var trPacientes = document.getElementsByClassName("paciente");

	percorreArray(trPacientes, imprimeEModificaTdDeImc);
});

function imprimeEModificaTdDeImc(trAtual){
	
	var paciente = montaPaciente(trAtual);
	
	var imc = paciente.calculaImc();
	
	var campoIMC = trAtual.getElementsByClassName("info-imc")[0];
		
	campoIMC.textContent = imc;
		
	console.log(imc);
}

var trs = document.getElementsByTagName("tr");
percorreArray(trs, function(trAtual){
	trAtual.addEventListener("mouseover", function(){
		this.setAttribute("bgcolor", "grey");
	});
	trAtual.addEventListener("mouseout", function(){
		this.setAttribute("bgcolor", "white");
	});
});