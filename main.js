function Carregar() {
  let data = new Date()
  let horas = data.getHours()
  let minutos = data.getMinutes()
  let resposta = window.document.getElementById('res')

  if(horas >= 0 && horas < 12) {
    var mensagem = 'Bom dia'
    window.document.body.style.backgroundImage = "url('./manha.jpg')"
  } else if (horas >= 12 && horas <= 18) {
    mensagem = 'Boa tarde'
    window.document.body.style.backgroundImage = "url('./tarde.jpg')"
  } else {
    mensagem = 'Boa noite'
    window.document.body.style.backgroundImage = "url('./noite.jpg')"
  }
  resposta.innerHTML = `${mensagem}, agora são: ${horas}:${minutos} horas`
}