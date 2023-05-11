/*
 * Всплытие событий
 * event.target - целевой (исходный) элемент
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие
 */

const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(evt) {
  console.log('onParentClick');
  console.log('onParentClick -> evt.target', evt.target);
  console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}

function onChildClick(evt) {
  console.log('onChildClick');
  console.log('onChildClick -> evt.target', evt.target);
  console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
}

function onInnerChildClick(evt) {
  console.log('onInnerChildClick');
  console.log('onInnerChildClick -> evt.target', evt.target);
  console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget);
}

//____________________________________________________

/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  console.log(evt.target.textContent);
}

/*
 * Код добавления кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}

//______________________________________________________

/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//можно заменить if :
// currentActiveBtn?.classList.remove('tags__btn--active');

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags__btn--active');

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle('tags__btn--active');
  console.log(selectedTags);
}

//______________________________________________________________

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
    <div class="color-card">
     <div><div><div> <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div></div></div></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
    </div>
    `;
    })
    .join('');
}

function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}

//___________________________________________________________________

/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
 */
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove', _.throttle(onMouseMove, 250));

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

/*
 * Input и debounce
 */
const inputRef = document.querySelector('.js-input-1');
const outputRef = document.querySelector('.js-output-1');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
//______________________________________________________

const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs1 = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs1.input.addEventListener('input', _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(evt) {
  console.log('INPUT');
  const filter = evt.target.value.toLowerCase();

  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs1.list.innerHTML = markup;
}

//________________________________________________________________________

/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');
}

//________________________________________________________________

/*
 * Библиотека lazysizes
 * - feature detection
 */

if ('loading' in HTMLImageElement.prototype) {
  console.log('Браузер поддерживает lazyload');
  addSrcAttrToLazyImages();
} else {
  console.log('Браузер НЕ поддерживает lazyload');
  addLazySizesScript();
}

const lazyImages1 = document.querySelectorAll('img[data-src]');

lazyImages1.forEach(image => {
  image.addEventListener('load', onImageLoaded1, { once: true });
});

function onImageLoaded1(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');
}

function addLazySizesScript() {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script);
}

function addSrcAttrToLazyImages() {
  const lazyImages1 = document.querySelectorAll('img[loading="lazy"]');

  lazyImages1.forEach(img => {
    img.src = img.dataset.src;
  });
}