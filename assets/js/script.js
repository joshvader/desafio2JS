let imagen = document.getElementById("image");

function toggleBorder() {
    let borderRojo = imagen.classList.contains("border-red");
    
    
    if (borderRojo) {
        imagen.classList.remove("border-red");
    }
    else {
        imagen.classList.add("border-red");
    }
}

//Calcular Stickers
function calcularStickers() {
    let sticker1 = document.getElementById("sticker1").value;
    let sticker2 = document.getElementById("sticker2").value;
    let sticker3 = document.getElementById("sticker3").value;

    let totalStickers = parseInt(sticker1) + parseInt(sticker2) + parseInt(sticker3);

    if (totalStickers <= 10) {
        document.getElementById("resultado").innerHTML = "Llevas " + totalStickers + " stickers";
    }
    else {
        document.getElementById("resultado").innerHTML = "No puedes llevar mas de 10 stickers";
    }
}

//Ingresar Password
function checkPassword() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let password3 = document.getElementById("password3").value;

    if (password1 === "9" && password2 === "1" && password3 === "1") {
        document.getElementById("passwordResult").innerHTML = "Password correcto";
    }
    else if (password1 === "7" && password2 === "1" && password3 === "4") {
        document.getElementById("passwordResult").innerText = "Password 2 correcto";
    } else {
        document.getElementById("passwordResult").innerText = "Password incorrecto";
    }
}