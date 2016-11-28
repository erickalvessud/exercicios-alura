function montaPaciente(trAtual){
	var nome = trAtual.getElementsByClassName("info-nome")[0].textContent;       
	var peso = trAtual.getElementsByClassName("info-peso")[0].textContent;
	var altura = trAtual.getElementsByClassName("info-altura")[0].textContent;
	
	var paciente = {
		nome : nome, 
		peso:peso,
		altura:altura,
		calculaImc : function(){    
			if (this.altura != 0) {
				var imc = this["peso"] / (this.altura * this.altura);
				return imc;
			} else {
				console.log("Não posso executar uma divisão por 0!");
			}
		}
	};
	
	return paciente;
}