/* Mobile menu */
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

/* Slider */
new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    autoHeight: true,
    arrows: true,
  }  ).mount();

/* Tabs */
const tabs = document.querySelectorAll(".project__cases-tab");
const sections = document.querySelectorAll(".project__cases-content");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    removeActiveTab();
    addActiveTab(tab);
  });
})

const removeActiveTab = () => {
  tabs.forEach(tab => {
    tab.classList.remove("project__cases-tab_state_active");
  });
  sections.forEach(section => {
    section.classList.remove("project__cases-content_is_active");
  });
}

const addActiveTab = tab => {
  tab.classList.add("project__cases-tab_state_active");
  const href = tab.querySelector("a").getAttribute("href");
  const matchingSection = document.querySelector(`#${href}`);
  matchingSection.classList.add("project__cases-content_is_active");
}