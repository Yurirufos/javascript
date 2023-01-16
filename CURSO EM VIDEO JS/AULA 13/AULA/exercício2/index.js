let num1 = document.getElementById("num");
let tab1 = document.getElementById("tab");


function click() {
  if (num1.value.length == 0) {
    window.alert("Porfavor digite um numero!!");
  } else {
      let numN = Number(num1.value)
      let c = 1
      tab1.innerHTML = "";
     while (c <= 10) {
       let item = document.createElement("option");
       item.text`${numN} x ${c} = ${numN * c}`;
       tab1.appendChild(item);
       c++;
    }
  }
}
