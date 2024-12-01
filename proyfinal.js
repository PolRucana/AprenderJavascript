/*
Crear
Modificar
Eliminar
Listar
*/

let notas=[]

function crear(minota) {
 notas.push(minota)
 return true
}

function modificar(minota) {
    if (minota<1 && minota>notas.length+1) {
        notas[minota-1] = prompt("Nueva nota: ")
        return true
    } 
    return false
}

function eliminar(minota) {
    notas.splice(minota-1,1)
    return true
}

function listar() {
    let milista=""
    for (let i = 0; i < notas.length; i++) {
    milista = milista+(i+1)+"  "+notas[i]+"\n"
    }
    alert("N°  Nota\n"+milista)
    return true
}

function opciones(valor){
    if(valor==1){
        let nota = prompt("Escriba nota nota: ")
        return crear(nota)
    }
    if (valor==2) {
        let nota = parseInt(prompt("¿Que número modificará?: "))
        return modificar(nota)
    }
    if (valor==3) {
        let nota = parseInt(prompt("¿Que número eliminará?: "))
        return eliminar(nota)
    }
    if(valor==4){
        return listar()
    }
    return false
}

function main() {
    while (true) {
        let opcion = parseInt(prompt("Opciones:\n1. Crear\n2. Modificar\n3. Eliminar\n4. Listar\n5. Salir"))
        if (opcion==5) {
            alert("Nos vemos")
            break
        }
        let captura = opciones(opcion)
        if (captura==true) {
            alert("Lista Actualizada")
        } else {
            alert("Valor incorecto")
        }
    }
}

main()