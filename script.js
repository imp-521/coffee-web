const swiper = new Swiper(".swiper", {
  direction: "horizontal", // یا 'vertical' اگر می‌خواید اسلاید عمودی باشد
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  slidesOffsetBefore: 70, // فاصله از سمت چپ
  slidesOffsetAfter: 70, // فاصله از سمت راست
});
