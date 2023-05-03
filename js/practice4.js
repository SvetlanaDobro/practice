const fn = function (myObject) {
    console.log(myObject);
};
fn({ a: 1, b: 2 })
//______________________________
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
console.log(aptTags[1]);
console.log(aptTags.length);
console.log(aptTags[aptTags.length - 1]);
console.log(apartment.owner.name);
console.log(apartment['imgUrl']);
console.log(aptRating);
//_______________________________________
const username = 'Mango';
const email = 'otgruzka77.gmail.com';
const signupData = {
    username: username, //если одинаковое, то можно значение удалить
    email,
};
console.log(signupData);
//_________________________
// Вычисляемые свойства
const inputName = 'color';
const inputValue = 'tomato';
const colorPickerData = {
    [inputName]: inputValue,
};
console.log(colorPickerData);
//___________________________________
//добавляем в объект
colorPickerData.qwe = 5;
console.log(colorPickerData);
//_________________________________
//Метод объекта (this)
const playlist = {
    name: 'Play list',
    rating: 5,
    tracks: ['trak-1', 'trak-2', 'trak-3'],
    trackCount: 3,
    // getName: function () {
    //     console.log('Eto getName');
    // },
    // ИЛИ
      getName () {
          console.log('Eto getName');
         
    },    
    addTrack(track) {
        this.tracks.push(track);
        this.trackCount = this.tracks.length; //ИЛИ
    },
    getTrackCount() {
        return this.tracks.length;
    },

    updateRating(newRating) {
        this.rating = newRating;
    },
}
playlist.getName();
playlist.addTrack('trak-4');
playlist.updateRating(4);
console.log(playlist);
console.log(playlist.getTrackCount());
//_________________________________________
// Получить массив ключей из объекта и массив из значений объекта
const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

const keys = Object.keys(feedback);
console.log(keys);

const values = Object.values(feedback);
console.log(values);

let totalFeedback = 0;

// for (let key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

for (const value of values) {
    totalFeedback += value;
}
console.log('totalFeedback:', totalFeedback);
//__________________________________
// Работа с коллекцией массивом объектов
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];
friends[1].newprop = 555 //добавится только одному элименту 
console.table(friends);
for (const friend of friends) {
    friend.newprop = 555;
    console.log(friend.name);
}
console.table(friends);
//Ищем друга по имени
const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        console.log(friend)
        console.log(friend.name);
        if (friend.name === friendName) {
            return 'Нашли!';
        }
    }
    return "Не нашли";
};
console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsi'));

//Получаем имена всех друзей
const getAllNames = function (allFriends) {
    const names = [];

    for (const friend of allFriends) {
        console.log(friend.name);
        names.push(friend.name);
    }
    console.log(names);
}
console.log(getAllNames(friends));

//Получаем имена только друзей онлайн

const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        if (friend.online) {
            onlineFriends.push(friend);
        }
    }
    return onlineFriends;
}
console.log(getOnlineFriends(friends));

//Создать 2 массива онлайн и офлайн
const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };
    for (const friend of allFriends) {
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        } 
        friendsByStatus.offline.push(friend);
        
    }
    return friendsByStatus;
}
console.log(getFriendsByOnlineStatus(friends));

//Посчитать количество свойств в объекте

const x = {
    a: 1,
    b: 2,
    c: 50,
    d: 100,
};
console.log('x', Object.keys(x).length);

