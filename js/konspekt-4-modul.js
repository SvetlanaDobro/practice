// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);
//_____________________________________________
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

// Передаємо інлайн функцію greet у якості колбека
registerGuest("Манго", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн функцію notify у якості колбека
registerGuest("Полі", function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});
//____________________________________________________________________
function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall("Манго", takeCall, activateAnsweringMachine);
processCall("Полі", takeCall, leaveHoloMessage);
//________________________________________
function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(5);
//__________________________________________________
function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Передаємо printValue як callback-функцію
repeat(3, printValue);


// Передаємо prettyPrint як callback-функцію
repeat(3, prettyPrint);
//__________________________________________________
const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

// Метод перебирання forEach
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});
//_________________________________________________________
// Анонімна стрілочна функція
// const numbers1 = [5, 10, 15, 20, 25];

// numbers1.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

const numbers2 = [2,4,8,16,24,28];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers2.forEach(logMessage);
//_________________________________________________
// Імперативний підхід
// const numbers3 = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers3[i] > 3) {
//     filteredNumbers.push(numbers3[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]
//________________________________________________
// Імперативний підхід
const numbers4 = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers4.length; i += 1) {
  if (numbers4[i] > 3) {
    filteredNumbers.push(numbers4[i]);
  }
}

console.log(filteredNumbers); // [4, 5]
//-------------------------------------------
// Декларативний підхід
const numbers5 = [1, 2, 3, 4, 5];
const filteredNumbers5 = numbers5.filter(value => value > 3);
console.log(filteredNumbers5); // [4, 5]
//____________________________________________
//Чисті функції
//Функція з побічними ефектами
//Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers3 = [1, 2, 3, 4, 5];
dirtyMultiply(numbers3, 2);
// Відбулася мутація вихідних даних - масиву numbers
console.log(numbers3); // [2, 4, 6, 8, 10]
//_______________________________________________
//Чиста функція (pure function)
//Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers6 = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers6, 2);

// Мутація вихідних даних не відбулася
console.log(numbers6); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
//___________________________________________________
//Перебираючі методи масиву
// array.method(callback[currentValue, index, array]);

