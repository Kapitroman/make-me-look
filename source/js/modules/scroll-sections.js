gsap.registerPlugin(ScrollTrigger);

const matchMedia = gsap.matchMedia();

const scrollSections = () => {
  let container = document.querySelector('.wrapper');

  if (!container) {
    return;
  }

  const translateSection = () => {
    matchMedia.add('(orientation: landscape)', () => {
      gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => "+=" + container.offsetWidth,
          invalidateOnRefresh: true,
        }
      });
    });
  };

  const moveToSection = () => {
    Array.from(document.querySelectorAll('.header__link')).forEach((item, index) => {
      console.log(item);

      item.addEventListener('click', (evt) => {
        evt.defaultPrevented;
        matchMedia.add('(orientation: landscape)', () => {
          gsap.to(window, {duration: 3, scrollTo:{ y: document.documentElement.clientWidth * 7 / 6 * (index + 1)}});
        });
        matchMedia.add('(orientation: portrait)', () => {
          gsap.to(window, {duration: 3, scrollTo:{ y: '#section' + (index + 2), offsetY: 72}});
        });
      });
    });
  }

  const addHeaderClass  = () => {
    const header = document.querySelector('[data-header]');

    const addShadowHandler = () => {
      if (document.documentElement.scrollTop > header.offsetHeight) {
        header.classList.add('header--shadow');
      } else {
        header.classList.remove('header--shadow');
      }
    };

    const addLastSectionHandler = () => {
      if (document.documentElement.scrollTop > window.innerWidth * 6) {
        header.classList.add('header--last-section');
      } else {
        header.classList.remove('header--last-section');
      }
    };

    matchMedia.add('(orientation: landscape)', () => {
      window.removeEventListener('scroll', addShadowHandler);
      window.addEventListener('scroll', addLastSectionHandler);
    });

    matchMedia.add('(orientation: portrait)', () => {
      window.addEventListener('scroll', addShadowHandler);
      window.removeEventListener('scroll', addLastSectionHandler);
    });
  };

  const init = () => {
    translateSection();
    moveToSection();
    addHeaderClass();
  }

  init();
  //ScrollTrigger.addEventListener("refreshInit", init);
};

export {scrollSections};
