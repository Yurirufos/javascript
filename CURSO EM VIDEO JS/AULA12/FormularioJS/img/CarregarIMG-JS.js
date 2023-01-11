function check() {
  let data = new Date();
  let ano = data.getFullYear();
  let forYear = document.querySelector("input#num");
  let res = document.querySelector("div#res");
  if (forYear.value.length == 0 || forYear.value > ano) {
    alert("{ERRO} Verifique os dados e tente novamente");
  } else {
     let forSex = document.getElementsByName("sex");
     let age = ano - Number(forYear.value);
     let gen = "";
     let img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if (forSex[0].checked) {
         gen = "Homem";
         if (age >= 0 && age <= 10) {
          // CRIANÇA
          img.setAttribute('src', 'menino.jpg')
         } else if ( age < 21 ) {
          // ADOLESCENTE 
          img.setAttribute('src', 'homem-jovem.jpg')
         } else if ( age >= 21 &&  60 ) {
          // ADULTO
          img.setAttribute('src', 'homem-adulto.jpg')
         } else {
          // IDOSO
          img.setAttribute('src', 'idoso-homem.jpg')
         }
        } else if (forSex[1].checked) {
         gen = "Mulher";
         if (age >= 0 && age <= 10) {
          // CRIANÇA
          img.setAttribute('src', '/img/menina.jpg')
         } else if (age < 21) {
          // ADOLESCENTE
          img.setAttribute('src', '/img/mulher-jovem.jpg')
         } else if (age >= 21 && 60) {
          // ADULTO
          img.setAttribute('src', 'mulher-aulta.jpg')
         } else {
          // IDOSO
          img.setAttribute('src', 'mulher-idosa.jpg')
         }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${gen} com ${age} anos. `;
     res.appendChild(img)
  }
}
