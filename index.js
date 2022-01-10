function parOuimpar() {

    var inNumero = parseInt(document.getElementById("inNumero").value);
    var outResposta = document.getElementById("outResposta");

    if(inNumero % 2 === 0) {
        outResposta.textContent = "A resposta é par";
    }else{
        outResposta.textContent = "A resposta é impar";
    }
    
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", parOuimpar);