const inputForm = document.querySelector('.input__form')
const inputText = document.querySelector('.input__text')
const hidden = document.querySelector('.hidden')
const listBox = document.querySelector('.list__item-info')
const ul = document.querySelector('.list')
const li = document.querySelector('.list__item')

// Form의 새로고침 막기
function listAdd(event) {
  event.preventDefault()
  const listItem = inputText.value
  inputText.value = ''
  if (listItem != null) {
    const div = document.createElement('div')
    div.setAttribute('class', 'list__item-info')
    div.textContent = listItem
    li.append(div)
    const btn = document.createElement('button')
    btn.setAttribute('class', 'delete__btn')
    btn.textContent = div.append(btn)
  }
}

inputForm.addEventListener('submit', listAdd)
