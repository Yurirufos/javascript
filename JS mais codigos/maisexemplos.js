

// verficando elementos na array utilizando .every usando arrow function =>

const tempLondon = [-18, 2, 10, 8, ,0 -2, -5, -20]

const tempPositive = tempLondon.every(value => value >=0)

console.log(tempPositive)


// usando function simples 

/* const tempPositive = tempLondon.every(function(value) {
 return value >= 0
}*/

// filtrando uma array com filter
// positivo
const filTempPositive = tempLondon.filter((value) => value >= 0);

console.log(filTempPositive)
// filtrando negativo
const filTempNegative = tempLondon.filter(value => value < 0)

console.log(filTempNegative)

