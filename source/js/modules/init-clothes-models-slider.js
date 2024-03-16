import {matchMedia} from './matchMedia';

const clothesItemShowContainer = document.querySelector('.clothes-item-show');
let swiper, swiper2, swiper3;

const initLandscapeSwiper = (slider, slider2) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: clothesItemShowContainer.querySelector('.swiper-pagination'),
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
};

export {initClothesModelsSlider};
