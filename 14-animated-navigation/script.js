const nav = document.querySelector('nav');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})