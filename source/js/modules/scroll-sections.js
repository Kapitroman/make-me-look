gsap.registerPlugin(ScrollTrigger);

const scrollSections = () => {
  let container = document.querySelector('.wrapper');
  // let sections = gsap.utils.toArray(".panel");

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
