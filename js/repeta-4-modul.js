const fnA = function (messsge, callback) {  // это функция высшего порядка
    console.log(messsge);
    callback(100);
};
const fnB = function (number) {  // callback-функция
    console.log('Это лог при вызове fnB', number);
};
fnA("Hello", fnB);
//_________________________________________
const doMath = function (a, b, callback) {
    const result = callback(a, b);
    console.log(result);
};
// const add = function (x, y) {  //функция записана в переменную
//     return x + y;
// };
// const sub = function(x, y) {   //функция записана в переменную
//     return x - y;
// }
//Литерал функции
doMath(2, 3, function (x, y) {  //инлайн функция(встроенная)
    return x + y;
});
doMath(10, 8, function(x, y) {   //инлайн функция(встроенная)
    return x - y;
});

// doMath(2, 3, add);
// doMath(10, 8, sub);
//_________________________________________________
//Отложенный вызов: регистрация событий
const buttonRef = document.querySelector('.js-button');
// console.log(buttonRef);
const hendleBtnClick = function () {
    console.log("Клик по кнопке" + Date.now());
};

buttonRef.addEventListener('click', hendleBtnClick);
//_________________________________________________
//Отложенный вызов: геопозиция

const onGetPositionSuccess = function (position) {
    console.log(position);
};
const onGetPositionError = function (error) {
    console.log(error);
};
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess, onGetPositionError,
// );
//____________________________________________
//Отложенный вызов: интервалы

const callback = function () {
    // console.log('Через 3 секунды внутри колбека в таймауте');
};
console.log('В коде перед таймаутом');
setTimeout(callback, 2000);
console.log('В коде после таймаута');
//_______________________________________________
//Фильтр. По какомуто условию фильтрует массив

const filter = function (arrey, test) {
    const filteredArrey = [];
    for (const el of arrey) {
        console.log(el);
        console.log(test(el));
        const passed = test(el);
        if (passed) {
            filteredArrey.push(el);
        }
    }
    return filteredArrey;
};

const callback1 = function (value) {
    return value >= 3;
}

// const callback4 = value => value >= 3;  
const r4 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log(r4);


const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
    return value <= 4;
})
console.log(r2);

//-----------------------------------------------
const fruits = [
    { name: '🍇', quantity: 200, isFresh: true },
    { name: '🍍', quantity: 150, isFresh: false },
    { name: '🥝', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);
//_________________________________________________
//Замыкание
const fnC = function (parameter) {
    const innerVariable = 'значение внутренней переменной функции fnC';

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
    console.log('Это вызов innerFunction');
};
    return innerFunction;
};
const fnD = fnC(555);
fnD();
console.log(fnD);

//________________________________________________________________
const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовит ${dish}`);
};

const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готовит ${dish}`);
    };
    return makeDish;
};
const mango = makeSheff('Mango');

console.log(mango);

mango('котлеты');
mango('пирожок');

const poly = makeSheff('Poly');

console.log(poly);
poly('чай');
poly('кофе');
//______________________________________________
//Округление
const rounder = function (number, pleaces) {
    return Number(number.toFixed(pleaces));
};
console.log(rounder(3.4569, 2));
console.log(rounder(3.4569, 4));
//---------------------------------
//то же самое через замыкание
const rounder1 = function (pleaces) {
    return function (number) {
        return Number(number.toFixed(pleaces));
    };
};
const rounder2 = rounder1(2);
const rounder3 = rounder1(3);

console.log(rounder2(3.569872));
console.log(rounder2(100.1446441));
console.log(rounder3(100.1446441));
console.log(rounder3(3.569872));
//______________________________________
//Чтобы никто не получил доступ к переменной
const myLibFactory = function () {
    let value = 0;
    const add = function (num) {
        value += num;
    };
    return {
        add: add,
        getValue() {
            return value;
        }
    };
};
const myLib = myLibFactory();
console.dir(myLib.getValue);
console.log(myLib);
console.log(myLib.getValue());
myLib.add(10);
console.log(myLib.getValue());
//______________________________________________________
//приватные данные функции - скрытие реализации, интерфейс. Напрямую изменить Salary не получится
const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;
    // const changeBy = function (amount) {   // можно без нее
    //     salary += amount;
    // };
    return {
        raise(amount) {
            salary += amount;   //changeBy(amount);
        },
        lower(amount) {
             salary -= amount;             //changeBy(amount);
        },
        current() {
            return `Текущая зарплата ${employeeName} - ${salary}`
        },
    };
};
const salaryManager = salaryManagerFactory('Mango', 5000);

salaryManager.raise(1000);

console.log(salaryManager.current());
//______________________________________________________
//Стрелочная функция
const adde = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c;
};

const addArrow =  (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;            //явній возврат
};

const addArrow1 = (a, b, c) => a + b + c;


