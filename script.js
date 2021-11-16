const open = document.querySelector('.open')
const close = document.querySelector('.close')
const navLinks = document.querySelector('.nav-links')

open.addEventListener('click', () => {
    navLinks.style.right = '0'
})

close.addEventListener('click', () => {
    navLinks.style.right = '-200px'
})