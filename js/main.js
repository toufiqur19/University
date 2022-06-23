 // toggle search
 const searchToggle = document.querySelector(".searchToggle");

 searchToggle.addEventListener("click", () =>{
     searchToggle.classList.toggle("active");
 });


// Active Home
 const activePage = window.location.pathname;
 const navLinks = document.querySelectorAll('nav a').
 forEach(link => {
   if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
   }
 });


// slick logo slider
$(document).ready(function(){
    $('.post-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 1000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
      });
  });


// swiper blog card slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });












 

  