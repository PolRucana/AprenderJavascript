const usuario = {
    nombre: "Jose",
    edad: 12,
    deuda: 0
}

let mipedido=[]
let pagototal = 0
let sumatotalventa = 0
let sumat2 = 0

const mostrarMenu = () =>{
    // productos.forEach(producto=>console.log(producto.codigo+" - "+producto.nombre+" - "+producto.costo))
    /* Otra manera de usar for para listas */
    for(let producto of productos){
        console.log(producto.codigo+" - "+producto.nombre+" - "+producto.costo)
    }
}

const pedido = (cod) =>{
    /*if(cod == null){
        return "no existe"
    }*/
    /*También lo podemos escribir como */
    if(!cod) return "No existe"
   
    const buscarpro = productos.find(producto => producto.codigo == cod)
    if(buscarpro == null) return "cod incorrecto"
    
    mipedido.push(buscarpro)
    return mostrarPedido()
}

const mostrarPedido = ()=>mipedido

const pagodePedido = ()=>{
    let sumarcosto = 0
    mipedido.forEach(varpedido => {
        sumarcosto = sumarcosto + varpedido.costo
    });
    pagototal = sumarcosto
    return pagototal
}

const finalizarPedido = ()=>{
    pagodePedido()
    usuario.deuda = pagototal
    mipedido = []
    pagototal = 0
    return "El usuario "+usuario.nombre+" debe "+usuario.deuda

}

const cancelardeudda = (monto)=>{
    if (monto<usuario.deuda) {
        return "El monto es muy bajo"
    } else if(monto==usuario.deuda){
        sumat2 = usuario.deuda
        usuario.deuda = 0
        return "Monto cancelado"
    } else {
        let vuelto = monto-usuario.deuda
        sumat2 = usuario.deuda
        usuario.deuda = 0
        return "Monto cancelado su vuelto es: "+(vuelto)
    }
}

const sumatotalventas = ()=>{
    sumatotalventa = sumatotalventa + sumat2
    return "La suma total de ventas del dia es "+sumatotalventa
}

//console.log("Codigo    Producto   Precio")
//mostrarMenu()