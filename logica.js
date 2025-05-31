/*########### EJERCICIO 1 ##############
RETIRO DE UN CAJERO AUTOMÁTICO
Ejemplo: Si el usuario solicita 320, el cajero entregará 3 billetes de 100
y 1 de 20
-Ahora suponiendo que no tienes billetes de 100 sino solo de 50y 20, entregará 
6 de 50 y 2 de 10.
- En este ejercicio el cajero solo cuenta con 1350 para entregar con las 
siguientes denominaciones:
3 billetes de 100
6 billetes de 50
10 billetes de 20
50 billetes de 10
50 monedas de 1
*/

/******************** 1RA FORMA: MI MANERA ************/

/*let valor =[100,50,20,10,1]
let cantidad =[15,10,15,20,50]
let total,voucher=""

function updatemonto(){
    total = 0
    for(let i=0;i<valor.length;i++){
        total = total + valor[i]*cantidad[i]
    }
}
updatemonto()

const retirar = (monto) =>{
    if(monto>total) return false
    for(let i=0;i<valor.length;i++){
        if(monto>=valor[i] && cantidad[i]>0){
            let cant = Math.trunc(monto/valor[i])
            monto = monto -cant*valor[i]
            cantidad[i]=cantidad[i]-cant
            voucher = voucher+cant+" de "+valor[i]+" soles\n"
            
        }
    }
    updatemonto()
    return voucher
}

console.log(retirar(755))
*/


/************************* 2DA FORMA: EDTEAM *****************/

/*const LlaveValor = {
    100:3,
    50: 6,
    20: 10,
    10: 50,
    1:50
}
const obtenerBilletes = Object.keys(LlaveValor)
const billetes = obtenerBilletes.sort((a,b) => b-a)

const dineroTotal = () =>{
    let sumaDinero = 0
    billetes.forEach((valor)=>{
        sumaDinero += valor*LlaveValor[valor]
    })
    return sumaDinero
}

const capturarCantidad = (monto,billete) =>{
    let cantidad = Math.trunc(monto/billete)
    if (cantidad>LlaveValor[billete]) {
        cantidad = LlaveValor[billete]
    }
    LlaveValor[billete] -= cantidad
    return cantidad
}

const entregarDinero = (monto) =>{
    if (monto>dineroTotal()) {
        console.log("No hay dinero suficinete")
        return
    }
    let mimonto = monto
    while(mimonto>0){
        let cantidad = 0
        for(let i=0;i<billetes.length;i++){
            cantidad = capturarCantidad(mimonto,billetes[i])
            console.log(`${cantidad} billetes de ${billetes[i]} soles`)
            mimonto -= cantidad*billetes[i]
        }
    }
}

entregarDinero(551)
*/



/*########### EJERCICIO 2 ##############
ALGORITNO TODOS CONTRA TODOS
NOs gustaría tener un programa que pueda organizar todos los partidos de un campeonato 
"todos contra todos". Si tenemos una lista de equipos, el programa deberá crear un listado
de partidos de cada ronda de enfrentamientos, de tal manera que todos los equipos puedan jugar
contra todos los rivales posibles una sola vez.
Si el numeros participantes es impar, un equipo deberá descansar en cada ronda de partidos
*/

/*let equipos = ["a","b","c","d","e"]
if(equipos.length%2!=0){
    equipos.push("Descanso")
}
let cantFechas = equipos.length - 1
let cantPartidos = (equipos.length)/2
let arriba = equipos.slice(1)
let abajo = equipos.slice(1)

const moverPosicion = (n) =>{
    if (n==0) {
        arriba.splice(arriba.length,0,arriba[0])
        arriba.shift()
        return arriba
    }
    abajo.splice(0,0,abajo[abajo.length-1])
    abajo.pop()
    return abajo
}


const formarEquipos = () =>{
    let l=0
    let a3=[],a2=[],a1=[],up=[],down=[]
    while (l<cantPartidos) {
        if(l!=0){
            up = moverPosicion(0)
            down = moverPosicion(1)
        }
        for (let i=0; i<cantFechas; i++) {
            if (l==0) {
                a3.push(equipos[0])
                a3.push(equipos[i+1])
                a2.push(a3)
                a1.push(a2)
                a3=[]
                a2=[]  
            }else{    
                a3.push(up[i])
                a3.push(down[i])
                a1[i].push(a3)
                a3=[]
            }
        }
        l++
    }
    return a1
}

console.log(formarEquipos())*/


