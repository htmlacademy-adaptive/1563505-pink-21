const navtoggle = document.querySelector(".main-nav__toggle");
const mainnav = document.querySelector(".main-nav__wrapper");
const burgertoggle = document.querySelector(".main-nav__toggle--off");
const pghead = document.querySelector(".page__header");
const pgmainnav = document.querySelector(".page__main-nav");

navtoggle.addEventListener("click", function(event) {
  navtoggle.classList.toggle("main-nav__toggle--off");
  mainnav.classList.toggle("main-nav__wrapper--off");
  pghead.classList.toggle("page__header--off");
  pgmainnav.classList.toggle("page__main-nav--off");
});
