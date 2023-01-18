console.log('JavaScript Funcionando');


let firstname = 'Yuri';
let lastname = 'Faria';
console.log(firstname);
console.log(lastname);

let blueEyes = 'Loira';
console.log(blueEyes);

let minhaMae = 'Flávia';
console.log(minhaMae);

// para criar uma varialvel que pode ser mudada de valor começamos com "let" Ex: let blueEyes = 'Loira' mas caso queira que sua varial seja com um valor fixo utilize const         Ex: const BlueEyes = 'Loira'

const BlueEyes = 'Loira';
console.log(BlueEyes);

// // tipos de variaveis primitiva

// // string 
// // Number
// // Boolean
// // underfined
// // null 

// let itemName = 'Pen'
// let itemPrice = 3
// let itemAvailable = true
// let itemColor = undefined

// se eu quiser tirar o valor de uma variavel eu coloco Null

// EX: tirar o valor da variavel itemName

// let itemName = null 


// objeto é um conjunto de informação em uma só varialvel ex:

let itemName = ' Televisão'
let itemColor = 'Black'
let itemPolegadas = 32 
let itemAvailable = true

let Televisão = {
    itemName: 'Televisão',
    itemColor: 'Black',
    itemPolegadas: 32,
    itenAvalible: true
}

console.log(Televisão)

// agora se quiser que apareça só um intem do objeto basta colocar ex:

console.log(Televisão.itemColor)

// caso eu queira saber o tipo de variavel ex:

console.log(typeof itemName)

// se eu quiser mudar algum valor dentro de uma variavel que está dentro de um objeto ex abaixo

Televisão.itemColor = 'blue'

// se você quiser armazenar uma lista de itens em uma unica variavel você tem que usar Arrays ex:

let friends = ['Flávia', 'Silvinha', 'Célia']

console.log(friends)
// caso queira substituir algum dos itens po outro 
ex:

friends[1] = 'Anna Clara'
console.log(friends)

// Toda função serve para agrupar calculos e efeturar os comando sem que você o escreva todas as vezes que quiser executar ex:

function saleStatus() {
 console.log('approved')
}

// para você executar você tem que chamar o nome da função ex:

saleStatus()

// mas você tambem pode colocar mais parâmetros (status,total) dando a cada um deles um argumento('Approved') ex:

function saleStatus(status, total){
console.log('transaction ' + status + '! Total amount: $' + total)

} 

saleStatus('Approved', 30)


// Função de porcentagem 

function percentage10(price) {
  return price - (price * 10) / 100;
}

console.log(percentage10(100));

// operações aritiméticas + - / * % ( simbolo de porcentagem % no JS é igual ao restante do valor de divisão de um numero não inteiro)
// caso queira colocar mais um ou menos um adiciona ++ ou -- e a variavel 


let num1 =10
let num2 = 4

console.log(num1 % num2)

// operadores de atribuição +=, *= usador para poder somar multiplicar dividir diminuir por mais que 1 ex:


let num3 = 5

num3*= 20

console.log(num3)

// operadores de coparação
// para  sinal de igual colocamos três sinais de igual (===) caso queira saber se é diferente colocamos uma exclamação e dois sinais de igual (!=) 

// para saber se é maior que ou menor que usamos os sinais ( maior que > ) (menor que < )

// tambem podemosusar maior ou igual ( >= ), menor ou igual ( <= )

let num4 = 10

console.log(num4 !== 8)
// console.log(num4 === 10 )
// console.log(num4 > 10 )
// console.log(num4 < 10)

// console.log(num4 >= 10)
// console.log(num4 <= 10)

// TRÊS SINAIS DE IGUAIS E/OU EXCLAMAÇÃO DOIS IGUAIS PARA SINAL "DIFERENTE QUÊ..." ( === / !== )/  SÃO PRA RESULTADOS DE QUALIDADE ESTRITA (strict quality) OU SEJA ANALIZA TYPE AND VALOR  

// PARA ANAIZES SOMENTE DE VALOR SÃO USADOS DOIS IGUAL E/OU EXCLAMAÇÃO E UM SINAL DE IGUAL PARA "DIFERENTE QUÊ..." ( == , != ) SÃO PARA RESULTADOS ANALIZES SOMENTE DE VALOR ( Lose Quality )


let driver = 100
let speed = driver > 90 ? 'Above' : 'Bellow'

console.log(speed)



