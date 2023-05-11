// Спливання подій

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert("Parent click handler");
// });

// child.addEventListener("click", () => {
//   alert("Child click handler");
// });

// descendant.addEventListener("click", () => {
//     alert("Descendant click handler");


// event.target - це посилання на вихідний елемент, на якому відбулася подія, в процесі спливання вона - незмінна.
// event.currentTarget - це посилання на поточний елемент, до якого дійшло спливання, на ньому зараз виконується обробник події.
// Якщо слухач події зареєстрований на найвищому елементі, то він «спіймає» усі кліки всередині, тому що події будуть спливати до цього елемента. Відкрийте консоль в прикладі і поклікайте, event.target - це завжди вихідний (і найглибший) елемент, на якому був клік, а event.currentTarget не змінюється.


    
parent.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});

// });

//_____________________________________________________

// Припинення спливання


// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();                          // Припинення спливання
//   alert("Descendant click handler");
// });


// Якщо необхідно повністю зупинити обробку події, використовується метод stopImmediatePropagation(). Він не тільки запобігає спливанню, але й зупиняє обробку подій на поточному елементі.

//________________________________________
// Палітра кольорів

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items Некоторые вспомогательные функции для визуализации элементов палитры
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
};

//______________________________________________________

//Підключення бібліотеки

const result = _.add(2, 3);
console.log(result); // 5