/************************* 2DA FORMA: EDTEAM *****************/
/*const participantes =["Juan","Pedro","Jorge"]
const sorteo = equipos =>{
    if(equipos.length%2!=0){
        equipos.push("Descansa")
    }
    let fixture = []
    let rivales = equipos.length - 1
    let partidos = equipos.length/2

    for(let i=0;i<rivales;i++){
        fixture[i]=[]
        for(let j=0;j<partidos;j++){
            fixture[i].push([equipos[j],equipos[rivales-j]])
        }
        equipos.splice(1,0,equipos.pop())
    }
    return fixture
}

console.log(sorteo(participantes))*/


/*########### EJERCICIO 3 ##############
MENSAJE DE TELEFONO ANTIGUO
Simularemos un celular antiguo. Las letras se asignan a los digitos como se muestra a 
continuación:
-Para insertar el caracter "b" el programa debe presionar 22.
-Para insertar dos caracteres en secuencia de la misma tecla, el usuario debe hacer
una pausa antes de pulsar la tecla por segunda vez. El caracter de espacio "" debe ser impreso
para indicar una pausa. por ejemplo:
2 2=>"aa"
22=>"b"
*/
/*let texto="la hora"
let letras=["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"," "]
let numeros=[2,3,4,5,6,7,8,9,0]

const buscarLetra = (pletra,sletra) =>{
    let numero=""
    let i=0
    while (letras[i].includes(pletra)!=true) {
        i++
    }
    let posicion = letras[i].indexOf(pletra)
    for(let j=0;j<posicion+1;j++){
        numero = numero + numeros[i]
    }
    if (letras[i].includes(pletra)===letras[i].includes(sletra)){
        numero = " "+numero
    }
    return numero
}

const tomarLetra = (texto) =>{
    let cadenafinal = ""
    for(let i=0;i<texto.length;i++){
        cadenafinal=cadenafinal + buscarLetra(texto[i],texto[i-1])
    }
    return cadenafinal
}

console.log(tomarLetra(texto))*/


/************************* 2DA FORMA: EDTEAM *****************/
/*let numpad = {
    0:" ",
    1:"",
    2:"abc",
    3:"def",
    4:"ghi",
    5:"jkl",
    6:"mno",
    7:"pqrs",
    8:"tuv",
    9:"wxyz"
}

const buscanumero = (letra,letra2) =>{
    let numero = Object.keys(numpad)
    let resultado = ""
    numero.forEach(num =>{
        for(let i=0;i<numpad[num].length;i++){
            if (letra === numpad[num][i]) {
                for(let j=0;j<=i;j++){
                    resultado = `${resultado}${num}`
                }
                if (numpad[num].includes(letra) == numpad[num].includes(letra2)) {
                    resultado = " "+resultado
                }
            }
        }
    })
    return resultado
}

const convertirtexto = texto =>{
    let respuesta = ""
    for(let i=0;i<texto.length;i++){
        respuesta = `${respuesta}${buscanumero(texto[i],texto[i-1])}`
    }

    return respuesta
}

console.log(convertirtexto("la hora"))
*/


/*########### EJERCICIO 4 ##############
CONTRASEÑAS RANDOM
Vamos a crear un algoritmo  que permite generar contraseñas aleatorias contemplando diferentes
parámetros para generar la contraseña: letras minúscuas, mayúsculas, números y caracteres
especiales, además el tamaño de la contraseña tendra la longitud mínima de 7
*/

