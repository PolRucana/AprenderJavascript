//Tomamos el formulario a través  de su id
const miform = document.getElementById("myform")
console.log(miform)
//a través del evento submit y usando el metodo prevent evitamos actualizar
//  la página cuando presionamos el botón de añadir
miform.addEventListener("submit",function(event){
    event.preventDefault();
    //Entro al form a través del objeto formdata y hacer uso de lo que está dentro del form
    let entrarform = new FormData(miform)
    let obtenerdatosobj = datosobjeto(entrarform)
    console.log(obtenerdatosobj)
    funciontabla(obtenerdatosobj)
    guardardatosobj(obtenerdatosobj)
    miform.reset()
    
})

document.addEventListener("DOMContentLoaded",function(event){
    let obtmiarray = JSON.parse(localStorage.getItem("DataGuardada"))
    obtmiarray.forEach(function(cadaarray) {
        funciontabla(cadaarray)
    })
})
   /*for(let i=0;i<obtmiarray.length;i++){
    funciontabla(obtmiarray[i])
   }*/

const datosobjeto = (entrarform)=>{
    let inradio = entrarform.get("inradio")
    let indescripcion = entrarform.get("indescripcion")
    let inmonto = entrarform.get("inmonto")
    let incategoria = entrarform.get("incategoria")

    return{
        "inradio":inradio,
        "indescripcion":indescripcion,
        "inmonto":inmonto,
        "incategoria":incategoria
    }
}

const funciontabla  = (entrarform) =>{
    let varmitabla = document.getElementById("tomartabla")

    let varfila = varmitabla.insertRow(1)

    let varcolumna = varfila.insertCell(0)
    varcolumna.textContent = entrarform["inradio"]

    varcolumna = varfila.insertCell(1)
    varcolumna.textContent = entrarform["indescripcion"]
    
    varcolumna = varfila.insertCell(2)
    varcolumna.textContent = entrarform["inmonto"]

    varcolumna = varfila.insertCell(3)
    varcolumna.textContent = entrarform["incategoria"]

    varcolumna = varfila.insertCell(4)
    let miboton = document.createElement("button")
    miboton.textContent="Eliminar"
    varcolumna.appendChild(miboton)

    miboton.addEventListener("click",(event)=>{
        /*
        Con "target" selecciono mi elemento 
        <button>Eliminar</button>

        Con "parentNode" subo una posición de mi elemento seleccionado
        <td><button>Eliminar</button></td>

        Con el segundo "parentNode" subo otra posición hasta tomar la fila conpleta
        <tr><td>Ingreso</td><td>bala4</td><td>15</td><td>sfsdf</td><td><button>Eliminar</button></td></tr>
        
        Con "remove()" elimino todo lo seleccionado
        */
        event.target.parentNode.parentNode.remove()
    })
}

const guardardatosobj = (obtenerdatosobj) =>{

    //let miarrarobj = JSON.parse(localStorage.getItem("DataGuardada"))
    //if(miarrarobj==null) {miarrarobj=[]}
    //La dos lineas de arriba puede resumirse en el siguiente codigo
    let miarrarobj = JSON.parse(localStorage.getItem("DataGuardada")) || []
    miarrarobj.push(obtenerdatosobj)
    //convierto mi array de transaccion en JSON
    let obtenerdatosobjJSON = JSON.stringify(miarrarobj)
    //Guardo mi array de transaccion en formato JSON en el localstorage
    localStorage.setItem("DataGuardada",obtenerdatosobjJSON) 
}


//PARA APRENDER:

//------->>>>>>>>>>>>>   LOCAL STORAGE Y JSON   ------->>>>>>>>>>>>
/*
El localstorage almacena información en el navegador, es como una base de datos
El localstorage solo almacena string o texto.

localStorage.setItem("Salario","100")

Con ese comando se crear una clave salario con valor 100
Si quiero mostrar el valor de Salario uso lo siguiente

localStorage.getItem("Salario")

Si queremos almacenar otro tipo de dato diferente a string tendriamos que convertirlo a string
Para convertir hacemos lo siguiente

let miarray = [1,2,3,4]
let nuevoarr = JSON.stringify(miarray)

Con esto nuevoarr tendra el valor de miarray convertido a string
Ahora si queremos revertir es decir pasar de string a su verdadero tipo de dato
Hacemos lo siguiente (Ojo: javasvcipt detectará a que tipo de dato pertenece)

let nnarr = JSON.parse(nuevoarr)  
*/


//------->>>>>>>>>>>>>   DATA ATRIBUTE   ------->>>>>>>>>>>>
/*
Los data-atribute se usan en caso de que no exista un atributo de html (como id,class,type,name,for,etc) que nos permita 
realizar una tarea.
Para obtener el valor del atributo creado hacemos lo siguiente::::::

let tableElement = document.getElementById("tomartabla")
>> <table id="tomartabla" data-transaction-id="1234"="">...</table>

tableElement.dataset
>>DOMStringMap {transactionId: '1234'}

tableElement.dataset.transactionId
>>'1234'

OTRA MANERA de obtener el valor del atributo creado (Compatible con versiones antiguas de navegadores):::::

let tableElement = document.getElementById("tomartabla")
tableElement.getAttribute("data-transaction-id")
>>'1234'

AHORA SI LO QUE QUIERO ES DAR O ENVIAR un atributo y valor a una etiqueta html::::::::

tableElement.setAttribute("data-type","transactioTable")
*/


//------------>>>>>>>>>>>>>>>>  QUERYSELECTOR -------------->>>>>>>>>>>>>>>>
/*
Es similar a getElemntById,getElementByClass,etc sin embargo con solo queryselector puedo usar el valor de cualquier atributo

document.querySelector(".tableformat table")
document.querySelector("#myform")
document.querySelector(".formfield")

Si en caso queremos elegir varias lineas de una sola clase
document.querySelectorAll(".formfield")

Si quiero tomar todos los atributos que tengan class (tambien puedo usarlo con id, value,etc)
ocument.querySelectorAll('[class]')

Si lo que quiero es tomar un atributo creado (data atribute)
En este caso tomaremos todos los que tengan data.transaction-id="1234"
document.querySelectorAll('[data.transaction-id="1234"]')

En este caso tomaremos todos los que tengan data.transaction-id
document.querySelectorAll('[data.transaction-id]')

OJOOOOOOOOOOOOO:
SI USO document.querySelectorAll y quiero un elemento en específico debo colocar [0],[1], etc al costado 
document.querySelectorAll(".formfield")[0]
*/