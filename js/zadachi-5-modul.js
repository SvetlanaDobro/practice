//Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  
};

console.log(pizzaPalace.order("Smoked")); //Order accepted, preparing «Smoked» pizza
//___________________________________________
//Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
//________________________________________________________
//необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.
const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};
console.log(historyService.getOrdersLog());//email: jacob@hotmail.com dish: Burrito - email: solomon@topmail.net dish: Burger - email: artemis@coldmail.net dish: Pizza - email: solomon@topmail.net dish: Apple pie - email: jacob@hotmail.com dish: Taco
console.log(historyService.getEmails()); // ['jacob@hotmail.com', 'solomon@topmail.net', 'artemis@coldmail.net']
console.log(historyService.getOrdersByEmail("solomon@topmail.net")) // {email: 'solomon@topmail.net', dish: 'Burger'} {email: 'solomon@topmail.net', dish: 'Apple pie'} 

//________________________________________________________
//Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);

child.name = "Jason";
child.age = 27;

console.log(parent.hasOwnProperty("surname")); //true
console.log(child.surname);//Moore
//_______________________________________________________
//Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child
const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent1 = Object.create(ancestor);
parent1.name = "Stacey";
parent1.surname = "Moore";
parent1.age = 54;

const child1 = Object.create(parent1);
child.name = "Jason";
child.age = 27;

console.log(ancestor.isPrototypeOf(parent1));//true
console.log(child1.surname);//Moore
//_______________________________________________________
//Додай класу Car метод constructor, який приймає три параметри:
// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new

// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//   }
// };

// console.log(new Car("Audi", "Q3", 36000))
//_______________________________________________________
// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// class Car {
  
//     constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
// };
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }))
//________________________________________________________________
// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.

class Car {
    constructor({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    changePrice(newPrice) {
        this.price = newPrice;
     }
}

console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));

console.log(Car.prototype.changePrice(35000))
console.log(Car.prototype.getPrice()); //35000
//______________________________________________________
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
 
class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    removeItem(itemToRemove) {
        const index = this.items.indexOf(itemToRemove);
     if (index !== -1) {
      this.items.splice(index, 1);
    }
    return this.items;
    };
}

//removePotion(potionName) {
// const index = this.potions.indexOf(potionName);
//     if (index !== -1) {
//       this.potions.splice(index, 1);
      
//     }
//     return this.potions;
//   },

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems());//["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems());//['Nanitoids', 'Prolonger', 'Antigravitator', 'Droid']

storage.removeItem("Prolonger");
console.log(storage.getItems());//['Nanitoids', 'Antigravitator', 'Droid']
//__________________________________________________________
const object = {
  message: 'Hello, World',
  getMessage() {
    const message = 'Hello, Earth';
     return this.message;
  },
};
console.log(object.getMessage());
//___________________________________________________________
// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value += str;
  }
  padStart(str) {
    this.value = str+=this.value;
  }
  padBoth(str) {
    this.value = str += this.value += str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
 builder.padStart("^");
 console.log(builder.getValue()); // "^."
 builder.padEnd("^");
 console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
//_______________________________________________
// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
class Car1 {
 
  #brand;
  
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand){
    this.#brand = newBrand;
  }

  // Change code above this line
}

const mangogo = new Car1({
  brand: "Mangogo",
  model: 38,
  ptice: 2023,
});
mangogo.changeBrand('Mangogogo');
console.log(mangogo.getBrand()); // Mangogogo
//console.log(mangogo.#brand); //Виникне помилка, це приватна властивість
//______________________________________________________
// Виконай рефакторинг класу Storage, зробивши властивість items приватною.

class Storage1 {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const storage1 = new Storage1(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage1.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage1.addItem("Droid");
console.log(storage1.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage1.removeItem("Prolonger");
console.log(storage1.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
//______________________________________________________
// Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

class StringBuilder1 {
#value
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}
const builder1 = new StringBuilder1(".");
console.log(builder1.getValue()); // "."
builder1.padStart("^");
console.log(builder1.getValue()); // "^."
builder1.padEnd("^");
console.log(builder1.getValue()); // "^.^"
builder1.padBoth("=");
console.log(builder1.getValue()); // "=^.^="
//_______________________________________________________
// Виконай рефакторинг класу Car. Зроби властивості model і price приватними, а також #brand. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.
class Car2 {
  // Change code below this line
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}
//__________________________________________
// Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

class Car3 {
  // Change code below this line
  static MAX_PRICE = 50000;
  
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car3.MAX_PRICE) {
      this.#price = newPrice;
    } 
  }
  // Change code above this line
}

const audi = new Car3({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
//__________________________________________________________
// Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".

class Car4 {
  static #MAX_PRICE = 50000;
  // Change code below this line

  static checkPrice(price) {
    if (price <= Car4.#MAX_PRICE) {
      return 'Success! Price is within acceptable limits';
    } else {
      return "Error! Price exceeds the maximum"
    }
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}
const audi1 = new Car4({ price: 36000 });
const bmw = new Car4({ price: 64000 });

console.log(Car4.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car4.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
//________________________________________________________________
// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
class User {

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static AccessLevel = {
    
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  constructor(email) {
    super(email);
  }
}
console.log(Admin.AccessLevel.BASIC); // basic
console.log(Admin.AccessLevel.SUPERUSER); // superuser
//_______________________________________________________
// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і accessLevel. Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику конструктора.Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.

class User1 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin1 extends User1 {
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  };

  blacklistedEmails = [];
  
  blacklist(email) {
     this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }


  // Change code above this line
}

const mango = new Admin1({
  email: "mango@mail.com",
  accessLevel: Admin1.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"
mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
//___________________________________________________
const person = { name: 'Mango' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 18));
console.log(sayHi.bind(person, 18)); 


//________________________________________

