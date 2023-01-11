// FUNÇÃO DE LOAD NO HTML

function carregar() {
  let msg = document.querySelector("div#msg");
  let img = document.querySelector("img#img");
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `<p>Agora são ${hora} horas</p>`;
  
  // VARIAVEL DE TESTE
  // let hora = 18;

  if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = "img-morning.jpg";
    msg.innerHTML = `<p>Agora são <strong>${hora}</strong> horas</p> <strong>Bom dia!</strong>`;
    document.body.style.background = "#307d96";
  } else if (hora >= 12 && hora < 18) {
    //  BOA TARDE
    img.src = "img-afternoon.jpg";
    msg.innerHTML = `<p>Agora são ${hora} horas</p> <strong>Boa tarde!</strong>`;
    document.body.style.background = "#cb9f36";
  } else {
    // BOA NOITE
    img.src = "img-night.jpg";
    msg.innerHTML = `<p>Agora são <strong>${hora}</strong> horas</p> <strong>Boa noite !</strong>`;
    document.body.style.background = "#151516";
  }
}
