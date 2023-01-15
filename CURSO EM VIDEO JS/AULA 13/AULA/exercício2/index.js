function click() {
  let num1 = document.getElementById("num");
  let tab1 = document.getElementById("tab");
  if (num1.value.length == 0) {
    window.alert("Porfavor digite um numero!!");
  } else {
    let n = Number(num1.value);
    let c = 1;
    tab1.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text`${n} x ${c} = ${n * c}`;
      tab1.appendChild(item);
      c++;
    }
  }
}
