const inputForm = document.querySelector('.input__form')
const inputText = document.querySelector('.input__text')
const ul = document.querySelector('.list')

function listAdd(event) {
  event.preventDefault()
  const listItem = inputText.value
  inputText.value = ''

  if (listItem != null) {
    const li = document.createElement('li')
    li.setAttribute('class', 'list__item')
    ul.append(li)

    const div = document.createElement('div')
    div.setAttribute('class', 'list__item-info ')
    li.append(div)

    const span = document.createElement('span')
    span.textContent = listItem
    div.appendChild(span)

    const btn = document.createElement('button')
    btn.setAttribute('class', 'delete__btn')
    btn.textContent = '❌'
    div.appendChild(btn)
  }
}

inputForm.addEventListener('submit', listAdd)
