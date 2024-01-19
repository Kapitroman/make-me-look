import {scrollSections} from './scroll-sections';

const getMatchMedia = () => {
  const matchMedia = gsap.matchMedia();
  matchMedia.add('(orientation: landscape)', () => {
    scrollSections();
  });
}

export {getMatchMedia};
