const addHeaderShadow  = () => {
  const header = document.querySelector('[data-header]');

  if (!header) {
    return;
  }

  if (document.documentElement.scrollTop > header.offsetHeight) {
    header.classList.add('header--shadow');
  } else {
    header.classList.remove('header--shadow');
  }
};

export {addHeaderShadow};
