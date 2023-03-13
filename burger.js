document.querySelector(".burger-menu").addEventListener("click", function() {
    document.querySelector(".nav__list").classList.add("nav__list--show"); 
  });

document.querySelector(".button-close").addEventListener("click", function() {
    document.querySelector(".nav__list").classList.remove("nav__list--show"); 
  });