document.getElementById('noites').addEventListener('input', calculaOrcamento);
document.getElementById('convidados').addEventListener('input', calculaOrcamento);
document.getElementById('promo').addEventListener('input', calculaOrcamento);

function calculaOrcamento() {
	const noites = parseInt(document.getElementById("noites").value);
	const convidados = parseInt(document.getElementById("convidados").value);
	const promo = document.getElementById("promo").value;
	
	const valorPadrao = 99;
	
	const listaPromo = ["sALS10", "ZoNA10", "FIoR10"];
	
	if (!isNaN(noites) && !isNaN(convidados) && listaPromo.includes(promo)) {
		const resultado = ((noites * valorPadrao) + (convidados * 10)) * 0.9; 
		document.getElementById("resultado").innerText = "Orçamento estimado: R$ " + resultado.toFixed(2) + " [DESCONTO APLICADO]";
	}
	else if (!isNaN(noites) && !isNaN(convidados)) {
		const resultado = (noites * valorPadrao) + ((convidados * 10) * noites);
		document.getElementById("resultado").innerText = "Orçamento estimado: R$ " + resultado.toFixed(2);
	} 
	else if (!isNaN(noites)) {
		const resultado = noites * valorPadrao;
		document.getElementById("resultado").innerText = "Orçamento estimado: R$ " + resultado.toFixed(2);
	} 
	else {
		document.getElementById("resultado").innerText = "";
	}
}

function exibirMensagem() {
    event.preventDefault();
    alert("Reserva concluída. Você receberá o comprovante por email. Obrigado!");
	document.getElementById("meuFormulario").reset();
}