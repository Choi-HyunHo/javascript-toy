const target = document.querySelector('.target')
const tag = document.querySelector('.tag')
const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')

addEventListener('load', () => {
  // 그림 이미지가 늦게 출력되는 현상을 막기위해.
  // 페이지 안에서 쓰여지고 있는 css , image가 다 완료가 되면 아래 호출
  const targetRect = target.getBoundingClientRect()
  const targetHalfWidth = targetRect.width / 2
  const targetHalfHeight = targetRect.height / 2

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY

    vertical.style.transform = `translateX(${x}px)`
    horizontal.style.transform = `translateY(${y}px)`
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`
    tag.style.transform = `translate(${x}px, ${y}px)`
    tag.innerHTML = `${x}px, ${y}px`
  })
})
