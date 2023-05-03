const fn = function () {
    console.log('fn->this', this)
};
fn(); // fn->this undefined
//---------------------------------
const book = {
    title: 'React for beginers',
    showThis() {
        console.log('showThis->this', this);
    },
    showTitle() {
        console.log('showTitle->this/title', this.title);
    },
};
book.showThis(); //showThis->this {title: 'React for beginers', showThis: ƒ, showTitle: ƒ}

const outerShowThis = book.showThis;
outerShowThis(); //showThis->this undefined

const outerShowTitle = book.showTitle;
//outerShowTitle()  // ошибка
//___________________________________________________

const makeChangeColor = function () {
    const changeColor = function (color) {
         console.log('changeColor->this', this);
        // this.color = color;
    };

    changeColor(); //changeColor->this undefined

    const sweater = {
        color: 'teal',
    };
    sweater.updateColor = changeColor;

    sweater.updateColor('red'); //changeColor->this {color: 'teal', updateColor: ƒ}
    
    return sweater.updateColor;

};
const swapColor = makeChangeColor();
swapColor("blue"); //changeColor->this undefined
//________________________________________________________

const makeChangeColor1 = function () {
    const changeColor = function (color) {
        console.log('changeColor->this', this);
         this.color = color; //переопределение
    };

    return changeColor;
};

 const updateColor1 = makeChangeColor1()  //changeColor->this {color: 'blue', updateColor1: ƒ}

    const hat = {
        color: 'blue',
        updateColor1,
    };
    
    hat.updateColor1('orange');  
console.log(hat); // {color: 'orange', updateColor1: ƒ}
 //___________________________________________________________

