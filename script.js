/************** CONDICIONALES IF *********************/
/*let condicion=7
if (condicion==1) {
    console.log("Es verdadero")
} else {
    console.log("Es falso")
}*/

/*************** CONDICIONALES IF MÚLTIPLES ************/
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

/******************** SWITCH ****************************/
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

/************************* CICLO FOR *******************/
/*for (let number = 1; number<=12; number++) {
    let table=1
    let resultado=table+" x "+number+" = "+table*number
    console.log(resultado)
}*/

/*let almacen=""
for (let newtabla = 1; newtabla<=12; newtabla++) {
    for(let newnumber=1;newnumber<=12;newnumber++){
        let resultado=newtabla+" x "+newnumber+" = "+newtabla*newnumber*/
        /*console.log(resultado)*/
        /*almacen = almacen+resultado+"\n"
        
    }
    
}
console.log(almacen)*/

/*for(let mynumber=0;mynumber<=12;mynumber++){
    if (mynumber%2==0) {
        console.log(mynumber)
    } else {
        console.log("impar")
    }
}*/

/******************** CICLO WHILE  **************************/
/*let edad=1
while (edad<=18) {
    console.log(edad+" Es menor de edad")
    edad++
}
console.log(edad+" Es mayor de edad")*/


/****************** EJERCICIO FINAL DE CICLOS ******************/
/**************   TABLA DE AJEDREZ V1    *************/

/*let columna=""
for(let numcolumn=1;numcolumn<=8;numcolumn++){
    let fila=""
    for(let numrow=1;numrow<=8;numrow++){
        if (numcolumn%2!=0) {
            if(numrow%2==0){
                fila = fila+" X "
            }
            else{
                fila = fila+" O "
            }
        } else {
            if(numrow%2==0){
                fila = fila+" O "
            }
            else{
                fila = fila+" X "
            }
        }
    }
    columna=columna+fila+"\n"
}

console.log(columna)*/



/**************   TABLA DE AJEDREZ V2   *************/
/*let col=""
for (let mycol = 1; mycol <= 8; mycol++){
    let row=""
    for (let myrow=1; myrow <= 8; myrow++) {
        if ((mycol+myrow)%2==0) {
            row=row+" O "
        } else {
            row=row+" X "   
        }
    }
    col=col+row+"\n"
}
console.log(col)*/


/**********  EJERCICIO FINAL  *************/

/*function cajero() {
    let saldo=2100
    while(true){
        let opciones = parseInt(prompt("Cajero:\n1. Ver saldo\n2. Depositar\n3. Retirar\n4. Salir"))
        if(opciones==4){
            alert("Hasta luego")
            break
        }
        if(opciones==1){
            alert(saldo)
        }else if (opciones==2) {
            let addsaldo=parseInt(prompt("Depositar: "))
            saldo = saldo + addsaldo 
        } else if (opciones==3) {
            let remove=parseInt(prompt("Retirar: "))
            if (remove>saldo) {
                alert("Saldo insuficiente")
            } else {
                saldo=saldo-remove    
            }
        } else {
            alert("Opción incorrecta")
        }
    }   
}*/