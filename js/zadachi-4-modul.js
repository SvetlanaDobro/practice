// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

//____________________________________________________________
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza1(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza1))
 //________________________________________________________
//  Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName){
//     console.log(`Eating pizza ${pizzaName}`);
// });
//_________________________________________________________
// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      const message = onSuccess(pizzaName);
      return message;
    } else {
      const errorMessage = `There is no pizza with a name ${pizzaName} in the assortment.`;
      const message = onError(errorMessage);
      return message;
    }
  },
};



// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
//__________________________________________________________
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

   orderedItems.forEach(function(orderedItem) {
    
   
    totalPrice += orderedItem;
  })

  // Change code above this line
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
//________________________________________________________
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach(function(number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  })

  // Change code above this line
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3))
//______________________________________
// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach(function(num) {
    if (secondArray.includes(num)) {
      commonElements.push(num);
    }
  })

  return commonElements;
  // Change code above this line
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
//___________________________________________________________
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

const calculateTotalPrice1 = (quantity, pricePerItem) => quantity * pricePerItem;

console.log(calculateTotalPrice1(5, 100))
//_______________________________________
const calculateTotalPrice2 = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
}
console.log(calculateTotalPrice2([12, 85, 37, 4]))
//_________________________________________________
const filterArray1 = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}
console.log(filterArray1([12, 24, 8, 41, 76], 20))
//__________________________________________________
const getCommonElements1 = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  
  return commonElements;
}
console.log(getCommonElements1([10, 20, 30, 40], [4, 30, 17, 10, 40]))
//_______________________________________________
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
const changeEven = (numbers, value) => {
  const newNumbers = [];

  numbers.forEach(number => {
    if (number % 2 === 0) {
      newNumbers.push(number + value);
      
    } else {
      newNumbers.push(number);
    }
  })
  return newNumbers;
}
console.log(changeEven([17, 24, 68, 31, 42], 100));
//_______________________________________________________
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map()
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length) 
  
console.log(planetsLengths)
//_________________________________________________________
//1. Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books
//2.Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
     genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
     genres: ["fiction"],
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
     genres: ["horror", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee", rating: 7.94
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell", rating: 8.67
  },
];


const titles = books.map(book => book.title);
console.log(titles);

const genres = books.flatMap(book => book.genres);
console.log(genres);
//____________________________________________
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
//
//1.Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users
//2.Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users

// const getUserNames = users.map(user => user.name);
// console.log(getUserNames);
// const getUserNames = users => {
//     return users.map(user => user.name);

//   };

const getUserNames = users.map(user => {
    return user.name;
});
console.log(getUserNames);
  
const getUserEmails = users.map(user => user.email)
console.log(getUserEmails);
//_____________________________________________
// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers, а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => (number % 2 === 0) );
console.log(evenNumbers);

const oddNumbers = numbers.filter(number => (number % 2 !== 0));
console.log(oddNumbers);
//_________________________________________________
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень
const books1 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books1.flatMap(book => book.genres);
console.log(allGenres);
const uniqueGenres = allGenres.filter((book, index, array) => array.indexOf(book) === index);
console.log(uniqueGenres);
//___________________________________________________
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
const books2 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books2.filter(book => (book.rating >= MIN_RATING));
console.log(topRatedBooks);
const booksByAuthor = books2.filter(book => (book.author === AUTHOR));
console.log(booksByAuthor);
//__________________________________________________________

const users1 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
        age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
     age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
     age: 39,
  }
];
//Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color

const getUsersWithEyeColor = (users1, color) => {

  // return users1.filter(user => user.eyeColor === color).map(user=>user.name);
 
  
};

console.log(getUsersWithEyeColor(users1, "blue"));

const arr = [2, 4, 6];
const result = arr.filter((el) => el * 2);
console.log(result);
//_________________________________________________________
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge
const getUsersWithAge = (users1, minAge, maxAge) => {
  return users1.filter(user => (minAge <= user.age && user.age<= maxAge));
};
// console.table(getUsersWithAge(users1, 30, 40));
//______________________________________________________
// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.
const getUsersWithFriend = (users1, friendName) => {
  return users1.filter(user => user.friends.includes(friendName));
};
console.table(getUsersWithFriend(users1, "Briana Decker"));
//__________________________________________________
//  Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.
const getFriends = (users1) => {
  return users1.flatMap(friend=>friend.friends).filter((friend,index,array) => array.indexOf(friend)===index);
};
console.log(getFriends(users1));
//__________________________________________
// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true
const getActiveUsers = (users1) => {
  return users1.filter(el => el.isActive);
};
console.log(getActiveUsers(users1));
//________________________________________
// Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false
const getInactiveUsers = (users1) => {
   return users1.filter(el => (el.isActive===false));
};
console.log(getInactiveUsers(users1));
//___________________________________________
// Використовуючи метод find(), доповни код таким чином, щоб:
// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR
const books3 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR3 = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books3.find(book =>book.title===BOOK_TITLE);
const bookByAuthor = books3.find(book => book.author === AUTHOR3);
console.log(bookWithTitle);
console.log(bookByAuthor);
//_____________________________________________________________

const users2 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email

const getUserWithEmail = (users2, email) => {
  return users2.find(user => user.email === email);
};
console.log(getUserWithEmail(users2, "shereeanthony@kog.com"));
//____________________________________________
// Використовуючи метод every(), доповни код таким чином, щоб:
// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.

const firstArray = [26, 94, 36, 18];

const eachElementInFirstIsEven = firstArray.every((arrey) => (arrey % 2 === 0));
const eachElementInFirstIsOdd = firstArray.every((arrey) => (arrey % 2 !== 0));

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);

