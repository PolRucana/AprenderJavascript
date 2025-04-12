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
let texto="hola"
let letras=["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"," "]
let numeros=[2,3,4,5,6,7,8,9,0]

const buscarLetra = (pletra,sletra) =>{
    let numero=""
    let i=0
    while (letras[i].includes(pletra)!=true) {
        i++
    }
    let posicion = letras[i].indexOf(pletra)
    for(j=0;j<posicion+1;j++){
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

console.log(tomarLetra(texto))










