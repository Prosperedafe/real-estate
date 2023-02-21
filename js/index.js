const links = document.getElementById('nav-links')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
    links.classList.toggle('active')
})