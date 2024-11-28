let saldo=1000

function depositar(valor){
    saldo = saldo + valor
    return true
}

function retirar(valor) {
    if (valor>saldo) {
        return false
    }
    saldo = saldo - valor
    return true
}

function opciones(accion) {
    if (accion=="1") {
        let monto = parseInt(prompt("Ingrese monto a depositar: "))
        return depositar(monto)
    }
    if (accion==2) {
        let monto = parseInt(prompt("Ingrese monto a retirar: "))
        return retirar(monto)
    }
    return false
}

function main(){
    while(true){
        let opcion = parseInt(prompt("1.- Depositar/n2.- Retirar/n3.- Salir"))
        if (opcion==3) {
            alert("Nos vemos")
            break
        }
        
        let captura = opciones(opcion)
        if (captura==true) {
            alert("El nuevo valor de saldo es: "+saldo)
        }else{
            alert("No se reconoce acción")
        }
    }
}

main()