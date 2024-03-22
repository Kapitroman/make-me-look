const chooseLook = () => {
  const controlls = document.querySelector('.al-assistant__viewer-controls-container');

  if (!controlls) {
    return;
  }

  const pictures = document.querySelectorAll('.al-assistant__model');
  const pictureButtons = document.querySelectorAll('.al-assistant__viewer-button');

  const clickPictureButtonHandler = (evt) => {
    evt.preventDefault();
    const target = evt.target.closest('a');
    if (!target) {
      return;
    }
    if (target.classList.contains('is-active')) {
      return;
    }
    const index = target.getAttribute('data-index');
    pictures.forEach((item) => item.classList.remove('is-active'));
    pictures[index].classList.add('is-active');
    pictureButtons.forEach((item) => item.classList.remove('is-active'));
    pictureButtons[index].classList.add('is-active');
  }

  controlls.addEventListener('click', clickPictureButtonHandler);
}

export {chooseLook};
