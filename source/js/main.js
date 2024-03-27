import {mobileVhFix} from './utils/mobile-vh-fix.js';
//import {initModals} from './modules/modals/init-modals';
//import {Form} from './modules/form-validate/form';
//import {CustomSelect} from './modules/select/custom-select';
//import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';


//import {getMatchMedia} from './modules/get-match-media';
import {Burger} from './modules/burger';
//import {moveToSection} from './modules/move-to-section';
import {scrollSections} from './modules/scroll-sections';
import {initClothesModelsSlider} from './modules/init-clothes-models-slider';
import {chooseLook} from './modules/choose-look';
import {moveNextsection} from './modules/move-next-section';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    //initModals();
    //uploadFile();
    //uploadImageDrop();
    //const select = new CustomSelect();
    //select.init();
    //const form = new Form();
    //window.form = form;
    //form.init();


    //getMatchMedia();

    const burger = new Burger();
    burger.init();
    //moveToSection();
    //init();
    scrollSections();
    initClothesModelsSlider();
    chooseLook();
    moveNextsection();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
