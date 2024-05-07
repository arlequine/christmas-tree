const altura = 10;

// Primer fila con solo una estrella
console.log(" ".repeat(altura - 2) + "*");

// Iterar para las siguientes filas
for (let i = 2; i <= altura; i++) {
    let espacios = " ".repeat(altura - i);
    let cuerpos = "0".repeat((i - 1) * 2 - 1);
    console.log(espacios + "" + cuerpos + "");
}