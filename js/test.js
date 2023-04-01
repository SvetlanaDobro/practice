// Вивести перші і останні літери на екран
// const str = 'abcdefghi';
// alert (str[0]);
// alert (str[1]);
// alert(str[str.length - 2]);

// Змінити першу літеру
const strt = 'the magician was reading';
console.log(strt[0].toUpperCase() + strt.slice(1));


// Ви просите користувача ввести суму його зарплати.
// Добавку у вигл премії у сумі 15% від з.п
// Подарки у сумі 10% від суми всіх нарахувань(з.п + премія)
// Витрати в магаз в сумі 190
// Розділяєте суму, що залишилася між користувачем і його чоловіком
// Виводите скільки залиш в результ всіх операцій грошей у користувача
// let salary = +prompt("Яка ваша зарплата?");
// console.log(typeof salary);
// salary = Math.floor(salary *= 1.15);
// console.log('Ваша зарплата с премією становить ', salary);
// salary = Math.floor(salary *= 0.9);
// console.log('Ваша зарплата після відрахування податків становить ', salary);
// salary = Math.floor(salary -= 190);
// console.log('Ваша зарплата після магазину становить ', salary);
// salary = Math.floor(salary *= 0.5);
// console.log('Залишок зарплати ', salary);


// Написати фразу за допомогою конкатенації та шаблонних рядків 
const name = 'Svitlana';
const age = 39;
const hobby = 'swimming';
const messag = `Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}.`;
console.log(messag);
const message = "Hello, my name is " +name+ " I'm " +age+ " years old and I like " +hobby+ ".";
console.log(message);

// Створити функцію endsWith() яка порівнює підрядок str1 із закінченням вихідного рядка str і визначає чи закінчується рядок символами підрядка
const str = "Кожен мисливець бажає знати";
const str1 = "скрипт";
const str2 = "знати";
//  function endsWith(str, substring) {
//    return str.endsWith(substring);
// }
function endsWith(str, substring) {
    return str.includes(substring, -substring.length);
}
console.log(endsWith(str, str1));
console.log(endsWith(str, str2));

// Підрахуйте сумму чисел у діапазоні від 1 до 10 за допомогою циклу for, while та do...while.
let result = 0;

for (let i = 0; i <= 10; i += 1){
result += i
};
//  let i = 0
// while (i <= 10) {
//     result += i
//     i++
// }
// do {
//  result += i
//   i++
// } while (i <= 10);


console.log(result)