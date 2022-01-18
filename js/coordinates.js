const target = document.querySelector('.target')
const message = document.querySelector('.target-desc')

document.addEventListener('mousemove', (e) => {
  const x = e.clientX
  const y = e.clientY

  target.style.left = x + 'px'
  target.style.top = y + 'px'

  message.innerHTML = `x: ${x}, y: ${y}`
})
