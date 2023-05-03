
import prod from './products.js';

console.log(prod);

//пишем функцию для создания карточки продукта



//  <article class="product">
//         <h2 class="product__name">Название</h2>
//         <p class="product__descr">Описание</p>
//         <p class="product__price">Цена:</p>
//

const productsContainerEl = document.querySelector('.js-products')

const makeProductCard = ({name,description,price }) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const nameEl = document.createElement('h2');
    nameEl.textContent = name;
    nameEl.classList.add('product__name');

    const descrEl = document.createElement('p');
    descrEl.textContent = description;
    descrEl.classList.add('product__descr');

    const priceEl = document.createElement('p');
    priceEl.textContent = `Цена: ${price}`;
    priceEl.classList.add('product__price');
    
    productEl.append(nameEl, descrEl, priceEl);

    return productEl;
};

console.log(makeProductCard(prod[1]));

const elements = prod.map(makeProductCard);

console.log(elements);

productsContainerEl.append(...elements);


