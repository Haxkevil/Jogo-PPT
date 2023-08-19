var res = document.getElementById('res')
var vs = document.getElementById('vs')
var musica = document.getElementById('musica')
var ppt = document.getElementsByClassName('ppt')
var jogada = document.getElementsByClassName('jogada')
const dv = document.getElementsByClassName('dv')
var music = new Audio('Audio/music.wav')
var audio = new Audio('Audio/click.wav')
//Audio
function musicaOnOff() {
  if (music.paused) {
    music.play()
    music.loop = true
    musica.innerText = 'Musica On'
  }
  else if (music.play) {
    music.pause()
    musica.innerText = 'Musica Off'
  }
}

musica.addEventListener('click', musicaOnOff)

function resultado() {
  audio.play()
  var array = ['pedra', 'papel', 'tesoura']
  var k = Math.floor(Math.random() * 3)
  var jg = this.getAttribute('alt')
  var img = this.getAttribute('src')
  if (jg == 0 && k == 2) {
    vs.src = 'Img/ganhou.jpg'
    jogada[1].src = `Img/${array[k]}.jpg`;
    jogada[0].src = `${img}`;
    dv[1].innerText = Number(dv[0].innerText) + 1
  }
  else if (jg == 1 && k == 0) {
    vs.src = 'Img/ganhou.jpg'
    jogada[1].src = `Img/${array[k]}.jpg`;
    jogada[0].src = `${img}`;
    dv[1].innerText = Number(dv[0].innerText) + 1
  }
  else if (jg == 2 && k == 1) {
    vs.src = 'Img/ganhou.jpg'
    jogada[1].src = `Img/${array[k]}.jpg`;
    jogada[0].src = `${img}`;
    dv[1].innerText = Number(dv[0].innerText) + 1
  }
  else if (jg == k) {
    vs.src = 'Img/vs.jpg'
    jogada[1].src = `Img/${array[k]}.jpg`;
    jogada[0].src = `${img}`;

  }
  else {
    vs.src = 'Img/perdeu.jpg'
    jogada[1].src = `Img/${array[k]}.jpg`;
    jogada[0].src = `${img}`;
    dv[0].innerText = Number(dv[0].innerText) + 1
  }
  setTimeout(function() {
    vs.src = 'Img/vs.jpg'
    jogada[0].src = `Img/pc.jpg`;
    jogada[1].src = `Img/pc.jpg`;
  }, 3000);
}


for (var ppts of ppt) {
  ppts.addEventListener('click', resultado)
}
