var trPacientes = document.getElementsByClassName("paciente");

percorreArray(trPacientes, function (trAtual){
	
	var paciente = montaPaciente(trAtual);
	//s� imprimindo nome do paciente                        
    console.log(paciente.nome);  
});
