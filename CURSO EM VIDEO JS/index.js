
// como abrir uma kanela de prompt 
const greetingMessage = () => {
  let h = new Date().getHours();
  return h <= 5
    ? "Boa madrugada"
    : h < 12
    ? "Bom dia"
    : h < 18
    ? "Boa tarde"
    : "Boa noite";
};

alert(`Oii ${greetingMessage()}`);

let  nome = window.prompt('Qual seu nome')
console.log(nome)
alert('É um grande prazer em te conheçer, ' +  nome + ' ! ' + 'Seja bem vindo (a)')
document.write(`O seu nome ${nome} tem ${nome.length} letras, posso deixar seu nome com letras maiúsculas ${nome.toUpperCase()}, ou deixar ele todo em minúsculo ${nome.toLowerCase()}`);

/* fazer a soma atravez de janelas de prompt, 
fazendo conversão de type ex: abaixo num1 string para number ... usando paserInt() para converter somente para numeros inteiros(1,2,3,4...) parseFloat() para numeros reais(1,1.5,2,2.3...) e para o proprio java fazer a conversão usa-se Number() (*/
let num1 = window.prompt('Digite um número: ')
let num2 = window.prompt('Digite outro número: ')
let soma = parseInt(num1) + parseInt(num2)

// template String escrever entre crases ``e colocar as variaveis entre ${} como abaixo :
alert(`A soma dos valore ${num1} e ${num2} é de: ${soma}`)

/* Para a conversão de STRING para qualquer outro type usa-se String(n) ou n.toString()*/
let salary = 1000
document.writeln( ` <br> O salario ${salary} em formato de salatio é : ${salary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`)

