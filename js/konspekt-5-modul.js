const bookShelf = {
  authors: ["Бернард Корнуелл", "Роберт Шеклі"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]

bookShelf.addAuthor("Лі Таніт");
console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]
//_______________________________________________

const petya = {
  username: "Petya",
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.username);
  },
};

petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
petya.showName(); // 'Petya'
//___________________________________________________
function showThis() {
  console.log("this in showThis: ", this);
}

// Викликаємо у глобальному контексті
showThis(); // this in showThis: Window

const user = {
  username: "Mango",
};

// Записуємо посилання на функцію у властивість об'єкта
// Зверніть увагу, що це не виклик - немає ()
user.showContext = showThis;

// Викликаємо функцію в контексті об'єкта
// this буде вказувати на поточний об'єкт, в контексті
// якого здійснюється виклик, а не на глобальний об'єкт.
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}
//______________________________________
//Метод call()
//foo.call(obj, arg1, arg2, ...)

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};
const poly = {
  username: "Полі",
};

greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.
//________________________________________________
//Метод apply

//foo.call(obj, arg1, arg2, ...)
//foo.apply(obj, [arg1, arg2, ...])

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }
// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };
greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.
//______________________________________________
//Метод bind()

//foo.bind(obj, arg1, arg2, ...)
function greet(clientName) {
  return `${clientName}, ласкаво просимо в «${this.service}».`;
}

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
console.log(steamGreeter("Манго")); // "Манго, ласкаво просимо в «Steam»."

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
console.log(gmailGreeter("Полі")); // "Полі, ласкаво просимо в «Gmail»."
//______________________________________________________
//bind() і методи об'єкта

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() - це виклик методу getFullName без об'єкта
  console.log(`Обробляємо заявку від ${callback()}.`);
}

//makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції
// ✅ Стало
makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.
//________________________________________________________
//Об'єктно-орієнтоване програмування

const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage());
//___________________________________________
//Прототип об'єкта
//Object.create(obj)-створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4
//______________________________________________________
//Метод hasOwnProperty()
const animal1 = { eats: true };
const dog1 = Object.create(animal1);
dog1.barks = true;

for (const key in dog1) {
    
     if (!dog1.hasOwnProperty(key)) continue;

  console.log(key); // barks
}
//Метод Object.keys(obj) поверне масив тільки власних ключів об'єкта obj, тому, на практиці використовують саме його, а не for...in
const animal2 = {
  eats: true,
};
const dog2 = Object.create(animal2);
dog2.barks = true;

const dogKeys = Object.keys(dog2);

console.log(dogKeys); // ['barks']
//_____________________________________________________
//Оголошення класу
class User {
  // Тіло класу
}

const mango1 = new User();
console.log(mango1); // {} //екземпляром класу

const poly1 = new User();
console.log(poly1); // {} //екземпляром класу
//_____________________________________________
class User2 {
  // Синтаксис оголошення методу класу
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango2 = new User2("Манго", "mango@mail.com");
console.log(mango2); // { name: 'Манго', email: 'mango@mail.com' }

const poly2 = new User2("Поли", "poly@mail.com");
console.log(poly2); // { name: 'Поли', email: 'poly@mail.com' }
//____________________________________________________________
//Об'єкт параметрів
class User3 {
  // Деструктуризуємо об'єкт
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango3 = new User3({
  name: "Манго",
  email: "mango@mail.com",
});
console.log(mango3); // { name: "Манго", email: "mango@mail.com" }

const poly3 = new User3({
  name: "Поли",
  email: "poly@mail.com",
});
console.log(poly3); // { name: "Поли", email: "poly@mail.com" }
//___________________________________________________
//Приватні властивості
class User4 {
  // Необов'язкове оголошення публічних властивостей
  name;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango4 = new User4({
  name: "Манго",
  email: "mango@mail.com",
});
mango4.changeEmail("mango@supermail.com");
console.log(mango4.getEmail()); // mango@supermail.com
//console.log(mango4.#email); // Виникне помилка, це приватна властивість
//___________________________________________________________
//Геттери і сеттери

class User5 {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}
const mango5 = new User5({ name: "Манго", email: "mango@mail.com" });
console.log(mango5.email); // mango@mail.com
mango5.email = "mango@supermail.com";
console.log(mango5.email); // mango@supermail.com
//_____________________________________________
//Статичні властивості
class User6 {
  // Оголошення та ініціалізація статичної властивості
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango6 = new User6({
  email: "mango@mail.com",
  role: User6.Roles.ADMIN,
});

console.log(mango6.Roles); // undefined
console.log(User6.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango6.role); // "admin"
mango6.role = User6.Roles.EDITOR;
console.log(mango6.role); // "editor"