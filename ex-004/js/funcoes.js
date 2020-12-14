function MetrosParaCentimetros() {
    let metros = document.getElementById("metros").value;
    let centimetros = metros * 1000;
    document.getElementById("resultado").innerText = "Centimetros: " + centimetros;

    document.getElementById("metros").value = "";
}