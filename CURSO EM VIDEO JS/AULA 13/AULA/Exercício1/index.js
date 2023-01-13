let num = document.getElementById("num");
let num2 = document.getElementById("num2");
let pas = document.getElementById("pas");
let res = document.getElementsByClassName("res")[0];

function contar() {
  let start = Number(num.value);
  let end = Number(num2.value);
  let step = Number(pas.value);
  if (step <= 0) {
   alert(" Step inválido, considere step 1");
  }
  step = 1;

  if (
    num.value.length == 0 ||
    num2.value.length == 0 ||
    pas.value.length == 0
  ) {
    alert("[ERRO] Preencha todas as caixas !!");
  } else {
    res.innerHTML = " Contando: ";
    if (start < end) {
     for (let con = start; con <= end; con += step) {
      res.innerHTML += ` ${con} \u{1F573}`;
     }
    } else {
     for (con = start; con >= end; con -= step) {
        res.innerHTML += ` ${con} \u{1F573}`;
       }
      }
      res.innerHTML += `\u{1F3C1}`;
      // res.innerHTML.style.textAlign += 'center'
  }
}
