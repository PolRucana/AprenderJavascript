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
/********************** BUBBLE SORT *****************************/
/********************************************************************/

const bubbleSort = (myarray)=>{
  for(let i=0;i<myarray.length;i++){
    for(let j=1;j<=myarray.length-i-1;j++){
      if(myarray[j]<myarray[j-1]){
        let temp = myarray[j]
        myarray[j]=myarray[j-1]
        myarray[j-1]=temp
      }
    }
  }
  return myarray
}
console.log(bubbleSort([5,3,10,9,12,20,1]))



/********************************************************************/
/********************** BÚSQUEDA BIANRIA *****************************/
/********************************************************************/

/*** FORMA 1 ***/
/*const busquedabinaria = (miarray,valor) =>{
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

console.log(busquedabinaria([-1,5,7,13,45,70,101],101))*/



/********************************************************************/
/***** BÚSQUEDA MÁXIMO Y MÍNIMO (BUSQUEDA SECUENCIAL) **************/
/********************************************************************/

/*** FORMA 1 ***/

/*const busmaxymin = (miarray) =>{
  let max = miarray[0]
  let min = miarray[0]
  for(let i=1;i<miarray.length;i++){
    if (miarray[i]>max) {
      max=miarray[i]
    }
    if (miarray[i]<min) {
      min=miarray[i]
    }
  }
  return [min,max]
}

console.log(busmaxymin([3,6,1,7,-4,-10,18]))*/




/********************************************************************/
/********************** ORDENAMIENTO MERGE SORT  *******************/
/********************************************************************/

//Combinamos 2 array's ordenados

/*const combinar = (arra1,arra2) =>{
    let newarr =[]
    //también puede ir el while de abajo, si uno llega a 0 te da false y corta
    //while(arra1.length && arra2.length)
    while (arra1.length!=0 && arra2.length!=0) {
        let primerelemento
        if (arra1[0]<arra2[0]) {
            primerelemento = arra1.shift()
        } else {
            primerelemento = arra2.shift()
        }
        newarr.push(primerelemento)
    }
    newarr = newarr.concat(arra1).concat(arra2)
    return newarr
}*/

// Merge sort: Usa el princio de divide y venceras

/*const mergesort = (darr) =>{
    if(darr.length==1) return darr
    let mitad = Math.trunc(darr.length/2)
    let arrleft = darr.splice(0,mitad)
    let arrrigth = darr
    let myleft = mergesort(arrleft)
    let myrigth = mergesort(arrrigth)
    //usamos la funcion anterior de combinar 2 array
    return  combinar(myleft,myrigth)
}
console.log(mergesort([8,1,10,9,7,11,3,21,0]))*/



/********************************************************************/
/********************** ORDENAMIENTO QUICK SORT  *******************/
/********************************************************************/

/*const partirArray = (array,inicio,final) =>{

  let pivote = array[final];
  let j=inicio-1;

  for(let i=inicio;i<=final-1;i++){
    if(array[i]<pivote) {
      j++;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      //Las 3 líneas de arriba pueden ser reemplazadas por la línea de abajo
      //[array[i],array[j]] = [array[j],array[i]]
    }
  }

  [array[j+1],array[final]] = [array[final],array[j+1]];

  return j+1;
}

const quickSort = (array,inicio,final) =>{
  if(inicio<final){
    let mipivote = partirArray(array,inicio,final);

    quickSort(array,inicio,mipivote-1);
    quickSort(array,mipivote+1,final);
  }
}

let arr=[4,6,2,5,8,9,5,10];
quickSort(arr,0,arr.length-1);
console.log(arr);*/



/********************************************************************/
/*************************** COUNTING SORT  **************************/
/********************************************************************/

/*function countingSort (myArray){

  const tamaño = myArray.length
  let maxArr = 0
  for(let i=0;i<tamaño;i++){
    maxArr = Math.max(maxArr,myArray[i])
  }
  const newArr = new Array(maxArr+1).fill(0)

  for(let i=0;i<tamaño;i++){
    newArr[myArray[i]] = newArr[myArray[i]] + 1
  }

  for(let i=1;i<=maxArr;i++){
    newArr[i] = newArr[i] + newArr[i-1]
  }

  const finalArr = new Array(tamaño)
  for(let i=0;i<tamaño;i++){
    finalArr[newArr[myArray[i]]-1] = myArray[i]
    newArr[myArray[i]]--
  }

  return finalArr
}

console.log(countingSort([4,3,12,1,5,5,3,9]))*/



/********************************************************************/
/*************************** RADIX SORT  **************************/
/********************************************************************/

const searchMax = (arr) =>{
  /*Forma 1*/
  let max = Math.max(...arr)

  /*Forma 2*/
  /*let max = arr[0]
  for(let i=1;i<arr.length;i++){
    if (arr[i]>max) {
      max=arr[i]
    }
  }*/

  /*Forma 3*/
  /*let max = 0
  for(let i=1;i<arr.length;i++){
    max = Math.max(max,arr[i])
  }*/
  return max
}

const transformArr = (divisor,arr) => {
  const cantidad = arr.length
  let conteoArr = Array(10).fill(0)
  let finalArr = new Array(cantidad)

  for(let i=0;i<cantidad;i++){
    let digito = Math.trunc(arr[i]/divisor)/10
    conteoArr[digito]+=1
  }



  return finalArr
}

const radixSort = (arr) =>{
  const max = searchMax(arr);
  let newArr = new Array();

  for(let divisor=1; Math.trunc(max/divisor)>0; divisor*=10){
    newArr = transformArr(divisor,arr)
  }
  return newArr
}



/********************************************************************/
/*************************** BUCKET SORT  **************************/
/********************************************************************/

/*const busqInsertSort = (array) =>{
  for(let i=1;i<array.length;i++){
    let j=i
    while (j>=1 && array[j]<array[i-1]) {
      let aux = array[j]
      array[j] = array[j-1]
      array[j-1] = aux
      j--
    }
  }
  return array
}

const bucketSort = (array) =>{

   // Crear una lista de "botes" vacíos
  let tamArray = array.length
  let newArr = new Array(tamArray)
  //Esta linea puede reemplazar al for de abajo => let newArr = new Array(tamArray).fill([])
  for(let i=0;i<tamArray;i++){
    newArr[i] = []
  }
  
  // Normalizar los elementos en el rango [0, 1]
  //Esta linea puede reemplazar al for y let de abajo => let maxArray = Math.max(...arr)
  let maxArray = 0
  for(let i=0;i<tamArray;i++){
    maxArray = Math.max(array[i],maxArray)
  }

  let arrayDecim = Array.from(array)
  for(let i=0;i<tamArray;i++){
    arrayDecim[i] = parseFloat((array[i]/maxArray).toFixed(2))
  }

  // Distribuir los elementos en los botes
  for(let i=0;i<arrayDecim.length;i++){
    let newValor = Math.trunc(arrayDecim[i]*(tamArray-1))
    newArr[newValor].push(array[i])
  }

  //Ordenar cada bote individualmente (usando Insertion Sort en este caso)
  newArr.forEach(num=>{
    busqInsertSort(num)
  })
  
  //Concatenar los botes ordenados para obtener el arreglo ordenado final
  let arrFinal=[]
  newArr.forEach(num=>{
    arrFinal=arrFinal.concat(num)
  })

  return arrFinal

}

console.log(bucketSort([5,9,1,2,3,2,8]))*/