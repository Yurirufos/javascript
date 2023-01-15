function parImpar(num) {
  if (num % 2 == 0) {
    return "Par!";
  } else {
    return "Impar!";
  }
}

// ver a resposta criando uma variavel
let resP = parImpar(5);

console.log(resP);

// ver a resposta apesar no
console.log(parImpar(342));

// outra function de soma

function soma(num1 = 0, num2 = 0) {
  return num1 + num2;
}

console.log(soma(5, 30));

// função dentro de uma variável

let v = function (x) {
  return x * 2;
};

console.log(v(14));

// função fatorial

function fatorial(n) {
  let fat = 1;
  for (let c = n; c > 1; c--) {
    fat *= c;
  }
  return fat;
}

console.log(fatorial(5));

// recursividade ]

function fatori(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatori(n - 1);
  }
}

console.log(fatori(10));
