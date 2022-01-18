const find = document.querySelector('.find_btn')
const rabbit = document.querySelector('.rabbit')
const scroll = document.querySelector('.scroll')
const reset = document.querySelector('.reset')

find.addEventListener('click', () => {
  rabbit.scrollIntoView({ behavior: 'smooth', block: 'center' })
})

scroll.addEventListener('click', () => {
  window.scrollBy({ top: 200, left: 0, behavior: 'smooth' })
})

reset.addEventListener('click', () => {
  window.scrollTo({ top: -100, left: 0, behavior: 'smooth' })
})
