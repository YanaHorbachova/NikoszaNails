const params = {
    preloadImages: true,
    navigation: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,                
        slidesPerGroup: 2,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 3,                
        slidesPerGroup: 3,
        spaceBetween: 15
      }
    }    
  };

  export default params;