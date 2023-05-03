// Удаляем элемент (splise)
let arrOne = [1, 2, 3];
arrOne.splice(1, 1);
console.log(arrOne);

// Удаляем элемент и возвращаем его в переменную
let arrTwo = [1, 2, 3];
let removed = arrTwo.splice(1, 1);
console.log(removed);

// Заменяем элемент
let arrThree = [1, 2, 3];
 arrThree.splice(0, 1, 5);
console.log(arrThree);

// Добавляем элементы
let arrFour = [1, 2, 3];
 arrFour.splice(1, 0, 5);
console.log(arrFour);

// Удаляем последний элимент массива
let arrFive = [1, 2, 3, 4];
 arrFive.splice(-1, 1);
console.log(arrFive);

// Копируем часть массива (slice)
let arr1 = ['Valia', 'Svitlana', 'Olia', 'Masha'];
let arr2 = arr1.slice(1, 4);
console.log(arr2);
let arr3 = arr1.slice(-2, -1);
console.log(arr3);
let arr4 = arr1.slice();
console.log(arr4);

//метод (concat)
let arry1 = ['kot', 'sobaka', 'petuh', 'krusa', 'musha'];
let arry2 = arry1.concat('lev');
console.log(arry2);

//метод поиска в массиве indexOf, lastIndexOf, includes
let arrey = ['komp', 'musha', 'klava', 'sistemnik', 'kovrik']
console.log(arrey.indexOf('klava'));
console.log(arrey.indexOf('klaviatura'));

console.log(arrey.includes('klaviatura'));
console.log(arrey.includes('sistemnik'));

//Сортировка метод (sort) по алфавиту
let arrey1 = ['komp', 'musha', 'klava', 'sistemnik', 'kovrik'];
console.log(arrey1.sort());
console.log(arrey1.reverse());

//Преобразование массива, метод - map. Повертае массив с перших літер
let arr = ['Ania', 'Valia', 'Svitlana', 'Olia', 'Masha'];
let result = arr.map(function (item, index, arrey) {
    return item[0];
});
console.log(arr);
console.log(result);

//Преобразование строки в массив
let str = 'Maxim,Masha,Ania,Niasha,Musia';
let newStr = str.split(',', 3);
console.log(newStr);

//Перебор элиментов масива, цикл For
let arrLen = ['komp', 'musha', 'klava', 'sistemnik', 'kovrik'];
console.log(arrLen.length);
for (let i = 0; i < arrLen.length; i++){
    console.log(arrLen[i]);
}
//ИЛИ
let arrItems = ['komp', 'musha', 'klava', 'sistemnik', 'kovrik'];
console.log(arrLen.length);
for (let arrItem of arrItems){
    console.log(arrItem);
}

//ОБ'ЄКТИ
// Цикл for...in перебирає ключі об'єкта object.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
};


const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false
//_______________________________________
const book1 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book1) {
  // Якщо це власна властивість - виконуємо тіло if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book1[key]);
  }

  // Якщо це невласна властивість - нічого не робимо
}
//________________________________________
const book2 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book2);
console.log(keys); // ['title', 'author', 'genres', 'rating']

const values = Object.values(book2);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', Array(2), 8.38]

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }
const entries = Object.entries(book2);
console.log(entries); // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
//______________________________________
const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values1 = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of values1) {
  total += value;
}
console.log(total); // 20
//_____________________________________________________

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];
for (const book of books) {
  // Об'єкт книги
  console.log(book);
  // Назва
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
//отримаємо список назв усіх книг в колекції books.
const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

//Дізнаємося середній рейтинг усієї нашої колекції.
let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2
//____________________________________
//spread: передача аргументів
const temps = [14, -4, 25, 8, 11];

// В консолі буде масив
console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25
//_________________________________________
//spread: створення нового масиву
// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]
//________________________________________________
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]
//______________________________________________
//spread: створення нового об'єкта
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
 //_________________________________________

//  rest: збирання всіх аргументів функції
function multiply(...args) {
  console.log(args); // масив усіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
//_____________________________________
function multiply1(firstNumber, secondNumber, ...otherArgs) {
   console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply1(1, 2);
multiply1(1, 2, 3);
multiply1(1, 2, 3, 4);
//______________________________
//Деструктуризація об'єктів
const book3 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, author, isPublic, rating, coverImage } = book3;
console.log(coverImage); // undefined

const accessType = isPublic ? "публічному" : "закритому";
const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
//______________________________________________
const book4 = {
  title4: "The Last Kingdom",
  author4: "Bernard Cornwell",
};

// Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
const {
  title4,
  coverImage4 = "https://via.placeholder.com/640/480",
  author4,
} = book4;

console.log(title4); // The Last Kingdom
console.log(author4); // Bernard Cornwell
console.log(coverImage4); // https://via.placeholder.com/640/480
//_____________________________________________

//Зміна імені змінної, Такий запис читається як «Створити змінну firstTitle, в яку помістити значення властивості title з об'єкта firstBook» тощо
const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смішної людини",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смішної людини
console.log(secondCoverImage); // https://via.placeholder.com/640/480
//__________________________________________________________

//Деструктуризація в циклах
const books5 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
];
for (const book5 of books5) {
  const { title, author, rating } = book5;

  console.log(title);
  console.log(author);
  console.log(rating);
};
//_________________________________________
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308