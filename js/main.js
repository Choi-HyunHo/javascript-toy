const mode_btn = document.querySelector('.bg-btn')
const btn_text = document.querySelector('.btn-text')

function modeChange() {
  const body = document.body

  if (body.classList.contains('white')) {
    body.classList.remove('white')
    body.classList.add('dark')
  } else {
    body.classList.remove('dark')
    body.classList.add('white')
  }

  if (btn_text.innerHTML == 'BLACK') {
    btn_text.innerHTML = 'WHITE'
  } else {
    btn_text.innerHTML = 'BLACK'
  }
}

mode_btn.addEventListener('click', modeChange)
