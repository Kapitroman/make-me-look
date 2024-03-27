const moveNextsection = () => {
  const button = document.querySelector('.hero__button-next');

  if (!button) {
    return;
  }

  const moveTo = (evt) => {
    evt.defaultPrevented;
      gsap.to(window, {duration: 1, scrollTo:{ y: document.documentElement.clientWidth * 7 / 6 }});
  }

  button.addEventListener('click', moveTo);
}

export {moveNextsection};
