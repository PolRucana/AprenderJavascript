/*************** Bogo sort (Stupid sort) ***********/

/*function verificar(arreglo){
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
console.log(ordenar(arreglo))*/



/********************************************************************/
/********************** INSERTION SORT *****************************/
/********************************************************************/

/**** FORMA 1 (Esta forma es la mejor para mí) ****/
/*function insertSort(myarray) {
  for(let i=1;i<myarray.length;i++){
    let j=i
    while(j>=1 && myarray[j]<myarray[j-1]){
      let aux=myarray[j]
      myarray[j]=myarray[j-1]
      myarray[j-1]=aux
      j--
    }
  }
  return myarray
}
console.log(insertSort([3,8,6,12,5,17,2,4,1,12,-1]))*/


/**** FORMA 2 ****/

/*const insertSort = (myarray) =>{
  for(let i=1;i<myarray.length;i++){
    let actual=myarray[i]
    let j=i
    while(j>=1 && actual<myarray[j-1]){
      myarray[j]=myarray[j-1]
      j--
    }
    myarray[j]=actual
  }
  return myarray
}

console.log(insertSort([3,8,6,12,5,17,2,4,1,12,-1]))*/



/********************************************************************/
/********************** SELECTION SORT *****************************/
/********************************************************************/

/**** FORMA 1 ****/
/*function selectionSort(array){
  for(let i=0;i<array.length;i++){
    let min = array[i] 
    let posmin = i
    for(let j=i+1;j<array.length;j++){
      if(array[j]<min){
        min=array[j]
        posmin=j
      }
    }
    if(i!=posmin) {
      let aux = array[i]
      array[i] = array[posmin]
      array[posmin] = aux
    }
  }
  return array
}

console.log(selectionSort([3,8,6,12,5,17,2,4,1,12,-1]))*/


/**** FORMA 2  (Esta forma es la mejor para mí) ****/
/*const selectionSort = (array) =>{
  for(let i=0;i<array.length;i++){
    let min = i
    for(let j=i+1;j<array.length;j++){
      if(array[j]<array[min]){
        min = j
      }
    }
    let aux = array[i]
    array[i] = array[min]
    array[min] = aux
  }
  return array
}

console.log(selectionSort([3,8,6,12,5,17,2,4,1,12,-1]))*/



/********************************************************************/
/********************** BÚSQUEDA BIANRIA *****************************/
/********************************************************************/

/*** FORMA 1 ***/
const busquedabinaria = (miarray,valor) =>{
  let start = 0
  let end = miarray.length - 1

  while(start<=end){
    let middle = Math.trunc((start+end)/2)
    if(miarray[middle]==valor){
      return true
    }else if(miarray[middle]<valor){
      start = middle + 1
    }else{
      end = middle - 1
    }
  }
  return false
}

console.log(busquedabinaria([-1,5,7,13,45,70,101],101))