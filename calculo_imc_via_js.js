function calcularIMC() {

    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    var imc = peso / (altura * altura);

    var classificacao = "";

    if (imc < 18.5) {

        classificacao = "Magreza";

    } else if (imc >= 18.5 && imc <= 24.9) {

        classificacao = "Normal";

    } else if (imc > 24.9 && imc <= 30) {

        classificacao = "Sobrepeso";

    } else {

        classificacao = "Obesidade";

    }

    document.getElementById("resultado").innerHTML =
        "Seu IMC é de " +
        imc.toFixed(2) +
        " - " + classificacao;

}