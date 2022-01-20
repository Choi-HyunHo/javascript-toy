const inputForm = document.querySelector('.input__form')
const inputText = document.querySelector('.input__text')
const ul = document.querySelector('.list')

function listAdd(event) {
  event.preventDefault()
  const listItem = inputText.value
  inputText.value = ''
  paintList(listItem)
}

inputForm.addEventListener('submit', listAdd)

function paintList(listItem) {
  const li = document.createElement('li')
  li.setAttribute('class', 'list__item')
  ul.append(li)
  li.scrollIntoView({ block: 'center', behavior: 'smooth' })

  const div = document.createElement('div')
  div.setAttribute('class', 'list__item-info')
  li.append(div)

  const span = document.createElement('span')
  span.textContent = listItem
  div.appendChild(span)

  const btn = document.createElement('button')
  btn.setAttribute('class', 'delete__btn')
  btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
  btn.addEventListener('click', () => {
    li.remove()
  })
  div.appendChild(btn)
}
