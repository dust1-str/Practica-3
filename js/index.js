AOS.init();

let timeTimeOut = 5;
let time = 5;

const animation_1 = () => {
   document.querySelector("#intro_logo").classList.add("d-none");
}
const animation_2 = () => {
   document.querySelector("#hero").classList.add("fade_in");
   document.querySelector("#img_hero_1").classList.add("img_left_right");
   document.querySelector("#img_hero_2").classList.add("img_right_left");
}
const animation_3 = () => {
   document.querySelector("#span_icon").classList.remove("d-none");
   document.querySelector("body").classList.remove("scroll-y-none");
}

window.onscroll = function () {
   let position = window.pageYOffset || document.documentElement.scrollTop;
   let img_hamburger_1 = document.getElementById("img_hamburger_1");
   let section_hamburgers = document.getElementById("section_hamburgers");
}
const favicon = document.querySelector("#favicon");
let logo = "assets/crown_logo.webp";
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) logo = "assets/crown_logo_white.webp"
favicon.href = logo;

document.addEventListener("DOMContentLoaded", function() {
   document.querySelector("body").classList.add("scroll-y-none");
   document.querySelector("#img_hero_1").classList.remove("img_left_right");
   document.querySelector("#img_hero_2").classList.remove("img_right_left");

   const animations = () => {
      setTimeout(() => animation_1(), 1);
      setTimeout(() => animation_2(), timeTimeOut += time);
      setTimeout(() => animation_3(), timeTimeOut += time);
   }
   animations();
})