//Работаем с коллекцией товаров в корзине:
const cart = {
    items: [],
    getItems() {
        return this.items;
     },
    add(product) { 
        // console.table(this.items);
        for (const item of this.items) {
            
            if (item.name === product.name) {
                item.quantity += 1;
                // console.log("Такой продукт уже есть", product.name);
                return;
            }
        }
        const newProduct = {
            ...product,
            quantity: 1,
        };
        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this; //деструктуризация
        for (let i = 0; i < items.length; i += 1) {
            const item = this.items[i]; //локальная переменная
            console.log(item);
            if (productName === item.name) {
                console.log('нашли такой продукт', productName);
                items.splice(i, 1);
            }
        }
    },
    //деструктуризация
    //const {name} = this.items[i];
    // if (productName === name) {
    //             console.log('нашли такой продукт', productName);
    //         }

     //------------------------------------------------------------
        // for (const item of this.items) {
        //     console.log(item);
        //     if (productName === item.name) {
        //         console.log('нашли такой продукт', productName);
        //     }
        // }
    // },
    clear() {
        this.items = [];
     },
    countTotalPrice() { 
        const { items } = this;
        let total = 0;
        for (const {price, quantity} of items) {
            total += price * quantity;
        }
        return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};


cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

//считает общую сумму продуктов
console.log('Total:', cart.countTotalPrice());


//удалить продукт
cart.remove('🍎');
console.table(cart.getItems());

//удаление из корзины
cart.clear();
console.log(cart.getItems());



//____________________________________________
//spread (распыление) операция
const num = [0,5,...[1, 2, 3], 4, 5, ...[6,7]];
// console.log(num);
//Поиск самой большой или маленькой температуры
const temp = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(18, 14, 12)); //в массиве не ищет
// console.log(Math.min(18, 14, 12)); //в массиве не ищет

// console.log(Math.max(...temp)); 
// console.log(Math.min(...temp));
//____________________________________

//Распыление объекта
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
const c = {
    ...a, ...b,
};
// console.log(c);
//___________________________
//Деструктуризация объекта
const playlists = {
    name: "Мой супер плейлист",
    rating: 5,
    tracks: ['trak-1', 'trak-2', 'trak-3'],
    // trackCount: 3,
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

const {
    rating,
    tracks,
    trackCount: numberOfTrack = 0, // переназвание свойства
    stats: { followers, views, likes },
} = playlists;

//  const { followers, views, likes } = stats;


// console.log(rating);
// console.log(tracks);
// console.log(numberOfTrack);
// console.log(followers, views, likes);
//________________________________

////Деструктуризация массива
const rgb = [255, 100, 80];
const [r, , g ] = rgb;
// console.log(r, g);
//__________________________________________
//Найти максимальный рейтинг
const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,

};
// const ratings1 = Object.values(authors);
// console.log(Math.max(...ratings1));

//если нужны имена авторов
const keys1 = Object.keys(authors);
for (const key of keys1) {
    // console.log(key); // авторы
    // console.log(authors[key]); // значения
}
 //Object.entries - возвращает масив масивов
const entries = Object.entries(authors);
for (const [name, rating] of entries) {

    // const [name, rating] = entry; //деструктуризация массива
    // const name = entry[0]; // тоже самое что выше
    // const rating = entry[1];
    // console.log(name,rating);
}
//_________________________________________________

//Операция  rest (сбор)
// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jqluke',
//     location: 'Osho Rias, Jamaica',
//     avatar: 'https://en.wikipedia.org/wiki/Jamaica',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };
//забрать все оставшееся в локальную переменную
// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag, location);
// console.log(restProps); // все что не деструктивизироволось, уходит на restProps
//___________________________________________________

//Патерн Объект настроек
// -деструктуризация патерна-объекта в подписи функции
// -rest при деструктуризации в подписи

const showProfileInfo = function (userProfile) {
    const {
        name,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
    } = userProfile;
    // console.log( name,tag,location,avatar,followers, views, likes);
};

const profile = {
    name: 'Jacques Gluke',
    tag: 'jqluke',
    location: 'Osho Rias, Jamaica',
    avatar: 'https://en.wikipedia.org/wiki/Jamaica',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

showProfileInfo(profile); // функция получает объект

const fun = function (params) { };
fun({
    age: 10,
    friends: 5,
    isOnline: true,
    hobbies: [],
    games: {},
    rating: 6,
}); //так нужно расписывать

