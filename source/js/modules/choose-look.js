const chooseLook = () => {
  const viewer = document.querySelector('.al-assistant__viewer');

  if (!viewer) {
    return;
  }


  const pictures = viewer.querySelectorAll('.al-assistant__model');
  const controllButtons = viewer.querySelector('.al-assistant__viewer-buttons-container');
  const controllRadios = viewer.querySelector('.al-assistant__viewer-radio-container');
  const pictureButtons = viewer.querySelectorAll('.al-assistant__viewer-button');
  const radioButtons = viewer.querySelectorAll('.al-assistant__viewer-radio-container input');
  const links = viewer.querySelectorAll('.al-assistant__viewer-links-container img');
  radioButtons[1].setAttribute('checked', true);
  radioButtons[1].checked = true;
  console.log(radioButtons);
  console.log(radioButtons[1]);

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
    radioButtons.forEach((item) => item.removeAttribute('checked'));
    links.forEach((item) => item.classList.remove('is-active'));
    pictureButtons.forEach((item) => item.classList.remove('is-active'));
    pictures[index].classList.add('is-active');
    radioButtons[index].setAttribute('checked', true);
    links[index].classList.add('is-active');
    pictureButtons[index].classList.add('is-active');
  }

  const changeRadioButtonHandler = (evt) => {

    const target = evt.target.closest('label').querySelector('input');
    const index = target.getAttribute('data-radio-index');
    pictures.forEach((item) => item.classList.remove('is-active'));
    radioButtons.forEach((item) => item.removeAttribute('checked'));
    links.forEach((item) => item.classList.remove('is-active'));
    pictureButtons.forEach((item) => item.classList.remove('is-active'));
    pictures[index].classList.add('is-active');
    radioButtons[index].setAttribute('checked', true);
    links[index].classList.add('is-active');
    pictureButtons[index].classList.add('is-active');
  }

  controllButtons.addEventListener('click', clickPictureButtonHandler);
  controllRadios.addEventListener('change', changeRadioButtonHandler);
}

export {chooseLook};