// array.method((item, idx, arr) => {
//   // логіка, яка буде застосовуватися на кожній ітерації
// });
// array.method(item => {
//   // логіка, яка буде застосовуватися на кожній ітерації
// });
//__________________________________________________
//Метод map()
// массив.map((element, index, array) => {
//   // Тіло колбек-функції
// });
//________________________________________________
const planets = ["Земля", "Марс", "Венера", "Юпітер"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// Оригінальний масив не змінився
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']
//_________________________________________________________
//Масив об'єктів
// У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']
//___________________________________________________

//Метод flatMap()
const students1 = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const names1 = students1.map(student => student.courses);
// [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]
console.log(names1);

const names2 = students1.flatMap(student => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
console.log(names2);
//_______________________________________________________

//Метод filter()
// масив.filter((element, index, array) => {
//   // Тіло колбек-функції
// });

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// Оригінальний масив не змінився
console.log(values); // [51, -3, 27, 21, -68, 42, -37]
//______________________________________________________________
//У змінній allCourses зберігається масив усіх відвідуваних предметів, які можуть повторюватися. Завдання полягає у тому, щоб створити новий масив, в якому будуть тільки унікальні предмети, тобто без повторень.

const students2 = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const allCourses = students2.flatMap(student => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
console.log(uniqueCourses);
//_____________________________________________________________
//Масив об'єктів
//Наприклад, у нас є масив студентів з балами за тест. Необхідно відфільтрувати кращих (бал вище 80), гірших (бал нижче 50) і середніх студентів (бал від 50 до 80).
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students4 = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const best = students4.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Манго і Ківі

const worst = students4.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Аякс

// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students4.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Полі і Х'юстон
//_______________________________________________________

//Метод find()
// метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.
//масив.find((element, index, array) => {
  // Тіло колбек-функції
// });
//Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості. Наприклад, пошук користувача за поштою, автомобіля - за серійним номером, книги - за назвою тощо.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const labelCol =colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
console.log(labelCol);
const labelColPic = colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
console.log(labelColPic);
const labelColPicOpt = colorPickerOptions.find(option => option.label === "white"); // undefined
console.log(labelColPicOpt);
//____________________________________________________

// Метод findIndex()
// Метод findIndex(callback) - це сучасна заміна методу indexOf().
//масив.findIndex((element, index, array) => {
  // Тіло колбек-функції
// });
const colorPickerOptions1 = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

 colorPickerOptions1.findIndex(option => option.label === "blue"); // 2
 colorPickerOptions1.findIndex(option => option.label === "pink"); // 3
 colorPickerOptions1.findIndex(option => option.label === "white"); // -1
//______________________________________________________________

// Метод every()
// Перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.
// масив.every((element, index, array) => {
//   // Тіло колбек-функції
// });
// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every(value => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

//_________________________________________________

// Метод some()
//Перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.
//масив.some((element, index, array) => {
  // Тіло колбек-функції
// });
// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true
//_____________________________________________________
// Масив об'єктів
const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every поверне true тільки, якщо усіх фруктів буде більше 0 штук
const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// some поверне true, якщо хоча б одного фрукту буде більше 0 штук
const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true
//_________________________________________________________________

// Метод reduce()
// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор.
// масив.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);
const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32
//__________________________________________________
// Масив об'єктів. Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.

const students6 = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students6.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students6.length;
console.log(averageScore);
//____________________________________________
// Просунутий reduce
// Припустимо у нас є наступна задача: з масиву постів твіттера окремого користувача необхідно порахувати суму усіх лайків. 
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Пройдемо по всіх елементах колекції і додамо значення властивості likes
// до акумулятора, початкове значення якого вкажемо 0.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes); // 32

// Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// для підрахунку лайків з колекції
const countLikes = tweets => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets)); // 32

//Помітили властивість tags у кожного поста? Продовжуючи тему reduce, ми зберемо в масив усі теги, які зустрічаються в постах.

// Пройдемо по всіх елементах колекції і додамо значення властивості tags
// до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

// Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// для збирання тегів з колекції
const getTags1 = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags1(tweets));

//Після того, як ми зібрали всі теги з постів, добре б було порахувати кількість унікальних тегів в масиві. І знову reduce стане в пригоді.

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags1 = getTags(tweets);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);
//____________________________________________________
// Метод sort()
const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

const scores1 = [27, 2, 41, 4, 7, 3, 75];
scores1.sort();
console.log(scores1); // [2, 27, 3, 4, 41, 7, 75]

const students7 = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
students7.sort();
console.log(students7); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

//треба робити копию
const scores2 = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores2].sort();

console.log(scores2); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

const scores3 = [61, 19, 74, 35, 92, 56];
const ascendingScores3 = [...scores3].sort((a, b) => a - b);
console.log(ascendingScores3); // [19, 35, 56, 61, 74, 92]
//____________________________________________________
//Свій порядок сортування рядків localeCompare()

const students3 = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

const inAlphabetOrder = [...students3].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...students3].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']
//___________________________________________________
// Сортування об'єктів.  Необхідно відсортувати масив об'єктів за зростанням і спаданням кількості балів, і за ім'ям студента.
const students5 = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const inAscendingScoreOrder = students5.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log(inAscendingScoreOrder);

const inDescendingScoreOrder = students5.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log(inDescendingScoreOrder);

const inAlphabeticalOrder = students5.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
console.log(inAlphabeticalOrder);
//_________________________________________________________________

//Ланцюжки методів
//Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест. З цією метою ми відсортуємо копію масиву методом sort(), після чого методом map() створимо масив значень властивості name з відсортованого масиву.
const students8 = [
  { name: "Манго", score: 83, courses: ["математика", "фізика"] },
  { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
  { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];

const names3 = [...students8]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names3); // ['Аякс', 'Полі', 'Манго', 'Ківі']

const uniqueSortedCourses = students8
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']

