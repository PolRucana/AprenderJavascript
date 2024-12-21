/*1
En este script deberás crear un array para guardar los nombres de los 
días de la semana, empezando por 0 para el domingo. Para comprobar el 
funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre 
del día. Se supone que el dato tecleado estará entre 0 y 6*/

/*let semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"]
let numero = 0
console.log(semana[numero])
*/


/*2
Crea un array booleano con dos valores 'verdadero' y 'falso'. Este array 
te sirve para traduicr los valores true y false. Usalo para que el script 
muestre un alert con el nombre vedadero si un usuario teclea un valor entre 
0 y 9 y falso en el caso contrario.*/

/*let varbool = ["Falso","Verdadero"]
let numero = 10
if (numero>=0 && numero<=9) {
    console.log(varbool[1])
} else {
    console.log(varbool[0])
}*/


/*3
Sin usar métodos del objeto array, diseña una función llamada sumaLista() 
capaz de sumar todos los números que forman el array que se le pase como 
argumento.*/

/*function sumalista(lista) {
    let suma =0
    for (let i = 0; i < lista.length; i++) {
        suma = suma + lista[i]
    }
    return suma
}
console.log(sumalista([1,2,3,4,5]))*/


/*4
Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno 
mostrará el array y deberá decir cuantos números son pares y cuantos son impares. La 
entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.

Intenta resolverlo sin usar métodos del objeto array, solo indices y longitudes de arrays.

No debe aceptar valores no numéricos (isNaN(valor) permite detectar valores no numéricos).*/

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


/* 5 
Escribe una función que pueda devolver el valor más pequeño de un array numérico o 
el índice de ese valor. El segundo parámetro de la función dirá si debe devolver el 
valor ("v") o el índice ("i"). No uses métodos del objeto array.

Se supone que el primer parámetro siempre será una matriz llena con al menos 1 número 
y sin duplicados.

Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'
*/

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


/* 6 
Escribe una función que determina si la letra que se le pasa como argumento se 
encuentra contenida dentro de un array de letras que se le pasa como segundo argumento.

Se trata de resolverlo sin usar métodos del objeto array, solo el dato tipo array.*/

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


/* 7 
En este ejempo debes crear una función que reciba como argumento una letra y devuelva 
verdadero o falso (tru o false) dependiendo de si es una vocal o no. Debe funcionar 
igual con mayúsculas y con minúsculas y por supuesto usando arrays.

Solo se aceptan letras internacionales (sin acentos)*/

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


/* 8 
En este ejempo debes crear una función que reciba como argumento una letra y devuelva 
verdadero o falso (tru o false) dependiendo de si es una vocal o no. Debe funcionar 
igual con mayúsculas y con minúsculas y por supuesto usando arrays.

Solo se aceptan letras internacionales (sin acentos)*/

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


/* 9 
Un servicio de atención al ciente tiene establecido turnos semanales para sus empleados 
de manera que cada día de la semana se encarga del servicio  una persona: lunes - María, 
Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.

Usa un array para almacenar los datos del servicio. En este array cada elemento será un 
par día - nombre.

Crea una función que responda con el nombre de la persona encargada del servicio sabiendo 
el día. Si el día no existe deberá decir que no hay servicio. Los nombres de los días deben ir en minúsculas.*/

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


/* 10 
Un tienda vende monitores, teclados y ratones. Los precios se almacenan en una estructura 
array conde cada elemento es un par producto - precio.

Diseña una función que reciba como argumento el nombre de un producto (minúscula) y devuelva 
su precio.*/

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
