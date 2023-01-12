function check() {
  let data = new Date();
  let ano = data.getFullYear();
  let forYear = document.querySelector("input#num");
  let res = document.querySelector("div#res");
  let forSex, age, gen;
  let img = document.querySelector("img");

  if (forYear.value.length == 0 || forYear.value > ano) {
    alert("{ERRO} Verifique os dados e tente novamente");
  } else {
    forSex = document.getElementsByName("sex");
    age = ano - Number(forYear.value);
    gen = "";
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gen} com ${age} anos. `;
  }
  if (forSex[0].checked) {
    gen = "Homem";
    if (age >= 0 && age <= 10) {
      // CRIANÇA
      img.src = "menino.jpg";
    } else if (age < 21) {
      // ADOLESCENTE
      img.src = "homem-jovem.jpg";
    } else if (age < 60) {
      // ADULTO
      img.src = "homem-adulto.jpg";
    } else {
      // IDOSO
      img.src = "idoso-homem.jpg";
    }
  } else if (forSex[1].checked) {
    gen = "Mulher";
    if (age >= 0 && age <= 10) {
      // CRIANÇA
      img.src = "menina.jpg";
    } else if (age < 21) {
      // ADOLESCENTE
      img.src = "mulher-jovem.jpg";
    } else if (age < 60) {
      // ADULTO
      img.src = "mulher-aulta.jpg";
    } else {
      // IDOSO
      img.src = "mulher-idosa.jpg";
    }
  }
  res.innerHTML = `Detectamos ${gen} com ${age} anos. `;
}
