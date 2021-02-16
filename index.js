function menu() {
  let x = document.querySelector('.menu')
  if (x.style.display === 'flex') {
    x.style.display = 'none'
  } else {
    x.style.display = 'flex'
  }
}
