var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: false,
    slidesPerView: '3',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });




  const menu=document.getElementById("menu-icon");
  
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100

});

ScrollReveal().reveal('.atw', { origin: 'top' });
ScrollReveal().reveal('.earth', { origin: 'right' });
ScrollReveal().reveal('.buttons,.icons', { origin: 'bottom' });
ScrollReveal().reveal('.club', { origin: 'left' });

