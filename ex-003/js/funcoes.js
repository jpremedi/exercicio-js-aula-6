function Salvar() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    document.getElementById("agenda").innerHTML += "<li>" + nome + " - " + telefone + "</li>";

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";

    document.getElementById("nome").focus();
}