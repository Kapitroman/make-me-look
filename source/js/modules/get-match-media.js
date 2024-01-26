import {scrollSections} from './scroll-sections';
import {addHeaderShadow} from './add-header-shadow';

const getMatchMedia = () => {
  const matchMedia = gsap.matchMedia();
  matchMedia.add('(orientation: landscape)', () => {
    scrollSections();
    window.removeEventListener('scroll', addHeaderShadow);
  });
  matchMedia.add('(orientation: portrait)', () => {
    window.addEventListener('scroll', addHeaderShadow);
  });
}

export {getMatchMedia};
