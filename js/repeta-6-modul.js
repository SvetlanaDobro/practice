

//______________________________________________________
console.dir(document)

const jsButton = document.querySelector('.js-button')

jsButton.addEventListener('click', () => {
    const imageEl = document.querySelector('.image')
    console.log('imageEl', imageEl);

    console.log(imageEl.src);
    imageEl.src = 'https://klike.net/uploads/posts/2019-11/1574514215_2.jpg';
    imageEl.alt = 'Это новая картинка'
});

const heroTitleEl = document.querySelector('.article-title');
console.log(heroTitleEl)
console.log(heroTitleEl.textContent);
heroTitleEl.textContent = 'Welcome to Ukraine!' // замена текста
//_____________________________________________________
// Data-атрибуты

const actions = document.querySelectorAll('.js-actions button');
console.log(actions); //NodeList(3) [button, button, button]

console.log(actions[0].dataset); //DOMStringMap {action: 'add'}
console.log(actions[0].dataset.action);//add

jsButton.addEventListener('click', () => {
    const inputEl = document.querySelector('.js-input');
    console.log(inputEl.value);
})
//____________________________________________________________

//classList

const classEl = document.querySelector('.add-btn-js');

classEl.addEventListener('click', () => {
    const navEl = document.querySelector('.dishes');
    // console.log(navEl.classList);
    navEl.classList.add('super-cool');
    //navEl.classList.remove('dishes');
    navEl.classList.replace('super-cool', 'qwerty');
    console.log(navEl.classList.contains('qwerty'));
});

const classElement = document.querySelector('.toggle-btn-js');

classElement.addEventListener('click', () => {
    const navEl = document.querySelector('.dishes1');
    navEl.classList.toggle('qwerty');
})
//----------------------------------------------------

const currentPageUrl = '/portfolio';

const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
console.log(linkEl);
linkEl.classList.add('site-nav__link--current')

//___________________________________________________

//Навигация по DOM

const navRl = document.querySelector('.site');

//const firstNavItemEl = navRl.querySelector('.site-nav__item')
const firstNavItemEl = navRl.firstElementChild;
console.log(firstNavItemEl);
console.log(navRl.children);
console.log(navRl.children[1]);

//________________________________________________________

//Создаем заголовок
//appendChild - добовляет в конец
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent ='Это заголовок страницы'
console.log(titleEl);

document.body.appendChild(titleEl);

//---------------------------------------------
//создаем изображение
const imageEl = document.createElement('img');
imageEl.src = 'https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg';
imageEl.alt = "bear";

imageEl.width = 320;
console.log('imageEl', imageEl);
document.body.appendChild(imageEl);

const heroEl = document.querySelector('.hero');// привязываем к hero
heroEl.appendChild(titleEl); //вставляем заголовок
heroEl.appendChild(imageEl); //вставляем картинку

//или вставляем за одну операцию

heroEl.append(titleEl, imageEl);

//_________________________________________________
//Создаем и добавляем новый пункт меню

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);// вложили <a></a> в <li></li>

console.log(navItemEl); //
// console.log(navLinkEl);

const navEl = document.querySelector('.site');

navEl.appendChild(navItemEl); //поставили в конец

navEl.insertBefore(navItemEl, navEl.firstElementChild); //вставили в начало списка

navEl.insertBefore(navItemEl, navEl.lastElementChild); //вставит предпоследним

navEl.insertBefore(navItemEl, navEl.children[1]); //вставит перед вторым элиментом


//________________________________________________________

//создаем и добавлякм коллекцию

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D88' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F5105' },
];

const colorPickerContainerEl = document.querySelector('.js-mag-btn');

// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1){
//     const option = colorPickerOptions[i];

//    const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
    
//     elements.push(buttonEl);
// }

//buttonEl.style.width = 40; //писать все свойства отдельно

// вместо for заменяем на map

// const elements = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement('button');
//      buttonEl.type = 'button';
//      buttonEl.classList.add('color-picker__option');
//      buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
    
//     return buttonEl;
// })

// colorPickerContainerEl.append(...elements);
// console.log(elements);

//_____________________________________________________________

//пишем функцию для создания разметки колорпикера

const makeColorPickerOptions = options => {
    return options.map(option => {
        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.classList.add('color-picker__option');
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color;

        return buttonEl;
    });
};

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);
console.log(elements);

//__________________________________________________________

//Создаем карточку продукта

const product = {
    name: 'Сервоприводы',
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut facilis quos hic beatae, corporis quam voluptatum dolore minus culpa numquam repudiandae, placeat suscipit non.',
    price: 2000,
    available: true,
    onSale: true
};

//  <article class="product">
//         <h2 class="product__name">Название</h2>
//         <p class="product__descr">Описание</p>
//         <p class="product__price">Цена:</p>
//     </article> 


const productEl = document.createElement('article');
productEl.classList.add('product');

const nameEl = document.createElement('h2');
nameEl.textContent = product.name;
nameEl.classList.add('product__name');

