/* CONDICIONALES IF */
let condicion=7
if (condicion==1) {
    console.log("Es verdadero")
} else {
    console.log("Es falso")
}

/* CONDICIONALES IF MÚLTIPLES */
if (10<3) {
    console.log("1")
} else if (1>5) {
    console.log("2")
} else if (6==7) {
    console.log("3")
} else {
    console.log("4")
}


if (12==12) {
    console.log("1")
    if (13>5) {
        console.log("si voy")
    }
} else {
    console.log("2")
}

/* SWITCH */
let pais="Bolivia"
let descuento=0
switch (pais) {
    case "Argentina":
        descuento=10;
        break
    case "Bolivia":
        descuento=20;
        break
    case "Perú":
        descuento=30;
        break
}
console.log(descuento)