let numeros = [1,2,3,4,5]
let arrayn = []

/*numeros.map(num => {
    if (num<4) {
        arrayn.push(num)
    }
})
console.log(arrayn)*/

let n = numeros.filter(num => num<3)
console.log(n)
