let nome = window.document.getElementById("ball");
nome.addEventListener("click", clicar);
nome.addEventListener("mouseenter", enter);
nome.addEventListener("mouseout", sair);
nome.addEventListener("mousemove", mover);

function clicar() {
  nome.innerText = "Clicou!";
  nome.style.background = "red";
}
function enter() {
  nome.innerText = "Entrou";
  nome.style.background = "green";
}
function sair() {
  nome.innerText = "Saiu!";
  nome.style.background = "blueviolet";
}

function somar() {
  let t1 = document.getElementById("text1");
  let t2 = document.getElementById("text2");
  let res = document.getElementById("res");
  let n1 = Number(t1.value);
  let n2 = Number(t2.value);
  let s = n1 + n2;
  res.innerHTML = `A soma entre ${n1} e ${n2} é igual a: ${s}`
}
