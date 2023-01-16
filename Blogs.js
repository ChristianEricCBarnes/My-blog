// const menuToggleIcon = selectElement('#menu-toggle-icon');

// const toggleMenu = () => {
//     const mobileMenu = selectElement('#menu');
//     mobileMenu.classlist.toggle('activated');
//     menuToggleIcon.classlist.toggle('activated');

// };

// menuToggleIcon.addeventListener('click', toggleMenu);




const menu_toggle = document.querySelector("#menu-toggle-icon");
const mobileMenu = document.querySelector("#menu-bar");

menu_toggle.addEventListener("click", () => {
    menu_toggle.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");   
}) 