console.log(adde(5, 10, 15));
console.log(addArrow(5, 8, 10));
console.log(addArrow1(5, 8, 10));
//_______________________________
//Псевдомасив arguments
const add = (...args) => {
    console.log(args);
};
add(2, 3, 4, 5, 6, 7);
//_________________________________________
//Контекст внутри стрелки определяется местом ее объявления, а не вызова, и ссылается на контекст родительской функции.

const showThis = () => {
    console.log('this in showThis:', this);
};
showThis();

const user = {
    name: 'Mango',
    showName() {
        console.log('this:', this);
        console.log('this.fullName:', this.fulName);

        const inner = () => {
            console.log('this in inner:', this);
        };
        inner();
    },
};
user.showName();
user.showContext = showThis;
user.showContext();
//______________________________________________
const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(function (num) {
//     return num > 2;
// });
const greaterThenTwo = numbers.filter( num => num > 2 );
console.log(greaterThenTwo);
//---------------------------------------------------

// const multByTwo = greaterThenTwo.map(function (num) {
//     return num * 3;
// });
const multByTwo = greaterThenTwo.map( num => num * 3);

console.log(multByTwo);
//-----------------------------------------------------

// const sorted = multByTwo.sort(function (a, b) {
//     return a - b;
// });
const sorted = multByTwo.sort( (a, b) => a - b);

console.log(sorted);
//--------------------------------------------------
// const res = numbers
//     .filter(function (num) {
//         return num > 2;
//     })
//     .map(function (num) {
//         return num * 3;
//     })
//     .sort(function (a, b) {
//         return a - b;
//     });

const res = numbers
    .filter(num => num > 2)
    .map (num => num * 3)
    .sort ((a, b) => a - b);
console.log(res);
//_______________________________________________
//Сортируем тех кто онлайн по рангу
const players = [
    { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
    { id: 'id-2', tag: 'Poli', isOnline: true, rank: 600 },
    { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
    { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];
// const onlineAndSorted = players
//     .filter(function (player) {
//         return player.isOnline;
//     })
//     .sort(function (prevPlayer, nextPlayer) {
//         return prevPlayer.rank - nextPlayer.rank;
//     });

    const onlineAndSorted = players
    .filter( player => player.isOnline)
    .sort( (prevPlayer, nextPlayer) =>  prevPlayer.rank - nextPlayer.rank);

console.table(onlineAndSorted);
//__________________________________________________
//Увеличиваем кол-во поинтов каждого игрока
const players1 = [
    { id: 'player-2', name: 'Poli', timePlayed:310, points:54, Online: true, rank: 600 },
    { id: 'player-3', name: 'Ajax', timePlayed:480, points:92, Online: true, rank: 100 },
    { id: 'player-1', name: 'Mango', timePlayed:540, points:48, Online: true, rank: 800 },
    { id: 'player-4', name: 'Kiwi', timePlayed:80, points:71, Online: true, rank: 400 },
];
// const upatedPlayers = players1.map(function (player) {
//     return {
//         ...player,
//         points: player.points + player.points * 0.1 ,
//     };
// });
const upatedPlayers = players1.map(player => ({
        ...player,
        points: player.points + player.points * 0.1 ,
    }));

console.table(upatedPlayers);
//Увеличиваем кол-во игрока по id
const playerIdToUpdate = 'player-3';
//1.
// const updatedPlayers = players.map(function (player) {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,
//         };
//     }
//     return player;
// });

//2.
// const updatedPlayers = players.map( player => {
//     return player.id === playerIdToUpdate ?
//          {...player, timePlayed: player.timePlayed + 50 } : player;
// });

//3.
const updatedPlayers = players.map( player =>  player.id === playerIdToUpdate ?
         {...player, timePlayed: player.timePlayed + 50, } : player,
);
console.table(upatedPlayers);
//___________________________________________
// forEach. Для каждого элимента массива

const numbers1 = [5, 10, 15, 20, 25];
// numbers1.forEach(function (number, index, arrey) {
//     console.log('num:', number);
// });
numbers1.forEach((number, index, arrey) => {
    console.log('num:', number);
});

 //___________________________________________
 //map:
 //- поэлиментно перебирает массив
 //-не изменяет оригинал
 //-возвращает массив такой же длины

// const doubleNums = numbers1.map(function (number) {
//     return number * 2;
// });
const doubleNums = numbers1.map(number=> number * 2);
console.log('doubleNums:', doubleNums);
//______________________________________________

const players2 = [
    { id: 'player-2', name: 'Poli', timePlayed:310, points:54, Online: true, rank: 600 },
    { id: 'player-3', name: 'Ajax', timePlayed:480, points:92, Online: true, rank: 100 },
    { id: 'player-1', name: 'Mango', timePlayed:540, points:48, Online: true, rank: 800 },
    { id: 'player-4', name: 'Kiwi', timePlayed:80, points:71, Online: true, rank: 400 },
];
// Получаем массив имен всех всех игроков. Всех id
const playerNames = players2.map(player => player.name);
console.log('playerNames:', playerNames);

const playerIds = players2.map(player => player.id);
console.log('playerIds:', playerIds);

// если несколько объектов нужно вернуть
// const res1 = players2.map(player => ({ name: player.name, online: player.Online }));

const res1 = players2.map(({ name,  Online }) => ({ name, Online }));

console.log('res1:', res1);
//---------------------------------------------------------
//Увеличиваем кол-во поинтов каждого игрока на 10%. Для этого нужно создать новый объект и распылить свойста, куда потом внести новые
// const upatedPlayers1 = players2.map(player => {

//     return {
//         ...player,
//         points: Math.round(player.points * 1.1)
//     }
// });
const upatedPlayers1 = players2.map(player => ({...player,
        points: Math.round(player.points * 1.1)}));
    
console.log(upatedPlayers1);
//--------------------------------------------------
//Увеличиваем кол-во часов игрока по id

// const playerIdToUpdate1 = 'player-3';
// const updatedPlayers1 = players2.map(player => {
//     return playerIdToUpdate1 === player.id ? ({ ...player, timePlayed: player.timePlayed +50 }) : player;
// });

const playerIdToUpdate1 = 'player-3';
const updatedPlayers1 = players2.map(player => 
     playerIdToUpdate1 === player.id ? ({ ...player, timePlayed: player.timePlayed +50 }) : player
);
console.log(updatedPlayers1);
//_________________________________________________________

//filter

const numbers2 = [5, 10, 15, 20, 25];

// const filteredNumbers2 = numbers2.filter(number => {
//     console.log(number);

//     return number > 15; // может стоять выражение любой сложности
// });

const filteredNumbers2 = numbers2.filter(number => number > 15 || number > 20);
   
console.log(filteredNumbers2);




const players3 = [
    { id: 'player-2', name: 'Poli', timePlayed:310, points:54, Online: true, rank: 600 },
    { id: 'player-3', name: 'Ajax', timePlayed:480, points:92, Online: true, rank: 100 },
    { id: 'player-1', name: 'Mango', timePlayed:540, points:48, Online: true, rank: 800 },
    { id: 'player-4', name: 'Kiwi', timePlayed:80, points:71, Online: false, rank: 400 },
];

const onlinePlayers = players3.filter(player => player.Online);
console.table(onlinePlayers);

const offlinePlayers = players3.filter(player => !player.Online);
console.table(offlinePlayers);

//Выбрать которые больше 250

const hardcordPlayers = players3.filter(player => player.timePlayed > 250);
console.table(hardcordPlayers);

//_________________________________________________________________

//find

const numbers3 = [5, 11, 16, 25, 38, 6, 9];
const number3 = numbers3.find(number => number > 10);
console.log(number3);

const number4 = numbers3.find(number => number === 6);
console.log(number4)
//_________________________________________________
//найди игрока по id
const playerIdToFind = 'player-3';
// const playerWithId = players3.find(player => player.id === playerIdToFind);

const playerWithId = players3.find(({id}) => id === playerIdToFind); //деструктуризация
console.log(playerWithId);
//__________________________________________
//ищем игрока по имени
const playerNameToFind = 'Poli';
// const playerWithName = players3.find(player  => player.name === playerNameToFind);

const playerWithName = players3.find(({ name }) => name === playerNameToFind);
console.log(playerWithName);

//написать функцию нахождения
// const finPlayerById = (allPlayer, playerId) => {
//     return allPlayer.find(player => player.id === playerId);
// };
const finPlayerById = (allPlayer, playerId) => allPlayer.find(({id}) => id === playerId);

console.log(finPlayerById(players3, 'player-1'));
 
//___________________________________________________

//every

const isAllOnline = players3.every(player => player.Online);
console.log('isAllOnline:', isAllOnline);
//_______________________________________________

//some

const isAnyOnline = players3.some(player => player.Online);
console.log('isAnyOnline:', isAnyOnline);
//__________________________________________

//reduce

const numbers4 = [5, 10, 15, 20, 25];
const total = numbers4.reduce((acc, number) => {
    console.log('number:', number);
    console.log('acc:', acc);
    return acc + number;
}, 0);
console.log(total);

const total2 = numbers4.reduce((acc, number) => acc + number, 0);
console.log(total2);
//______________________________________________
//считаем общую сумму з.п
const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};
const totalSalary = Object.values(salary).reduce((total, value) => {
    return total + value;
},0);
console.log(totalSalary);
//_______________________________________________________
//считаем общее количество часов
// const totalTimePlayed = players3.reduce((total, value) => {
//     return total + value.timePlayed;
// }, 0);

// const totalTimePlayed = players3.reduce((total, value) => total + value.timePlayed, 0);

const totalTimePlayed = players3.reduce( (total, {timePlayed}) => total + timePlayed, 0);

console.log(totalTimePlayed);
//___________________________________________
// считаем общую сумму товаров корзины
const card = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Apples', price: 70, quantity: 4 }
]; 
// const totalAmount = card.reduce((total, item) => {
//     return total + item.price * item.quantity;
// }, 0);

const totalAmount = card.reduce(
    (total, {price,quantity} )=>  total + price * quantity,
    0,
);
console.log(totalAmount);
//_____________________________________________________
//Собираем все теги из твитов
const tweets = [
    { id: '300', likes: 5, tags: ['js', 'nodejs'] },
    { id: '301', likes: 2, tags: ['html', 'css'] },
    { id: '302', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '303', likes: 8, tags: ['css', 'react'] },
    { id: '304', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
const allTags = tweets.reduce((acc, tweet) => {

    return [...acc, ...tweet.tags];
}, []);

const allTags1 = tweets.flatMap(t => t.tags); //замена через flatMap


    
console.log(allTags);
console.log(allTags1);
//_______________________________________________________________
//Ведем статистику кода
const tagsStats = allTags.reduce((acc, tag) => {
    console.log(acc);
    // if (acc[tag]) {
    //     acc[tag] += 1;
    //     return acc;
    // }
    // acc[tag] = 1;
    // return acc;

    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    };

}, {});
console.log(tagsStats);

// или можно так 
const stats = tweets.flatMap(t => t.tags).reduce((acc, tag) => {
    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }
}, {});

//_____________________________________________________

//sort(меняет оригинальный массив)
//отсортировали по возростанию
const numbers5 = [1, 9, 6, 2, 3];

// console.log(numbers5);
numbers5.sort((curAl, nextEl) => {
    return curAl - nextEl;
});
console.log(numbers5);

//как сделать копию - slice , spread
const copy = [...numbers5];
console.log(copy === numbers5) //проверяем что сасивы уже разные и работаем с копией

copy.sort();
console.log(copy);
//можно сразу отсортировать через переменную
const ascSorted = [...numbers5].sort((a,b)=>b-a); // по убыванию
console.log(ascSorted);
//__________________________________________________
const players4 = [
    { id: 'player-2', name: 'Poli', timePlayed:310, points:54, Online: true, rank: 600 },
    { id: 'player-3', name: 'Ajax', timePlayed:480, points:92, Online: true, rank: 100 },
    { id: 'player-1', name: 'Mango', timePlayed:540, points:48, Online: true, rank: 800 },
    { id: 'player-4', name: 'Kiwi', timePlayed:80, points:71, Online: false, rank: 400 },
];
//отсортировать по игровому времени
const sortedByBestPlayers = [...players4].sort((predPlayer, nextPlayer) => {
    return predPlayer.timePlayed - nextPlayer.timePlayed;
});
console.table(sortedByBestPlayers);

//отсортировать по заглавной букве игрока

const byName = [...players4].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }
    if (!result) {
        return -1;
    }
});
console.table(byName);

