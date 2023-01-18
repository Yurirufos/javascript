


let num = document.getElementById("fnum");
let lista = document.getElementById("flista");
let res = document.getElementById("res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adc() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado !!`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert("Valor Inválido ou já encontrado na lista.");
  }
  num.value = ''
  num.focus()
}


function end() {
  if (valores.length == 0) {
    alert('Adicione algum valor para finalizar')
  } else {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let position in valores) {
        soma += valores[position]
      if (valores[position] > maior) 
        maior = valores[position]
      if (valores[position] < menor ) 
        menor = valores[position]
    }
    media = soma / total
    res.innerHTML = ''
    res.innerHTML += `<p>Temos no total ${total} números cadastrados !</p>`;
    res.innerHTML += `O Maior número é ${maior}
    e o menor número da lista é o ${menor} !! `
    res.innerHTML += `<p>A Soma dos valore adicionados é ${soma}</p>.`
    res.innerHTML += `<p>A Média dos valore adicionados é ${media}</p>.`
  }
}

