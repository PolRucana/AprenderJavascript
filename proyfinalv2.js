const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let listanotas = []

//create

function crear() {
    rl.question("Escribe tu nota: ",function(nota) {
        listanotas.push(nota)
        console.log("Agregado correctamente")
        menu()
    })
}


function mostrar() {
    for(let i=0;i<listanotas.length;i++){
        console.log(i+1,listanotas[i])
    }
    menu()
}


function modificar() {
    rl.question("Que nota quieres cambiar: ",function (nota) {
        rl.question("Nuevo contenido",function (texto) {
            listanotas[nota-1]=texto
            menu()
        })
    })
}


function eliminar() {
    rl.question("Que nota quieres eliminar: ",function (nota) {
        let newlista=[]
        for(let i=0;i<listanotas.length;i++){
            if(i != nota-1){
                newlista.push(listanotas[i])
            }
        }
        listanotas = newlista
        menu()
    })
}


function menu() {
    console.log("Menú notas")
    console.log("1. Crear\n2. Listar\n3. Modificar\n4. Eliminar\n5. Salir")
    rl.question("Opcioón: ",function (valor) {
        switch (valor) {
            case "1":
                crear();
                break;
            case "2":
                mostrar();
                break;
            case "3":
                modificar();
                break;
            case "4":
                eliminar();
                break;
            case "5":
                console.log("Adiós")
                rl.close();

            default:
                console.log("Opnción incorrecta");
        }
    })
}

menu()