
// ADICIONANDO ITENS A UMA ARRAY


// adicionando valores em varios lugares da array
const num = [8, 9, 10]

// adicionar valor no final da array usar push
num.push(11, 12, 13)

// adicionar valor no incio da array use unshift

num.unshift(1, 2, 3)

// adicionar valor em algum lugar específico da array splice

num.splice(3, 0, 4, 5, 6, 7)


console.log(num);

//Qual q deu errado?


// localizar um valor dentro de uma array ( usando .includes ou .indexOf )

console.log(num.indexOf(5)) // resposta 4 por que o valor 5 está no index de numero 4 

// ou

console.log(num.includes(14)) // Resposta 'false' por que não existe o valor 14 na array num

// REMOVER ITENS DE UMA ARRAY

// tirar o ultimo item de uma array usando a propriedade .pop()

const numero = [5, 6, 8, 10, 11]
const final = numero.pop()
console.log(final) // pedindo pra mostrar na console a varial final ele me mostra o que aconteceu, nesse caso ele tirou o numero 11 da array

const remov = numero.shift() // a propriedade .shift() remove o primero item da minha rray 
console.log(remov) // no caso o console me mostra que foi removido o numero 5 

const end = numero.splice(1, 2) // com o .splice eu consigo remover itens de qualquer lugar da minha array 
console.log(end) // aqui me mostra o numero que eu removi que foi o 8 e o 10 da minha array que era [6, 8, 10] 

// ESVAZIANDO UMA ARRAY (EMPTYING)

let variedade = [5,4,8,9,1]

variedade = []
// variedade.length = 0 
// variedade.splice(0, variedade.length)
console.log(variedade)



