const fruits = ["Яблуко", "Груша", "Апельсин"];
const shoppingCart = fruits;
shoppingCart.push("Банан");
console.log(fruits.length);
//________________________________

const fn = function (...args) {
    console.log(args);
}
fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

// если нужно передать первые аргументы
const fun = function (f, ...args) {
    console.log(`${f}`);
    console.log(args);
};
fun('hello', 1, 2, 3);
fun('chao', 1, 2, 3, 4, 5);
fun(1, 2, 3, 4, 5, 6, 7);
//________________________________
// Наиши функцию add для сложения произвольного количества аргументов (чисел)
const add = function (...args) {
    console.log(args);
    let total = 0;

    for (const arg of args) {
        total += arg;
    }
    return total;
};
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));
//___________________________________
// Напиши функцию которая: первым аргументом принимает массив чисел, после первого может быть произвольное количество других аргументов начиная со второго, Функция должна вернуть новый массив в котором будут только те аргументы начиная со второго  для которых есть аналог в оригинальном массиве
const filterNumbers = function (arrey, ...args) {
    console.log('arrey', arrey);
    console.log('args', args);
    const uniqueElements = [];

    for (const element of arrey) {
        if (args.includes(element)) {
            uniqueElements.push(element);
            console.log(`${element} есть`);
        }
    }
    return uniqueElements;
}
console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 20, 30, 40], 23, 30, 18, 15));
console.log(filterNumbers([100, 201, 300], 7, 12, 201, 64));
//_______________________________________________________________
function checkAge(age) {
  if (age >= 18) { 
    return "You are an adult";
  }

  return "You are a minor";
};
console.log(checkAge(2));
//_____________________________
function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    
  if (password === ADMIN_PASSWORD) {
   return "Welcome!";
  } 
  
  return "Access denied, wrong password!";
};
console.log(checkPassword("mangohackzor"));
console.log(checkPassword("jqueryismyjam"));
//_________________________________________
function checkStorage(available, ordered) {
 
  if (ordered === 0) {
   return "Your order is empty!";
    }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
    }

  return "The order is accepted, our manager will contact you";

};
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(150, 0));
console.log(checkStorage(150, 150));
//______________________________________________________________

function getExtremeElements(array) { 

   array.splice(1, array.length - 2);
   return array;
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//______________________________________________

function splitMessage(message, delimiter) {
  let words;
    words = message.split(delimiter);
  return words;
}
console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
//________________________________________

function calculateEngravingPrice(message, pricePerWord) {
    
    return message.split(' ').length * pricePerWord;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//______________________________________________________________

function makeStringFromArray(array, delimiter) {
  let string;
    string = array.join(delimiter);
  return string;
}
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
//_______________________________________________________________

function slugify(title) {
    return title.toLowerCase().split(' ').join('-'); 
}
console.log(slugify("Arrays for begginers"));
//_________________________________________
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

const fruits1 = ['apple', 'plum', 'pear', 'orange', 'banana'];


const firstTwoEls = fruits1.slice(0, 2);
const nonExtremeEls = fruits1.slice(1, -1);
const lastThreeEls = fruits1.slice(-3);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);
//__________________________________________________
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); 
console.log(allClients);
//____________________________________________________
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.
// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.
function makeArray(firstArray, secondArray, maxLength) {
    let newArray;
    newArray = firstArray.concat(secondArray);
    newArray = newArray.length < maxLength ? newArray : newArray.slice(0, maxLength);
    return newArray;
};
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//___________________________________________________________________
// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { 
  console.log(i);
};
//________________________________________________________
// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6
// function calculateTotal(number) {
//   let sum = 0;
// for (let i = 0; i <= number; i += 1){
// sum += i
//     };
//     return sum;
// };
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
//__________________________________________________
// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits
const fruits2 = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits2.length; i += 1) { 
  const fruit = fruits2[i]; 
  console.log(fruit);
}
//____________________________________________________
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.
function calculateTotalPrice(order) {
  let total = 0;
  
for (let i = 0; i < order.length; i += 1){
  console.log(order[i]);
  total += order[i];
    }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
//__________________________________________________
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.
function findLongestWord(string) {
  let words = string.split(' ');
  let bigWords = words[0];
  for (const word of words) {
    // console.log(word);
    if (word.length > bigWords.length) {
      bigWords = word;
    }
  }
  return bigWords;
  }
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"))
//_____________________________________________________________
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1){
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));
//______________________________________________
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).
function filterArray(numbers, value) {
  const newNambers = [];
  for (let number of numbers) {
    if (number > value) {
      newNambers.push(number);
    }
  }
  return newNambers;
}
console.log(filterArray([12, 24, 8, 41, 76], 20));
//___________________________________________________________
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"]; 
  return fruits.includes(fruit);
}
console.log(checkFruit("plum"));
//_______________________________________________________
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
function getCommonElements(array1, array2) {
  const array = [];
  for (let element of array1) {
    if (array2.includes(element)) {
      array.push(element);
    } 
  }
  return array;
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//__________________________________________________________
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of
// function calculateTotalPrices(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
//   //  for (let element of order) {
//   //   total += element;
//   // }
// };
//__ __ __ __ __ __
// function filterArrays(numbers, value) {  
//   const filteredNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   //   const filteredNumbers = [];
//   // for (let number of numbers) {
//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }
//   // return filteredNumbers;
// };
//____________________________________________
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
//___________________________________
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0)
function getEvenNumbers(start, end) {
  const evenNumbers = [];
  for (let i = start; i <= end; i += 1) {  
    if (i % 2 === 0) {
      evenNumbers.push(i);
    } 
 }
  return evenNumbers;
  }
console.log(getEvenNumbers(3, 11));
//_________________________________________
// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
//___________________________________________
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// function findNumber(star, end, divisor) {
  
//   let number;

//   for (let i = star; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
  
// }
// console.log(findNumber(8, 17, 3));
//______________________________________
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення)
// function includes(array, value) {
//   for (let i = 0; i <= array.length; i += 1){
//     if (value === array[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));





