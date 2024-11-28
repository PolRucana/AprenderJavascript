/*1*/
/*let semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"]
let numero = 0
console.log(semana[numero])
*/


/*2*/
/*let varbool = ["Falso","Verdadero"]
let numero = 10
if (numero>=0 && numero<=9) {
    console.log(varbool[1])
} else {
    console.log(varbool[0])
}*/


/*3*/
/*function sumalista(lista) {
    let suma =0
    for (let i = 0; i < lista.length; i++) {
        suma = suma + lista[i]
    }
    return suma
}
console.log(sumalista([1,2,3,4,5]))*/


/*4*/
/*FORMA 1*/
/*let sumaimpar=0
let sumapar=0
let numero = 1
let numeroarray=[]
while (numero>=1) {
  numero = parseInt(prompt("Ingrese numero: "))
  numeroarray.push(numero)
}
for(let i=0;i<numeroarray.length;i++){
    if (numeroarray[i]%2==0) {
        sumapar = sumapar + 1
    }else{
        sumaimpar = sumaimpar +1
    }
}

alert("MI cadena es: "+numeroarray)
alert("Pares: "+sumapar+" Impares: "+sumaimpar)
*/

/*FORMA 2*/
 /*let milista=[]
 let numero=1
 let cont=0,contpar=0,contimpar=0
 while(numero>=1){
    numero = parseInt(prompt("Ingrese número: "))
    if (numero>=1) {
        milista[cont] = numero
        cont++
    }
 }
 for (let i = 0; i < milista.length; i++) {
    if(milista[i]%2==0){
        contpar++
    }else{
        contimpar++
    }
 }
alert(milista+"\n"+"Par: "+contpar+"\n"+"Impar: "+contimpar)*/


/* 5 */

/*function valorindice(menor,indice) {
    let valormenor = menor[0]
    let valorindice
    for (let i = 0; i < menor.length; i++) {  
        if (menor[i]<=valormenor) {
            valormenor=menor[i]
            valorindice = i
        }
    }
    if (indice=="v") {
        console.log("El menor es: "+valormenor)
    } else {
        console.log("El índice es: "+valorindice)
    }
}

valorindice([10,2,0,1,25,0],"i")*/


/* 6 */

/*function buscar(valor,miarray){
    let respuesta
    for(let i=0;i<miarray.length;i++){
        if(valor==miarray[i]){
            respuesta = true
        }else{
            respuesta = false
        }

        if (respuesta==true) {
            i=miarray.length
        }
    }
    console.log(respuesta)
}*/

/*function buscar(valor,miarray) {
    let i=0
    while (miarray[i]!=valor && i<miarray.length) {
        i++
    }
    return(i<miarray.length)
}

buscar("f",["a","b","c","d"])*/


/* 7 */

/*function vocales(vocal) {
 let listavocales = ["a","e","i","o","u","A","E","I","O","U"]
 let resultado
 for (let i = 0; i < listavocales.length; i++) {
    if (listavocales[i]==vocal) {
        resultado=true
        i=listavocales.length
    } else {
        resultado=false
    }
 }
 console.log(resultado)    
}*/

/*function vocales(vocal) {
    let listavocales = ["a","e","i","o","u","A","E","I","O","U"]
    let i;
    for (i = 0; i < listavocales.length; i++) {
        if(listavocales[i]==vocal){
            break
        }
    }
    return(i<listavocales.length)
}
vocales("t")*/


/* 8 */

/*function micadena(cadena) {
    let i=0
    let cadenafinal=""
    while (i<cadena.length) {
        cadenafinal=cadenafinal+cadena[i]+"-"
        i++
    }
    console.log(cadenafinal)
}
micadena(["a","b","c","d"])*/


/* 9 */

/*function semana(dia) {
   let arraydia = ["Lunes","Martes","Miercoles","Jueves","Viernes"]
   let arraynombre = ["juan","robert","carlos","beto","lucas"] 
   let nombre

   for(let i=0;i<arraydia.length;i++){
    if (arraydia[i]==dia) {
        nombre = arraynombre[i]
        i=arraydia.length
    }
   }
   console.log("el encargado es: "+nombre)
}
semana("Martes")*/

/*function semana(dia) {
    let dianombre = [["lunes","juan"],["martes","pedro"],["miercoles","jose"],["jueves","julio"],["viernes","pablo"]]
    let nombre="No existe"
    for(let i=0;i<dianombre.length;i++){
        if (dianombre[i][0]==dia) {
            nombre=dianombre[i][1]
            break
        }
    }
    return nombre
}

console.log("El nombre es: "+semana("junio"))*/


/* 10 */

/*function productoprecio(producto) {
    let arrayproducto = ["maiz","arroz","aceite","papa"]
    let arrayprecio = ["10","20","15","40"]
    let precio="No tiene precio"
    for(let i=0;i<arrayproducto.length;i++){
        if (producto==arrayproducto[i]) {
            precio=arrayprecio[i]
            i=arrayproducto.length
        }
    }
    console.log("Precio: "+precio)
}

productoprecio("aceite")*/

/*function productoprecio(producto){
    let arraypropre = [["maiz","10"],["arroz","15"],["aceite","20"],["papa","5"]]
    let precio="No tiene precio"
    for(let i=0;i<arraypropre.length;i++){
        if (producto==arraypropre[i][0]) {
            precio=arraypropre[i][1]
            break
        }
    }
    return precio
}
console.log(productoprecio("aceite"))*/