const counter = {
    value: 0,
    increment(value) {
        console.log('increment ->', this);
         this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

//updateCounter(10, counter.increment); //increment -> undefined
updateCounter(10, counter.increment.bind(counter)); //increment -> {value: 0, increment: ƒ, decrement: ƒ}
updateCounter(5, counter.decrement.bind(counter));//decrement -> this {value: 10, increment: ƒ, decrement: ƒ}
console.log(counter); // {value: 5, increment: ƒ, decrement: ƒ}

//________________________________________________

//call  &&  apply

const showThis1 = function (...args) {
    console.log(args)
    console.log('showThis -> this', this);
};

showThis1(); // showThis -> this undefined

// const objA = {
//     a: 5,
//     b: 10,
// };

//[10, 20, 30, 40]
//showThis1.call(objA, 10, 20, 30, 40); //showThis -> this {a: 5, b: 10}

//[5, 1, 3, 8, 6]
//showThis1.apply(objA, [5, 1, 3, 8, 6]); //showThis -> this {a: 5, b: 10}

//изменения цвета

const changeColor2 = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat1 = {
    color: 'black',
};

changeColor2.call(hat1, 'orange'); //changeColor -> this {color: 'black'}
console.log(hat1); //{color: 'orange'}

const sweater = {
    color: 'green',
};
changeColor2.call(sweater, 'blue'); //changeColor -> this {color: 'green'}

console.log(sweater); //{color: 'blue'}

//bind

const changeHatColor = changeColor2.bind(hat1);
changeHatColor(); //changeColor -> this {color: 'orange'}

changeHatColor('yellow');
console.log(hat1); //{color: 'yellow'}
//_________________________________________________

const counter1 = {
    value: 0,
    increment() {
        console.log('increment ->', this);
         this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decrementBTN = document.querySelector('.js-decrement')
const incrementBTN = document.querySelector('.js-increment')
const valueEl = document.querySelector('.js-value')

console.log(decrementBTN);
console.log(incrementBTN);
console.log(valueEl);

decrementBTN.addEventListener('click', function () {
    console.log('Клик на декремент');

    counter1.decrement();
    console.log(counter1);

    valueEl.textContent = counter1.value;
});

incrementBTN.addEventListener('click', function () {
    console.log('Клик на инкремент');

    counter1.increment();
    console.log(counter1);

    valueEl.textContent = counter1.value;
});
//_______________________________________________________________

//Прототипное наследование

const objC = {
    z: 5,
};
console.log('objC', objC)

const objB = Object.create(objC);
objB.y = 2;

console.log('objB', objB);

// console.log(objB.y);
// console.log(objB.z);

const objA = Object.create(objB);
objA.x = 1;

console.log('objA', objA);

console.log(objA.z);
//проверка есть такое собственное свойство
console.log(objA.hasOwnProperty('x'));

//___________________________________________
const Car = function ({ brand, model, price }={}) {  //параметр по умолчанию
    //console.log(config);

    //const { brand, model, price } = config; //lдеструктудизация
    this.brand = brand;
    this.model = model;
    this.price = price;


    //--------------------------
    // this.brand = config.brand;
    // this.model = config.model;
    // this.price = config.price;

   
};

Car.prototype.sayHi = function () {
    console.log('Car.prototype.sayHi -> this', this);
    console.log('Hello =) ')
};

 //изменение цены
Car.prototype.chengePrice = function (newPrice) {
    this.price = newPrice;
};

console.log(Car.prototype);

const myCar = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});
console.log(myCar);
myCar.sayHi();
myCar.chengePrice(10000);

const myCar2 = new Car({
    brand: 'BMW',
    model: 'X6',
    price: 50000,
});
console.log(myCar2);
myCar2.sayHi()
//_____________________________________________________________
const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
};

User.prototype.changeEmail = function (newMail) {
    this.email = newMail;
};

const mango = new User({email:'mango@mail.com', password:11111111111});

mango.changeEmail('my-new-mail@mail.com');
console.log(mango);

//Статические свойства и методы

User.message = 'Я статическое свойство, меня нет на экземплярах или прототипе';

User.logInfo = function (obj) {
    console.log(obj);
};
User.logInfo(mango);
//__________________________________________________

//Class

class Car1 {
    static description = 'Класс описывающий автомобить';

    static logInfo(carObj) {
        console.log('car.logInfo -> carObj', carObj);
    }

    constructor({ brand, model, price } = {}) {
        console.log(this);
        this.brand = brand;
        this._model = model; //замена на геттер
        this.price = price;
    }

    changePrice(newPrice) {
        
    }

    //сеттер
    set model(newModdel) {
        this._model = newModdel;
    }
    // setModel(newModdel) {
    //     this.model = newModdel;
    // }

//геттер 
    get model() {
        return this._model
    }

    // getModel() {
    //     return this.model;
    // }
}

const carInstance = new Car1({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});
console.log(carInstance);
console.log(Car1.description);
Car1.logInfo(carInstance);

// console.log(carInstance.getModel());
// carInstance.setModel('Q4');
// console.log(carInstance.getModel());


//проверка на прототип
console.log(Object.getPrototypeOf(carInstance) === Car1.prototype) //true


carInstance.model = 'Q4'  //переопределение newModdel в сеттере
console.log(carInstance.model)
console.log(carInstance)
//____________________________________________

//Наследование

class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

// const mangos = new Hero({ name: 'mangos', xp: 1000 });
// console.log(mangos);

// mangos.gainXp(1000);

class Warriot extends Hero{
    constructor(config) {
        super(config);
        this.weapon = '';
        console.log(config)
    }
}

const mangos = new Warriot({ name: 'mangos', xp: 1000 });
console.log(mangos);//Warriot {name: 'mangos', xp: 1000, weapon: ''}
//-----------------------------------------------
class Hero1 {
    constructor({ name = 'hero', xp = 0 }={}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

class Warriot1 extends Hero1{
    constructor({weapon, ...restProps}={}) {
        super(restProps);

        this.weapon = weapon;
        
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`)
    }
}

class Mage extends Hero1{
    constructor({ spells, ...restProps }={}) {
        super({restProps});

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} 🌲🌹`)
    }
}

const mango1 = new Warriot1({name: 'mango1', xp: 1000, weapon: 'alebabra'});
console.log(mango1); //Warriot1 {name: 'mango1', xp: 1000, weapon: 'alebabra'}

mango1.attack();
mango1.gainXp(1000);

const poly = new Mage({name: 'poly',xp: 500, spells: ['fazerbol']});
console.log(poly);
poly.cast();
poly.gainXp(200);


//console.log(mango1.__proto__ === Warriot1.prototype);//true
console.log(Object.getPrototypeOf(mango1) === Warriot1.prototype);//true
