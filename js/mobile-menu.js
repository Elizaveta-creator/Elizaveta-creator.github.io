const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation-mobile')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);