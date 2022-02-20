const graphicElems = document.querySelectorAll('.graphic-item')
const stepElems = document.querySelectorAll('.step')

const actions = {
  birdFlies(key) {
    if (key) {
      document.querySelector(
        '[data-index="2"] .bird'
      ).style.transform = `translateX(${window.innerWidth}px)`
    } else {
      document.querySelector(
        '[data-index="2"] .bird'
      ).style.transform = `translateX(-100%)`
    }
  },
  birdFlies2(key) {
    if (key) {
      document.querySelector(
        '[data-index="5"] .bird'
      ).style.transform = `translate(${window.innerWidth}px, ${
        -window.innerHeight * 0.7
      }px)`
    } else {
      document.querySelector(
        '[data-index="5"] .bird'
      ).style.transform = `translateX(-100%)`
    }
  },
}

// 이미지와 말풍선을 한 쌍으로 묶기 위해 사용한 코드
for (let i = 0; i < stepElems.length; i++) {
  graphicElems[i].dataset.index = i
  stepElems[i].dataset.index = i
}

let currentItem = graphicElems[0]

window.addEventListener('scroll', () => {
  let step
  let boundingRect

  // 말풍선들의 위치를 확인
  for (let i = 0; i < stepElems.length; i++) {
    step = stepElems[i]
    boundingRect = step.getBoundingClientRect()

    // 말풍선의 높이를 기준으로 범위를 지정
    if (
      boundingRect.top > window.innerHeight * 0.1 &&
      boundingRect.top < window.innerHeight * 0.8
    ) {
      if (currentItem.classList.contains('visible')) {
        off(currentItem.dataset.action)
      }

      currentItem = graphicElems[step.dataset.index]
      on(currentItem.dataset.action)
    }
  }
})

function on(action) {
  currentItem.classList.add('visible')
  if (action) {
    // 새의 효과가 적용 되는 시점 가져오기
    actions[action](true)
  }
}

function off(action) {
  currentItem.classList.remove('visible')
  if (action) {
    actions[action](false)
  }
}
on()
