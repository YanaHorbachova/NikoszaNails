const ParamsGallary = {
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

  const ParamsSalon = {
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
      1024: {
        slidesPerView: 3,                
        slidesPerGroup: 3,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 4,                
        slidesPerGroup: 4,
        spaceBetween: 10
      }
    }    
  };

  const ParamsTeam = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    preloadImages: true,
    navigation: true,
    loop: true,
  }

  const ParamsReviews= {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    preloadImages: true,
    navigation: true,
    loop: true,
  }



  

  export {ParamsGallary, ParamsTeam, ParamsSalon, ParamsReviews};