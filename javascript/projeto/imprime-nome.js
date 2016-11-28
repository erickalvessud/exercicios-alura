var trPacientes = document.getElementsByClassName("paciente");

percorreArray(trPacientes, function (trAtual){
	
	var paciente = montaPaciente(trAtual);
	//só imprimindo nome do paciente                        
    console.log(paciente.nome);  
});
