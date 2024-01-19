gsap.registerPlugin(ScrollTrigger);

const scrollSections = () => {
  let container = document.querySelector('.wrapper');

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
};

export {scrollSections};
