// const clients = ["Mango", "Poly", "Ajax", "Ajaxgfhb", "Ajaxgedym"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); 
// console.log(clients[lastElementIndex]); 
// let i
// for (i = 0; i < clients.length; i += 1){
//     console.log(clients[i]);
// }

const string = "javascript";
for (const character of string) {
  console.log(character);
}

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Pol";
let message;

for (const client of clients) {
  // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
  // іменем клієнта. Якщо збігається - записуємо в message повідомлення
  // про успіх і робимо break, щоб далі не шукати
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }
  // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
  message = "Клієнт з таким ім'ям відсутній в базі даних!";
}
console.log(message); // "Клієнт з таким ім'ям є в базі даних!"


const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34, 99];
const threshold = 15;
// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }
  console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
}


const friends = ['Svitlana', 'Maxim', 'Masha', 'Ania'];
console.table(friends);

const lastIndex = friends.length - 1;
console.log(lastIndex);

for (let i = 0; i <= lastIndex; i += 1){
  friends[i] += '-1';
  console.log(friends[i]);
}

//________________________________________________
// Посчитать общую сумму покупок в корзине

const cart = [54, 28, 185, 70, 92, 17, 128];
let total = 0;
// for (let i = 0; i < cart.length; i += 1){
//   console.log(cart[i]);
//   total += cart[i];
// }
for (const value of cart) {
  total += value;
}
console.log('Total:', total);
// через функцию:
const calculateTotalPrice = function (items) {
  let total = 0;
  for (const item of items) {
    total += item;
  }
  return total;
}
console.log('Total-1:', (calculateTotalPrice([54, 28, 185, 70, 92, 17, 128])));
console.log('Total-2:', (calculateTotalPrice([5, 10, 50, 23, 55])));
//______________________________________________________________

// Добавить к каждому значению процент 10%
for (let i = 0; i < cart.length; i += 1) {
  cart[i] = Math.round(cart[i] * 1.1);
}
console.log(cart);

// Напиши скрипт который подсчитывает суму всех четных чисел в масиве
const numbers1 = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total1 = 0;

// for (let i = 0; i < numbers1.length; i += 1) {
//   const number1 = numbers1[i];
//   console.log(number1);
//   if (number1 % 2 === 0) {
//     console.log('Четное');
//     total1 += number1;
//   }
// }
// ИЛИ
// for (const number1 of numbers1) {
//   // console.log(number1);
//   if (number1 % 2 === 0) {
//     console.log(`${number1} -четное`);
//     total1 += number1;
//   }
// }

// Логика от обратного
for (const number1 of numbers1) {
  
  if (number1 % 2 !== 0) {
    console.log('Эту итерацию пропустить', number1);
    continue;
  }
  console.log(`${number1} -четное`);
    total1 += number1;
}
console.log('Total:', total1);
//__________________________________________________________________
// Напиши скрипт поиска логина, если логина нет, вывести сообщение, если найден другое сообщение
const logins = ['mamba', 'ananas', 'apple', 'kiwi', 'tukwa'];
// const loginToFind = 'apple';

// let messageLog = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;
// console.log(messageLog);

// с помощью функции:

const findLogin = function (allLogins, loginToFindFun) {
  // for (const login of allLogins) {
  //   if (login === loginToFindFun) {
  //     return `Пользователь ${loginToFindFun} найден`;
  //   }
  // }
  // return `Пользователь ${loginToFindFun} не найден`;

  // ИЛИ
  return allLogins.includes(loginToFindFun) ? `Пользователь ${loginToFindFun} найден` : `Пользователь ${loginToFindFun} не найден`;
   
};
console.log(findLogin(logins, 'jhujhujh'));
console.log(findLogin(logins, 'kiwi'));
console.log(findLogin(logins, 'kjnvhidzhui'));
console.log(findLogin(logins, 'tukwa'));
//_____________________________________________________________________

// Напиши скрипт поиска самого маленького числа в масиве
// const numbers2 = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers2[0];
// for (const number2 of numbers2) {
//     if (number2 < smallestNumber) {
//       smallestNumber = number2;
//     }
// }
//   console.log('smallestNumber:', smallestNumber);
//   // самого большого числа
//   for (const number2 of numbers2) {
//     if (number2 > smallestNumber) {
//       smallestNumber = number2;
//     }
// }
// console.log('bigestNumber:', smallestNumber);
// ЧЕРЕЗ ФУНКЦИЮ
const findSmallestNumber = function (numbers2) {
  let smallestNumber = numbers2[0];
  for (const number2 of numbers2) {
    if (number2 < smallestNumber) {
      smallestNumber = number2;
    }
  }
  return smallestNumber;
}
console.log('smallestNumber:', (findSmallestNumber([51, 18, 13, 24, 7, 85, 19])));

    
// Напиши скрипт который объединяет все элементы массива в одно строковое значение
// const friends2 = ['Svitlana', 'Maxim', 'Masha', 'Ania'];
// // let string2 = '';
// // for (const friend2 of friends2) {
// //   string2 += friend2 + ',';
// // }
// // string2 = string2.slice(0, string2.length - 1);
// const string2 = friends2.join(', ');
// console.log(string2);
//__________________________________________________________________
// Напиши скрипт который заменяет регистр каждого символа в строке на противололожный
// const string3 = 'JavaScript';
// const letters = string3.split('');
// let invertedString = '';

// for (const letter of letters) {
  //   console.log(letter);
  //   if (letter === letter.toLowerCase()) {
  //     console.log('Эта буква в нижнем регистре - ', letter);
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     invertedString += letter.toLowerCase();
  //   }
// ИЛИ
//   invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);
// ЧЕРЕЗ Функцию
const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
  }

  return invertedString;
  }

console.log(changeCase('njkhKLKJH'));
console.log(changeCase('ASDFFmkio'));
//___________________________________________________________________________
// Делаем slug в URL из названия статьи например на dev.to. заголовок статьи состоит только из букв и пробелов
// const title = 'Top 10 benefits of React framework';
// const normalizedTitle = title.toLowerCase();     //нормализируем строку
// console.log(normalizedTitle);
// const words = normalizedTitle.split(' ');    //разбиваем по словам
// console.log(words);
// const slug = words.join('-');    //сшиваем в строку с разделителями
// console.log(slug);
// // ИЛИ
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);
const slugify = function (string) {
  // const normalizedTitle = string.toLowerCase();
  // const words = normalizedTitle.split(' ');
  // const slug = words.join('-');

  // return slug;
  // ИЛИ
  return string.toLowerCase().split(' ').join('-');
};
console.log(slugify('He speaks English badly… but is very polite'));
console.log(slugify('At first Bridget and Annie wanted that Hector leave the apartment'));
console.log(slugify('He also wanted to be his friend'));

//_______________________________________________________________
// Напиши скрипт который считает суму элиментов двух масивов
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total2 = 0;
// const numbers3 = array1.concat(array2);
// for (const number3 of numbers3) {
//   total2 += number3;
// }
// console.log(total2);

// Работаем с коллекцией карточек в trello 
// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1); //Удаление элимента
// console.log(cards);
// const cardToInsert = 'Карточка-6';

// cards.splice(1, 0, 10); //Вставить элимент в произвольное место
// console.log(cards);

// cards.splice(4, 1, 555); //Замена элимента
// console.log(cards);
//___________________________________________________

// Написать функцию logItems(items) для перебора и логирования массива
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['klaviatyra', 'nayshniki', 'chasu']);