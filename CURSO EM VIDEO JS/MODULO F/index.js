let num = [2, 6, 3, 4, 5];
num.push(1); // acrescenta um elemento na ultima posição array
// para saber o numero de chaves da array só pedir para mostra ex: "num.length"
console.log(`o Vetor tem ${num.length} posições`);
console.log(num);
console.log(`O 4º valor do vetor é ${num[3]}`);

for (let posi = 0; posi < num.length; posi++) {
  console.log(`O Valor ${num[posi]} fica na posição ${posi} `);
}
num.sort(); // coloca os elementos em ordem na array
console.log(num);

//  forma mais simplificada de mostrar

for (let pos in num) {
  console.log(`O Valor ${num[pos]} fica na posição ${pos} `);
}

let pose = num.indexOf(2);
if (pose == -1) {
  console.log(`O VALOR NÃO FOI ENCONTRADO`);
} else {
  console.log(`O valor ........... está na posição ${pose}`);
}
