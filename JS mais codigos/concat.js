

// concatenar uma array

let numbers = [0, 1, 2, 3, 4]
let letters = ['a', 'b', 'c', 'd', 'e']

all = numbers.concat(letters)
console.log(all)
console.log(all.length)

// pegar um pedaço de uma array e criar uma variavel com ela usando slice (cortar)

half = all.slice(2, 8)
console.log(half)


// adicionar alguma coisa a sua array numero, string ...

let clients = ['Yuri', 'Maria', 'Flávia']

let clientJoin = clients.join('.. ') 
console.log(clientJoin) // adicionei ddois ponto e um espaço aos nomes dos meus clientes (.. )

// colocar array em ordem usando .sort() ex: com os clients

clients.sort()
console.log(clients)

// fazendo o reverso usando reverse() ex: passado o ultimo pro primero e vice versa

clients.reverse()
console.log(clients)


