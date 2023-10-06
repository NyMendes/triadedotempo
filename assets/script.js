document.getElementById('btn').onclick = function () {
  var contA = 0 // importante
  var contB = 0 // urgente
  var contC = 0 // circunstancial
  var radio = document.getElementsByClassName('alt')
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      document.getElementById('btn-pular').textContent = 'Próximo'
      if (radio[i].value === '3') {
        contA++
      } else if (radio[i].value === '-2') {
        contB++
      } else {
        contC++
      }
    }
  }

  localStorage.setItem('exibeA', `${contA * 25}%`)
  localStorage.setItem('exibeB', `${contB * 25}%`)
  localStorage.setItem('exibeC', `${contC * 25}%`)
}
