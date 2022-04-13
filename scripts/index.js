const burgerButton = document.querySelector('.nav__mobile-menu');
const navList = document.querySelector('.nav');

burgerButton.addEventListener('click', ()=>{
    const navVisibility = navList.getAttribute('data-visible');
    if(navVisibility === "false") { 
        navList.setAttribute('data-visible', true);
        burgerButton.classList.add('nav__mobile-menu-close');
    } else {
        navList.setAttribute('data-visible', false);
        burgerButton.classList.remove('nav__mobile-menu-close');
    }
})