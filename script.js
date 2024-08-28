/* CONDICIONALES IF */
/*let condicion=7
if (condicion==1) {
    console.log("Es verdadero")
} else {
    console.log("Es falso")
}*/

/* CONDICIONALES IF MÚLTIPLES */
/*if (10<3) {
    console.log("1")
} else if (1>5) {
    console.log("2")
} else if (6==7) {
    console.log("3")
} else {
    console.log("4")
}*/


/*if (12==12) {
    console.log("1")
    if (13>5) {
        console.log("si voy")
    }
} else {
    console.log("2")
}*/

/* SWITCH */
/*let pais="Bolivia"
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
console.log(descuento)*/

/* CICLO FOR */
/*for (let number = 1; number<=12; number++) {
    let table=1
    let resultado=table+" x "+number+" = "+table*number
    console.log(resultado)
}*/
let almacen=""
for (let newtabla = 1; newtabla<=12; newtabla++) {
    for(let newnumber=1;newnumber<=12;newnumber++){
        let resultado=newtabla+" x "+newnumber+" = "+newtabla*newnumber
        /*console.log(resultado)*/
        almacen = almacen+resultado+"\n"
        
    }
    
}
console.log(almacen)
