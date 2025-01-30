//#1 EL FAMOSO "FIZZ BUZZ"
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/*let newi, cadena=""
for(let i=1;i<=100;i++){
    newi = i
    if (newi%3==0 && newi%5==0) {
        newi="fizzbuzz"
    }
    if(newi%3==0){
        newi="fizz"
    }
    if (newi%5==0) {
        newi="buzz"
    }

    cadena = cadena+" "+newi+"\n"
}
console.log(cadena)*/



//#2 ¿ES UN ANAGRAMA?
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

//FORMA 1

/*const anagrama = (cadena1,cadena2) =>{

let newcadena1 = []
let newcadena2 = []
if(cadena1 == cadena2) return false
if(cadena1.length != cadena2.length) return false
for (let i = 0; i < cadena1.length; i++) {
   let valor = false
   for (let j = 0; j < cadena2.length; j++) {
    if(cadena1[i]==cadena2[j]){
        valor = true
        newcadena1.push(valor)
    }
   }
   if (valor==false) {
    newcadena1.push(valor)
   }
}
console.log(newcadena1)
for (let i = 0; i < cadena2.length; i++) {
    let valor = false
    for (let j = 0; j < cadena1.length; j++) {
     if(cadena2[i]==cadena1[j]){
         valor = true
         newcadena2.push(valor)
     }
    }
    if (valor==false) {
     newcadena2.push(valor)
    }
}
console.log(newcadena2)

let a=0,valorfinal = true
while (a<newcadena1.length) {
    if (newcadena1[a]==false || newcadena2[a]==false) {
        valorfinal=false
        a=newcadena1.length
    }
    a++
}

if(valorfinal==true){
    return true
}
return false
}

console.log(anagrama("ramor","amorr"))*/


//FORMA 2

/*const anagrama = (cadena1,cadena2) =>{
    if(cadena1 == cadena2) return false
    if(cadena1.length != cadena2.length) return false
    if(cadena1.toLowerCase().split("").sort().join() == cadena2.toLowerCase().split("").sort().join()) return true
    return false
}
console.log(anagrama("raoma","aroma"))*/

//FORMA 3

/*const anagrama = (cadena1,cadena2) =>{
    if(cadena1 == cadena2) return false
    if(cadena1.length != cadena2.length) return false

    return cadena1.toLowerCase().split("").sort().join() == cadena2.toLowerCase().split("").sort().join()
}
console.log(anagrama("raomaa","aromax"))*/


//#3 COMBINAR 2 ARRAY'S ORDENADOS
/*
Implemente un algoritmo capaz de combinar dos arrays ordenandos, obteniendo
un array ordenado
- Analice el orden de su algoritmo
- Implemente un algoritmo, sin usar metodos propios de javascript
*/

const combinar = (arra1,arra2) =>{
    let newarr =[]
    //también puede ir el while de abajo, si uno llega a 0 te da false y corta
    //while(arra1.length && arra2.length)
    while (arra1.length!=0 && arra2.length!=0) {
        let primerelemento
        if (arra1[0]<arra2[0]) {
            primerelemento = arra1.shift()
        } else {
            primerelemento = arra2.shift()
        }
        newarr.push(primerelemento)
    }
    newarr = newarr.concat(arra1).concat(arra2)
    return newarr
}
console.log(combinar([1,2,3,4,5],[4,5,6,7,8]))


/*let arr = [8,11,2,7,1,6,80,-2,-30,5,7,4,100,10000,-98,4]
for(let j=0;j<arr.length;j++){
    for(let i=0;i<arr.length;i++){
        let a=arr[i]
        let b=arr[i+1]
        if (arr[i]>arr[i+1]) {
            arr[i]=b
            arr[i+1]=a
        }
    }
}
console.log(arr)*/