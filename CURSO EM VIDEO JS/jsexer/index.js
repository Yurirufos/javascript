function clicar() {
  let pais = document.querySelector("input#pais");
  let res = document.getElementById("res");
  let s = pais.value;

  res.innerHTML = `<p>Você é do(a)(s) <strong>${s}</strong></p>`;
  if (s == "Brasil") {
    res.innerHTML += "você é Brasileiro";
  } else if (s == "Eua") {
    res.innerHTML += "Você é Americano";
  } else if (s == "França") {
    res.innerHTML += "Você é Francês";
  } else if (s == "Alemanha") {
    res.innerHTML += "Você é Alemão";
  } else {
    res.innerHTML += "Você é estrangeiro";
  }
}

// let idade = 22
// console.log(`você tem ${idade} anos de idade`)
// if (idade < 16) {
//  console.log('Não Vota')
// }
// else if (idade < 18 || idade > 67) {
//   console.log('Voto opcional')
// }
// else {
//  console.log('Voto Obrigatório')
// }

// 

const greetingMessage = () => {
 
  let h = new Date().getHours();
  return (h <= 5) ? 'Boa madrugada' :
         (h < 12) ? 'Bom dia' :
         (h < 18) ? 'Boa tarde' :
         'Boa noite';
}

alert(`Oii ${greetingMessage()}`)