const descrEl = document.createElement('p');
descrEl.textContent = product.description;
descrEl.classList.add('product__descr');

const priceEl = document.createElement('p');
priceEl.textContent = `Цена: ${product.price}` ;
priceEl.classList.add('product__price');

productEl.append(nameEl, descrEl, priceEl);

console.log(productEl);

//______________________________________________________________

// парсить
// Свойство innerHTML
// innerHTML может создавать теги и перезаписывать строки

const titleElem = document.querySelector('.titleInner'); //получаем ссылку на элимент

console.log(titleElem.textContent); //вернет весь контент элимента// Это заголовок

console.log(titleElem.innerHTML);// вернет все с вложенностью//Это <span>заголовок</span>

//titleElem.innerHTML = '<a href="">Это ссылка</a>'; //может создавать теги, перезапишет. Старое удаляет, новое запишет

//titleElem.innerHTML = ''; //удалит

//titleElem.innerHTML += '<a href="">Это ссылка</a>'; //добавитб ТАК НЕЛЬЗЯ ДЕЛАТЬ

//используем innerHTML когда нужно очистить или записать старое

//если добавить : insertAdjacentHTML

titleElem.insertAdjacentHTML('afterbegin', '<a href="" class="title__link">Это ссылка</a>');// добавит вперед строки

titleElem.insertAdjacentHTML('afterend', '<a href="" >Это ссылка</a>'); // добавит как соседа после
//__________________________________________________________________

//Событие

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//     console.log('Клик');
// });

addListenerBtn.addEventListener('click', (event) => {
    console.log(event);
    console.log('Вешаю слушателя события на целевую кнопку');

    targetBtn.addEventListener('click', onTargetBtnClick);  // Добавили слушателя событий, передаем одну и ту же функцию
});

removeListenerBtn.addEventListener('click', (event) => {
    console.log('Снимаю слушателя события с целевой кнопки');

     targetBtn.removeEventListener('click', onTargetBtnClick);  // Удалить слушателя событий, передаем одну и ту же функцию
        
    
})

function onTargetBtnClick(event) {  //если нужно отписаться, создаем функцию внешнюю
    console.log('Клик по целевой кнопке');
}
//__________________________________________________________________

const form = document.querySelector('.js-register-form'); //блок выборки элиментов

form.addEventListener('submit', onFormSubmit); //блок подписок

function onFormSubmit(event) {  //блок обработчиков подписок
    event.preventDefault(); //предотвратить перезагрузку

    const formElements = event.currentTarget.elements; 

    console.log(formElements);

    console.dir(event.currentTarget.elements.subscription.value); //текущая цель//можнозайти вглубь

    const mail = formElements.email.value;
    const password = formElements.password.value;
    const subscription = formElements.subscription.value;

    const formData = { //форма для отправки на сервер, собрали все данные
        mail,
        password,
        subscription,
    };
    
    //console.log(mail, password); //получаем еmail и пароль

    //console.log(formData);
}

//если нужно собрать все данные с формы

form.addEventListener('submit', onFormSubmit1);

function onFormSubmit1(event) {  
    event.preventDefault();

    const formData = new FormData(event.currentTarget) //собирает все значения, всех полей

    formData.forEach((value, name) => {
        console.log('onFormSubmit1 ->', name);
        console.log('onFormSubmit1 -> value', value);
    })
}
//___________________________________________________________
/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button-btn > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button-btn'),
};

//или

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const licenseCheckbox = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

//refs.input.addEventListener('focus', onInputFocus); // когда получил фокус
//refs.input.addEventListener('blur', onInputBlur); //когда потерял фокус
//refs.input.addEventListener('change', onInputChange); // происходят изменения, не юзать для текста
refs.input.addEventListener('input', onInputChange); //каждое изменение внутри инпута

refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() {
  console.log('Инпут потерял фокус - событие blur');
}


function onInputChange(event) {
    //console.log(event.currentTarget.value)
  refs.nameLabel.textContent = event.currentTarget.value; //чтобы изменить ввод текста или добавить к существующиму тексту длугой ввод
}

function onLicenseChange(event) {
    //console.log('qweqwe')//появляется когда включаю чекбокс
    //console.log(event.currentTarget.checked);// приходи true или folse выбран чекбокс или не выбран
  refs.btn.disabled = !event.currentTarget.checked; //кнопка выключена когда не выбран чекбокс
}

//_______________________________________________

/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs1 = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress);
refs1.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
    
   console.log('event.key: ', event.key);
   console.log('event.code: ', event.code);

  refs1.output.textContent += event.key;
};

function onClearOutput() {
  refs1.output.textContent = '';
}
//_____________________________________________________

/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseover', onMouseEnter);
boxRef.addEventListener('mouseout', onMouseLeave);
//boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMouseMove(event) {
  console.log(event);
}
//_____________________________________________________________

/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs2 = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs2.openModalBtn.addEventListener('click', onOpenModal);
refs2.closeModalBtn.addEventListener('click', onCloseModal);
refs2.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
