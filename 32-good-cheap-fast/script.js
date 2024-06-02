const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', e => doTheTrick(e.target)))

function doTheTrick(thClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === thClickedOne) {
      fast.checked = false
    }
    if (cheap === thClickedOne) {
      good.checked = false
    }
    if (fast === thClickedOne) {
      cheap.checked = false
    }
  }
}