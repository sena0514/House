/*=============== Drawer MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  drawerButton = document.getElementById("drawer-button");

/* Menu Show /hidden */
if (drawerButton) {
  drawerButton.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    drawerButton.classList.toggle("js-open");
    document.body.classList.toggle("no-scroll"); // bodyにno-scrollクラスを追加
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER HOMES ===============*/
const swiper01 = new Swiper("#swiper1", {
  loop: true,
 speed:800,
 parallax:true,
 effect:'fade',

  pagination: {
    el: ".swiper-pagination",
    type:'fraction',

    formatFractionCurrent:(number) => {return '0' + number},
    formatFractionTotal:(number) => {return '0' + number}
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