//__________________________________________________________________
const users3 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];
//Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false
const isEveryUserActive = (users3) => {
   return users3.every(users => users.isActive)
};
// console.log(isEveryUserActive(users3));
//______________________________________________
// Використовуючи метод some(), доповни код таким чином, щоб:
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
const secondArray = [17, 61, 23];

const anyElementInSecondIsEven = secondArray.some((arrey) => (arrey % 2 === 0));
const anyElementInSecondIsOdd = secondArray.some((arrey) => (arrey % 2 !== 0));
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
//______________________________________________
// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false
const isAnyUserActive = users3 => {
  return users3.some(user => user.isActive);
};
console.log(isAnyUserActive(users3));
//__________________________________________________
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]


const totalPlayTime = playtimes.reduce((acc, num) => {
  return acc + num;
});


const averagePlayTime = totalPlayTime / playtimes.length;

console.log(averagePlayTime);//673
//_______________________________________________
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
const players3 = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players3.reduce((total, player) => {
  return (total + player.playtime / player.gamesPlayed);
},0);
console.log(totalAveragePlaytimePerGame);//1023
//_____________________________________________
// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users
const calculateTotalBalance = users3 => {
  return users3.reduce((acc, user) => acc + user.balance,0,)
};
console.log(calculateTotalBalance(users3))//20916
//___________________________________________________
// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users
const getTotalFriendCount = users3 => {
  
   return users3.reduce((totalFriends, user) => totalFriends + user.friends.length, 0);

 };
console.log(getTotalFriendCount(users3)); //14
//__________________________________________________

const mySet = new Set([1, 2, 1, 4, 3, 2]);
const result1 = [...mySet];
console.log(result1); //  [1, 2, 4, 3]
//__________________________________________________
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];


const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();
console.log(ascendingReleaseDates);//[1967, 1973, 1984, 1997, 2008, 2012, 2016]
console.log(alphabeticalAuthors);//[1967, 1973, 1984, 1997, 2008, 2012, 2016]
//__________________________________________
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.
const releaseDates1 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates1 = [...releaseDates1].sort((a,b)=>a-b);

const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);

console.log(ascendingReleaseDates1);// [1967, 1973, 1984, 1997, 2008, 2012, 2016]
console.log(descendingReleaseDates);//[2016, 2012, 2008, 1997, 1984, 1973, 1967]
//_____________________________________________
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.
const authors1 = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];


const authorsInAlphabetOrder = [...authors1].sort((a,b) =>
a.localeCompare(b));

const authorsInReversedOrder = [...authors1].sort((a,b) =>
b.localeCompare(a));

console.log(authorsInAlphabetOrder);//['Bernard Cornwell', 'Fyodor Dostoevsky', 'Howard Lovecraft', 'Robert Sheckley', 'Tanith Lee']
console.log(authorsInReversedOrder);//['Tanith Lee', 'Robert Sheckley', 'Howard Lovecraft', 'Fyodor Dostoevsky', 'Bernard Cornwell']
//___________________________________________________
// Доповни код таким чином, щоб:
// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
const books4 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const sortedByAuthorName = [...books4].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));
console.log(sortedByAuthorName);

const sortedByReversedAuthorName = [...books4].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));
console.log(sortedByReversedAuthorName);

const sortedByAscendingRating = [...books4].sort((firstRating, secondRating) => firstRating.rating-secondRating.rating);
console.log(sortedByAscendingRating);

const sortedByDescentingRating = [...books4].sort((firstRating, secondRating) => secondRating.rating-firstRating.rating);
console.log(sortedByDescentingRating);
//___________________________________
const users4 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];
//Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів, відсортований за зростанням їх балансу (властивість balance).
const sortByAscendingBalance = users4 => {
   return [...users4].sort((firstBalans, secondBalans) => firstBalans.balance-secondBalans.balance);
};
console.table(sortByAscendingBalance(users4))
//___________________________________________________
//Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends).
const sortByDescendingFriendCount = users4 => {
   return [...users4].sort((firstFriend, secondFriend) => secondFriend.friends.length-firstFriend.friends.length);
};
console.table(sortByDescendingFriendCount(users4));
//__________________________________________________
// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.
const sortByName = users4 => {
return [...users4].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));

};
console.table(sortByName(users4));
//________________________________________________
//Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING
const books5 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;


const names = [...books5]
  .sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author))
  .filter(book => (book.rating >= MIN_BOOK_RATING))
  .map(user => user.author)
  
console.log(names);// ['Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley']
//__________________________________________________
//Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).
const getNamesSortedByFriendCount = users4 => {
  return [...users4].sort((firstFriend, secondFriend) => firstFriend.friends.length - secondFriend.friends.length).map(user => user.name);
};

console.log(getNamesSortedByFriendCount(users4))//['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez']
//_______________________________________________
// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.
const getSortedFriends = users4 => {
  return [...users4]
    .flatMap(friend => friend.friends)
    .filter((friend, index, array) => array
      .indexOf(friend) === index)
    .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend));
};
console.log(getSortedFriends(users4))//['Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson', 'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace']
//________________________________________________
// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender
const getTotalBalanceByGender = (users4, gender) => {
 
    
    // return users4.reduce((totalBalance, user) => {
    // if (user.gender === gender) {
    //   return totalBalance + user.balance;
    // }
    // return totalBalance;
    // }, 0);
  
   return users4
    .filter(user => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(getTotalBalanceByGender(users4,"female"))//8863
console.log(getTotalBalanceByGender(users4,"male"))/12053