/*LISTAS*/
var lista = ["elemento1","elemento2","elemento3"]

/*TAMAÑO DE UNA LISTA
length
*/
var tamaño=lista.length
console.log(tamaño)

/*PRIMER Y ÚLTIMO ELEMENTO DE UNA LISTA
*/
console.log(lista[0])
console.log(lista[tamaño-1])

/*AGREGAR ELEMEMTOS A LA LISTA
push*/
 lista.push("elemento 4")
 console.log(lista)

 /*EDITAR ELEMENTOS DE UNA LISTA*/
 lista[1]="elementoEditado"
 console.log(lista)

 /*ELIMINAR PRIMER Y ÚLTIMO ELEMENTO
 shift y pop
 */
lista.shift()
lista.pop()
console.log(lista)

/*RECORRER UNA LISTA*/
/*USANDO for */
for(let i=0;i<lista.length;i++){
    console.log(lista[i])
}
/*USANDO while */
let f=0
while (f<lista.length) {
    console.log(lista[f])
    f++
}
/*USANDO forEach */
lista.forEach(cancion1 => console.log(cancion1))
/*USANDO map */
lista.map(cancion2 => console.log(cancion2))