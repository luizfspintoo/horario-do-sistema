function Carregar() {
  let data = new Date()
  let horas = data.getHours()
  let minutos = data.getMinutes()
  let resposta = window.document.getElementById('res')

  if(horas >= 0 && horas < 12) {
    window.document.body.style.backgroundImage = "url('./manha.jpg')"
  } else if (horas >= 12 && horas <= 18) {
    window.document.body.style.backgroundImage = "url('./tarde.jpg')"
  } else {
    window.document.body.style.backgroundImage = "url('./noite.jpg')"
  }
  resposta.innerHTML = `Agora são: ${horas}:${minutos} horas`
}