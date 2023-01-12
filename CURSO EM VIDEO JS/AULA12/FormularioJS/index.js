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
      document.body.style.background = "#0000ff";
    } else if (age < 21) {
      // ADOLESCENTE
      img.src = "homem-jovem.jpg";
      document.body.style.background = "#0000ff";
    } else if (age < 60) {
      // ADULTO
      img.src = "homem-adulto.jpg";
      document.body.style.background = "#0000ff";
    } else {
      // IDOSO
      img.src = "idoso-homem.jpg";
      document.body.style.background = "#0000ff";
    }
  } else if (forSex[1].checked) {
    gen = "Mulher";
    if (age >= 0 && age <= 10) {
      // CRIANÇA
      img.src = "menina.jpg";
      document.body.style.background = "#4e0f4e";
    } else if (age < 21) {
      // ADOLESCENTE
      img.src = "mulher-jovem.jpg";
      document.body.style.background = "#4e0f4e";
    } else if (age < 60) {
      // ADULTO
      img.src = "mulher-aulta.jpg";
      document.body.style.background = "#4e0f4e";
    } else {
      // IDOSO
      img.src = "mulher-idosa.jpg";
      document.body.style.background = "#4e0f4e";
    }
  }
  res.innerHTML = `Detectamos ${gen} com ${age} anos. `;
}
