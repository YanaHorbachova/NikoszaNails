const params = {
    lazy: {
      loadPrevNext: true,
    },
    navigation: true,
    virtual: true,
    breakpoints: {
      320: {
        slidesPerView: 1,                         
        slidesPerGroup: 1,
        spaceBetween: 5
      },
      768: {
        slidesPerView: 2,                
        slidesPerGroup: 2,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,                
        slidesPerGroup: 3,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 4,                
        slidesPerGroup: 4,
        spaceBetween: 15
      }
    }    
  };

  export default params;