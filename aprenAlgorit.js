function verificar(arreglo){
  for(let i=0;i<arreglo.length-1;i++){
    if(arreglo[i]>arreglo[i+1]){
      return false
    }
  }
  return true
}

function ordenar(arreglo){
  while(!verificar(arreglo)){
    let posA=Math.ceil(Math.random()*(arreglo.length-1))
    let posB=Math.floor(Math.random()*(arreglo.length-1))

    let aux=arreglo[posA]
    arreglo[posA]=arreglo[posB]
    arreglo[posB]=aux
  }
  return arreglo
}

let arreglo=[4,5,1,2,3,9,8,10,-1]
console.log(arreglo)
console.log(ordenar(arreglo))