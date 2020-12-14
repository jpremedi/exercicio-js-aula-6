function CalculoIMC() {
    //pegar os valores de peso e altura
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //calcular o IMC --> PESO / (ALTURA * ALTURA)
    let imc = peso / (altura * altura);
    console.log(imc);

    //VERIFICAR SE O IMC < 20
    if (imc < 20) {
        //SE FOR, MOSTRAR MAGRO
        document.getElementById("mensagem").innerText = "Só a capa da gaita";
        document.getElementById("imagem").src="images/caveira.gif";
    }

    else if (imc >= 25) {
        //SE FOR, MOSTRAR "SOBREPESO"
        document.getElementById("mensagem").innerText = "Sobrepeso";
        document.getElementById("imagem").src="images/acima_do_peso.gif";

    }
    //SE NÃO, MOSTRAR "OK"
    else {
        document.getElementById("mensagem").innerText = "OK";
        document.getElementById("imagem").src="images/forte.gif";
    }
}