/*let minuscula=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
let mayuscula=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numero=["0","1","2","3","4","5","6","7","8","9"]
let carespeciales=[",",";",".","-","_","#","$","%","&","/","(",")","=","?","¡","*","[","]","{","}"]

const encontrarValor = (eltamaño,elarray) =>{
    let arrayDesord = []
    for(let i=0;i<eltamaño;i++){
        let buscar = Math.trunc(Math.random()*elarray.length)
        arrayDesord.push(elarray[buscar])
    }
    return arrayDesord
}

const sumarSiNo = (may,num,car) =>{
    let misValores = [may,num,car]
    let miSuma=0
    misValores.forEach(valor=>{
        if(valor=="si")
            miSuma=miSuma+1
    })

    return miSuma
}

const crearPass = (may,num,car,tamaño) =>{

    let miSuma= sumarSiNo(may,num,car)
    let desorden = []
    let vaMin = Math.trunc(Math.random()*(tamaño-miSuma)) + 1
    desorden.push(encontrarValor(vaMin,minuscula))
    miSuma = miSuma-1
    tamaño = tamaño-vaMin
    
    let vaMay,vaNum,vaCar
    if (may!="no") {
        vaMay = Math.trunc(Math.random()*(tamaño-miSuma)) + 1
        tamaño = tamaño-vaMay
        miSuma=miSuma-1
        
        desorden.push(encontrarValor(vaMay,mayuscula))
    }
    if (num!="no") {
        vaNum = Math.trunc(Math.random()*(tamaño-miSuma)) + 1
        tamaño = tamaño-vaNum
        miSuma=miSuma-1
        
        desorden.push(encontrarValor(vaNum,numero))
    }
    if (car!="no") {
        desorden.push(encontrarValor(tamaño,carespeciales))
    }
    return desorden

}

const juntarElmentos = (arrdes) =>{
    let ordenar = [], arrfinal=""
    arrdes.forEach(valor => {
        valor.forEach(elemento => {
            ordenar.push(elemento)
        });
    });
    let miTamaño=ordenar.length
    for(let i=0;i<miTamaño;i++){
        let modtamaño= ordenar.length
        let tomarValor= Math.trunc(Math.random()*modtamaño)
        arrfinal=arrfinal+ordenar[tomarValor]
        ordenar.splice(tomarValor,1)
    }
    return arrfinal
}
console.log(juntarElmentos(crearPass("si","si","si",10)))
*/



/************************* 2DA FORMA: EDTEAM *****************/
/*const generar = () =>{
    let tam = prompt("Tamaño de pass: ")
    let may = prompt("Mayúsculas: si/no")
    let num = prompt("Números: si/no")
    let car = prompt("Caracteres: si/no")
    let pass=""

    let minusculas = "abcdefghijklmnopqrstuvwxyz"

    if (may==="si") {
        minusculas=minusculas+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (num==="si") {
        minusculas=minusculas+"0123456789"
    }
    if(car==="si") {
        minusculas=minusculas+".,/()#$%&*+{]"
    }

    for (let i = 0; i < tam; i++) {
        pass = pass + minusculas[Math.trunc(Math.random()*minusculas.length)]
    }

    return pass
}*/



/*########### EJERCICIO 5 ##############
ALGORITMO DE CIFRADO CESAR
El algoritmo de encriptación cesar lo que hace es que tienes un mensaje, palabra o hasta un libro
y se encarga de encriptar (aplicar un algoritmo para codificar) la información por medio del desplazamiento
*/

/* #############################  FORMA 1 ####################################*/

/*let miarr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
const cifrar = (frase,despla)=>{
    let encriptar=""
    let c=0
    while (c<frase.length) {
        if (frase[c]===" ") {
            encriptar = encriptar+" "
        }else{
            for (let i = 0; i < miarr.length; i++) {
            if (frase[c] === miarr[i]) {
                if((i+1+despla)>miarr.length){
                    let j=despla-(miarr.length-(i+1))-1
                    encriptar = encriptar + miarr[j]
                }else{
                    encriptar = encriptar + miarr[i+despla]
                }
                i=27
            }
        }
        }
        c++
    }
    return encriptar
}
console.log(cifrar("holax mundo",4))*/


/* ###############################  FORMA 2 ####################################*/

let miarr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
const cifrar = (frase,despla)=>{
    let encriptar=""
    let c=0
    while (c<frase.length) {
        if (frase[c]===" ") {
            encriptar = encriptar+" "
        }
        if (miarr.includes(frase[c])===true) {
            let pos = miarr.indexOf(frase[c])
            if ((pos+1+despla)>miarr.length) {
                let j = despla - (miarr.length - (pos+1)) - 1
                encriptar=encriptar+miarr[j]
            } else {
                encriptar=encriptar+miarr[pos+despla]    
            }       
        }
        c++
    }
    return encriptar
}

console.log(cifrar("holaz mundo",5))