import {matchMedia} from './matchMedia';

//const breakpoint = window.matchMedia('(max-width:479px)');
const clothesItemShowContainer = document.querySelector('.clothes-item-show');
let swiper, swiper2, swiper3;

const initLandscapeSwiper = (slider, slider2) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  swiper2 = new Swiper(slider2, {
    slidesPerView: 1,
    spaceBetween: 20,
  });

  const slideChange = () => {
    let activeSlide = swiper.realIndex;
    swiper2.slideTo(activeSlide);
  }

  const slideChange2 = () => {
    let activeSlide = swiper2.realIndex;
    swiper.slideTo(activeSlide);
  }

  swiper.on('slideChange', slideChange);
  swiper2.on('slideChange', slideChange2);
};

const initPortraitSwiper = (slider3) => {
  swiper3 = new Swiper(slider3, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

const initClothesModelsSlider = () => {
  if (!clothesItemShowContainer ) {
    return;
  }

  const clothesSlider = clothesItemShowContainer.querySelector('.clothes-item-show__slider-items');
  const modelsSlider = clothesItemShowContainer.querySelector('.clothes-item-show__slider-models');

  matchMedia.add('(orientation: landscape)', () => {
    if (swiper3) {
      swiper3.destroy(true, true);
    }
    initLandscapeSwiper(clothesSlider, modelsSlider);
  });

  matchMedia.add('(orientation: portrait)', () => {
    if (swiper) {
      swiper.destroy(true, true);
    }
    if (swiper2) {
      swiper2.destroy(true, true);
    }
    initPortraitSwiper(modelsSlider);
  });

  /*
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }
    } else {
      initSwiper(sliderStagesProject);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
  */
};

export {initClothesModelsSlider};
/*
const breakpoint = window.matchMedia('(max-width:479px)');
const sliderStagesProject = document.querySelector('.project-stages__content');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {

    direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 14,
  });

  const controlsStages = Array.from(document.querySelectorAll('.project-stages__control'));

  const onClickControlStage = (evt) => {
    const indexButton = evt.target.closest('button').getAttribute('data-stage');
    swiper.slideTo(indexButton, 800);
  };

  controlsStages.forEach((item) => {
    item.addEventListener('click', onClickControlStage);
  })

  const setActiveClass = () => {
    const index = swiper.activeIndex;
    controlsStages.forEach((item) => item.classList.remove('is-active'));
    controlsStages[index].classList.add('is-active');
  }

  swiper.on('realIndexChange', setActiveClass);
};

const initStagesProjectSlider = () => {
  if (!sliderStagesProject ) {
    return;
  }

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }
    } else {
      initSwiper(sliderStagesProject);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initStagesProjectSlider};
*/
