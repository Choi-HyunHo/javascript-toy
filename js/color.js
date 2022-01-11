const color_btn = document.querySelector('.color-btn')
const color = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
]

function bgChange() {
  const firstColor = color[Math.floor(Math.random() * color.length)]
  const secondColor = color[Math.floor(Math.random() * color.length)]
  document.body.style.background = `linear-gradient( 90deg, ${firstColor}, ${secondColor} )`
}

color_btn.addEventListener('click', bgChange)