//______________________________________________________

//цепочки вызовов chaining

const numbers6 = [1, 5, 2, 4, 3];

// const greaterThenTwo1 = numbers6.filter(num => num > 2);
// console.log(greaterThenTwo1);

// const multByThree1 = greaterThenTwo1.map(num => num * 3);

// const sorted1 = multByThree1.sort((a, b) => a - b);

//вместо этого можно сделать так:

const sorted1 = numbers6.filter(num => num > 2).map(num => num * 3).sort((a, b) => a - b);

// console.log(multByThree1);
console.log(sorted1)
console.log(numbers6);

//Сортируем тех кто онлайн по рангу

const players5 = [
    { id: 'player-2', name: 'Poli', timePlayed:310, points:54, Online: true, rank: 600 },
    { id: 'player-3', name: 'Ajax', timePlayed:480, points:92, Online: true, rank: 100 },
    { id: 'player-1', name: 'Mango', timePlayed:540, points:48, Online: true, rank: 800 },
    { id: 'player-4', name: 'Kiwi', timePlayed:80, points:71, Online: false, rank: 400 },
];

const onlineAndSorted1 = players5.filter(player =>player.Online).sort((a, b) => a.rank - b.rank);
console.table(onlineAndSorted1);

//____________________________________________________

//Chaining в методах объекта как jquery
const element = {
    class: '',
    hovered: false,
    changeClass(cls) {
        this.class = cls;

        return this;
    },

    toggleHovered() {
        this.hovered = !this.hovered;

        return this;
    },
};
element.toggleHovered().changeClass('open').toggleHovered();
console.log(element);



