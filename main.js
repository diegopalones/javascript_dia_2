
// Dadas 2 variables booleanas:


const booleano1 = true
const booleano2 = false


// Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2


const booleanoAnd = booleano1 && booleano2
console.log(booleanoAnd)


//Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2


const booleanoOr = booleano1 || booleano2
console.log(booleanoOr)


// Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1


const booleanoNot= !booleano1

// Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)


const booleanoMix0 = (booleano1 || booleano2) & (booleano1 || (!booleano1 & !booleano2))

// OPERADORES

// Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado


valorDivision = 17/3
console.log(valorDivision.toFixed(2))


// Crear variable valorResto cuyo valor sea el resto de 17 entre 7


valorResto = 17%7
console.log(valorResto)


// LÓGICA DE PROGRAMACIÓN

// Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?


const a = 9
const b = "9"

if (a == b){
    console.log('a y b Son iguales')
    }else {
    console.log('a y b No son iguales')
    }

if (a === b){
    console.log('a y b Son iguales')
    }else {
    console.log('a y b No son iguales')
    }


// Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”


const mochila = ["libro","piedra","bolígrafo","libreta","calcetines","pistola","ordenador","tablet","movil","estuche","pen-drive"]

if (mochila.length > 10){
    console.log('No puedo cargar con tantas cosas')
}  else if (mochila.length > 2){
    console.log('Que bien voy con mi mochila')
}  else
   console.log ('Creo que no necesito una mochila')


// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10


let contarHasta10 = 0;
for (let i = 1; i <= 10; i++) {
  contarHasta10++
  console.log(contarHasta10)
}

// Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’


let diaFestivo = true

if (diaFestivo == false) {
  console.log("Hoy no trabajo")
} else {
  console.log("Hoy trabajo")
}


// Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle


const arrayBucle = []
for (let i = 4; i <= 18; i++) {
  arrayBucle.push(i)
}
console.log(arrayBucle)


// Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado


let resultado = 0
for (let i = 0; i < arrayBucle.length; i++) {
  resultado += arrayBucle[i]
}
console.log(resultado)


// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos


let cosas = ['Con', 'Sofia', 'aprendiendo', 'bucles']

for (let cosa of cosas){
  console.log(cosa)
}

for (let index in cosas){

console.log(cosas[index])
}


// Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3


let i = 0;

while (i < 21) {
  if (i % 3 === 0) {
    console.log('patata');
  }

  i++
  
}



























