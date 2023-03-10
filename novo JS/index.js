// operadores logicos usar o && para ( and ), || para ( or ) e ! ( not )

// CRITERIOS PARA VOTAÇÃO
let idadeMinima = false;
let tituloEleitor = true;

let possoVotar = idadeMinima && tituloEleitor;
// PODE VOTAR?
console.log(possoVotar);

let possoViajar = !possoVotar;

// PODE VIAJAR ?
console.log(possoViajar);

// PARA ENTRAR NO SHOW PRECISO DE PELO MENOS UM DOS ITENS : INGRESSO, DINHEIRO OU 1KG DE ALIMENTO

let ingresso = false;
let dinheiro = true;
let kgDeAlimento = true;

let acessoAoShow = ingresso || (dinheiro && kgDeAlimento);

console.log(acessoAoShow);

// porcentagem

function percentage(price) {
  return price - (price * 20) / 100;
}

console.log(percentage(100));

// saber se um valor é maior igual ou menor e pedir pra avisar ex:

let driver = 90;
const speed = driver > 100 ? "Above" : "Bellow";

console.log(speed);

// if e else
// exemplo de velociade do carro para me retornar se está muito rapido, ok ou muito lento

let driverSpeed = 150;

if (driverSpeed > 110) {
  console.log("Driving too fast");
} else if (driverSpeed > 40 && driverSpeed <= 110) {
  console.log("OK");
} else {
  console.log("driving too slow");
}

// Swhitch and Case consigo fazer com que escrevendo uma sigla apareça o nome compreto .. usando Switch e Case para trocar o que vai aparecer na tela

let airport = "CNF";

switch (airport) {
  case "GRU":
    console.log("Guarulhos Airport");
    break;
  case "CNF":
    console.log("Confins Airport");
    break;
  case "BSB":
    console.log("Brasília Airport");
    break;
  default:
    console.log("unknown");
}
// EXTRA: PRONUNCIA DE DEFAULT ( DÊFUL ) E DE UNKNOWN ( UNNÔN )

// for loop consigo girar automaticamente contagens de numeros por exemplo :

for (i = 1; i <= 20; i++) {
  console.log("for " + i);
}

// // Caso queira executar um loop em uma variavel que ja tenha sido feita no programa pode-se usar (While): por que sua variavel é externa ex:

i = 1;

while (i <= 10) {
  console.log("While " + i);
  i++;
}

// variação de while loop usando "faça" ( do ) ex:

i = 1;

do {
  console.log("Do While " + i);
  ++i;
} while (i <= 10);

// Mais uma variação de loop ( For in Loop)
// essa variação consigo vizualizar informações e valores dentro de um objeto Ex Abaixo:

const myCar = {
  model: "BMW",
  Color: "Red",
};

for (let i in myCar) console.log(i, myCar[i]);

// Variação de loop ultitizada mais em Arrays ( For of Loop) exemplo abaixo de uma array e for of loop

const friends = [
  "Flávia",
  "Célia",
  "Silvinha",
  "Patrick",
  "Bárbara",
  "Gabi",
  "Filipe",
];

for (let i of friends) console.log(i);

// Break dentro de um loop exemplo (adicione um (if) se a variavel for === ao numero fecha parenteses pare (break))

for (i = 1; i <= 10; i++) {
  if (i === 8) break;
  console.log("Num " + i);
}

// OOP ( Objects Oriented Programing) :

const book = {
  bookTitle: "Alguma coisa",
  bookPages: 300,
  bookAuthor: "Yuri RF",
  bookChapters: {
    chap1: "cap1",
    chap2: "cap2",
  },

  printBook: function () {
    console.log("Printing...");
  },
};
console.log(book);

// Executando uma função dentro de um objeto. colocando o nome do obtejo ponto e o nome da função
book.printBook();

// Factory são fabricas de objetos :

function createBook(title, pages, author) {
  const book = {
    bookTitle: title,
    bookPages: pages,
    bookAuthor: author,
    printBook: function () {
      console.log("Printing...");
    },
  };
}
