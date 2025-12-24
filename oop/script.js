"use strict";
const h1 = document.querySelector("h1");

h1.style.cssText = "background-color: #333; color: #fff; padding: 20px;";

//? Constuctor functions

// const Person = function (firstName, birthYear) {
//? instance properties
// this.firstName = firstName;
// this.birthYear = birthYear;

//?Never do this: don't create methods this way in a constructor function
//  this.calcAge = function(){
//    console.log(2037 - this.birthYear);
//  }
// };

const john = new Person("John", 1990);
const paul = new Person("Paul", 2000);
console.log(john);

//? 1. New Object {} created
//? 2. Function called, this = {}
//? 3. {} linked to prototype
//? 4. Function automatically return {}

//? Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// console.log(john instanceof Person);
console.log(john.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Person.prototype));

john.calcAge();
paul.calcAge();

const person = {
  // name: ["Bob", "Smith"],
  name: {
    first: "Bod",
    last: "Smith",
  },
  age: 32,
  bio: function () {
    console.log(
      `${this.name.first} ${this.name.last} is ${this.age} years old.`
    );
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name.first}.`);
  },
};

{
  //?Bracket Notation to retrieve values from and object
  const person = {
    // name: ["Bob", "Smith"],
    name: {
      first: "Bod",
      last: "Smith",
    },
    age: 30,
  };

  function logProperty(propertyName) {
    console.log(person[propertyName]);
  }

  logProperty("name");
  person.age = 32;

  person["name"]["first"] = "Ligand";

  logProperty("age");
  logProperty("name");

  const myDataName = "height";
  const myDataValue = "1.75m";
  person[myDataName] = myDataValue;

  console.log(person.height);
}

const introduceSelf = function () {
  console.log(`Hi! I'm ${this?.name}.`);
};
introduceSelf();

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

// person1.introduceSelf = introduceSelf;
// person2.introduceSelf = introduceSelf
// person1.introduceSelf()
// person2.introduceSelf()

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this?.name}.`);
  };

  return obj;
}

const profile = createPerson("jude");

console.log(profile);

({
  name: "jude",
  age: 35,
});

if ({ name: "jude" }) {
  console.log("true");
}

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.info = function () {
    const { name } = this.owner;
    console.log(
      `This is a ${this.make} ${this.model} from ${this.year} which is own by ${name}`
    );
  };
}

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const rand = new Person("Rand samson", "32", "M");
const bet = new Person("Better Raphael", "24", "F");

const car = new Car("Eagle", "Talon", 1993, rand);
const car1 = new Car("Lexus", "300", 2023, bet);
car.color = "white";
car.info();
car1.info();

console.log(car);
console.log(car1);

console.log(car instanceof Car);

const animalProto = {
  type: "Invertebrates",
  displayType() {
    console.log(this.type);
  },
};

const animal = Object.create(animalProto);
animal.displayType();

//? To create a new animal type

const fish = Object.create(animalProto);
fish.type = "fish";

fish.displayType();

const myObj = {};
const str = "myString";
const randy = Math.random();
const anotherObj = {};

myObj[str] = "This key is in variable str";
myObj.type = "Dot syntax for a key named type";
myObj["Date created"] = "This key has a space";
myObj[randy] = "A random number is the key here";
myObj[""] = "Key here is an empty string";
myObj[anotherObj] = "This key is an object, anotherObj";

console.log(myObj["myString"]);
console.log(myObj);
console.log(myObj.age);
console.log(anotherObj.toString());

//? Methods to list/traverse an object includes
//?1. for...in loop
//?2. Object.keys() which returns an array with only the enumerable own string property names ("Keys") in the object, but not those in the prototype chain
//?3. Object.getOwnPropetyNames(). This method returns an array containing all the own string property names in the object, regardless of if they are enumerable or not.

//? Object.hasOwn(obj, i)

function showProps(obj, objName) {
  let result = "";
  for (let i in obj) {
    //?Object.hasOwn() is used to exclude properties from the object's prototype chain an only shown "own properties"

    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}

showProps(myObj, "Car");

//?Defining propeties for all objects of one type
//?Objects created through a constuctor using the protoType property can add property to all objects instead of an instance of the object

Car.prototype.color = "green";
console.log(car1.color);
console.log((car.color = "orange"));
console.log(car.prototype);
console.log(car1);

console.log(person);

//?accessing the prototype of an object
console.log(Object.getPrototypeOf(person));

const c = 4;

const testObj = {
  a: 2,
  b: 3,
  __proto__: c,
};

console.log(testObj.__proto__);

const testO = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
  },
};

console.log(testO.d);

const parent = {
  value: 2,
  method() {
    console.log(`${this.value + 1}`);
  },
};

const child = {
  __proto__: parent,
};

child.method();

child.value = 4;
child.method();

const boxes = [
  {
    value: 1,
    getValue() {
      return this.value;
    },
  },
  {
    value: 2,
    getValue() {
      return this.value;
    },
  },
  {
    value: 3,
    getValue() {
      return this.value;
    },
  },
];

console.log(boxes[0].getValue());

{
  const boxPrototype = {
    getValue() {
      return this.value;
    },
  };

  const boxes = [
    {
      value: 1,
      __proto__: boxPrototype,
    },
    {
      value: 2,
      __proto__: boxPrototype,
    },
    {
      value: 3,
      __proto__: boxPrototype,
    },
  ];

  console.log(boxes[1].getValue());
}

//? Contrusctor function

{
  function Box(value) {
    this.value = value;
  }

  Box.prototype.getValue = function () {
    return this.value;
  };

  //? Box.prototype === a plain javascript object
  console.log(Box.prototype);
  console.log(Box.__proto__);

  const boxes = [new Box(9), new Box(2), new Box(3)];

  console.log(boxes[0].prototype === Box.__proto__);

  //? returns a plain JaveScript object with its own protype
  console.log(boxes[0].prototype);
  //? the __proto__ proeperty on an instance of a constructor has link to the constructor function
  console.log(boxes[0].__proto__.constructor === Box);

  //? the constructor property on the prototype
  console.log(Box.prototype.constructor === Box);
}

//? representing the above using classes
{
  class Box {
    constructor(value) {
      this.value = value;
    }
    //? Methodsare created on Box.prototype

    getValue() {
      return this.value;
    }
  }

  console.log(Box.prototype);
  const { constructor, getValue } = Box.prototype;
  console.log(constructor, getValue);
}

{
  function doSomething() {}
  console.log(doSomething.prototype);
  // It does not matter how you declare the function; a
  // function in JavaScript will always have a default
  // prototype property — with one exception: an arrow
  // function doesn't have a default prototype property:
  const doSomethingFromArrowFunction = () => {};
  console.log(doSomethingFromArrowFunction.prototype);

  doSomething.prototype.foo = "bar";

  const doSomeInstancing = new doSomething();
  doSomeInstancing.prop = "some value";
  console.log(doSomeInstancing);

  //? protoype from an instance of a constructor accessed by someObject.__proto__ is equal to Constructor.prototype
  console.log(doSomeInstancing.__proto__ === doSomething.prototype);

  console.log(Object.prototype.__proto__);

  const o = {
    a: 1,
  };

  console.log(o);
  console.log(o.prototype);

  const b = ["yo", "sup", "?"];

  console.log(b.__proto__);

  const a = {
    a: 1,
  };

  const c = Object.create(null);
  console.log(c);
  console.log(c.hasOwnProperty);
}

//?prototypes
{
  function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  Person.prototype.calcAge = function () {
    console.log(`My name is ${this.name}, and I am ${this.age} old`);
  };

  const rand = new Person("Rand samson", "32", "M");
  const bet = new Person("Better Raphael", "24", "F");

  // console.log(Object.getPrototypeOf(rand));
  // console.log(Person.prototype === Object.getPrototypeOf(rand));
  // console.log(Person.prototype);
  // console.log(Object.getPrototypeOf(rand).__proto__.__proto__);
  console.log(rand.hasOwnProperty("date"));
}

//?Prototypes of arrays
{
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(arr.__proto__.__proto__);
  console.log(Array.prototype.__proto__);
}

//? practice question
{
  function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  //?accelerating by 10
  Car.prototype.accelerate = function () {
    this.speed += 10;

    return this.speed;
  };

  Car.prototype.brake = function () {
    this.speed -= 5;

    return this.speed;
  };

  const carBMW = new Car("BMW", 120);
  const carMerce = new Car("BMW", 95);

  console.log(carBMW.accelerate());
  console.log(carMerce.accelerate());
  console.log(carMerce.brake());
}

//? ES6 classes

// {

//?class expression

// const PersonCl = class{

// }

//? class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //?instance methods that are added to the prototype of the PersonCl object
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2026 - this.birthYear;
  }
  //?Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      console.log(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hello there! 👋`);
  }
}

const rebecca = new PersonCl("Rebecca Raphael", 1996);
PersonCl.hey();
rebecca.calcAge();
console.log(rebecca.fullName);

//?accessing a getter in an object literal
console.log(rebecca.age);
console.log(rebecca);
const varib = new String(2);
const num = 2;
console.log(num.__proto__);
console.log(varib);
console.log(String.prototype.__proto__);

const account = {
  owner: "Raphael",
  movement: [200, 300, 150, 530, 600],
  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);
account.latest = 350;
console.log(account.movement);

//? Object.create

const PersonProto = {
  //? prototype for the new object
  calcAge() {
    console.log(2025 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstMame = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2000;
steven.calcAge();

console.log(Object.getPrototypeOf(steven));

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1996);
sarah.calcAge();

{
  //?Challenge #2
  class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
    accelerate() {
      this.speed += 10;
      return this.speed;
    }
    brake() {
      this.speed -= 5;

      return this.speed;
    }

    get speedUS(){
      return this.speed / 1.6
    }

    set speedUS(speed){
      this.speed = speed * 1.6
    }
  }

  const carBMW = new Car("BMW", 120);
  const carMerce = new Car("BMW", 95);

 console.log(carBMW.speedUS);
 carBMW.speedUS = 50
 console.log(carBMW);

}


{

 function Person(firstName, birthYear, sex) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.sex = sex;
  }

  Person.prototype.calcAge = function () {
    return 2026 - this.birthYear;
  };


  const Student = function (firstName, birthYear, sex, course) {
    Person.call(this, firstName, birthYear, sex);
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    // this.sex = sex;
    this.course = course;
  };

  //? Linking prototypes  
  
  Student.prototype = Object.create(Person.prototype);
  
  Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
  
const raph = new Student("Raphael", 1996, "M", "Computer Science");
console.log(raph);
raph.introduce();
console.log(raph.calcAge());
}

{
//? Challenge #3

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

//?accelerating by 10
Car.prototype.accelerate = function () {
  this.speed += 10;

  return this.speed;
};

Car.prototype.brake = function () {
  this.speed -= 5;

  return this.speed;
};


const Ev = function(make, speed, charge){
  Car.call(this, make, speed);
  this.charge = charge;
}

Ev.prototype = Object.create(Car.prototype);
Ev.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo;
}

Ev.prototype.accelerate = function(){
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make} going at ${this.speed}km/hr, with charge of ${this.charge}%`);
}

const tesla = new Ev("Tesla", 120, 23);
console.log(tesla);
tesla.chargeBattery(50);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();

}


{
  //?Inheritance between classes: ES6 clases
   class PersonCl {
     constructor(fullName, birthYear) {
       this.fullName = fullName;
       this.birthYear = birthYear;
     }

     //?instance methods that are added to the prototype of the PersonCl object
     calcAge() {
       console.log(2037 - this.birthYear);
     }
     get age() {
       return 2026 - this.birthYear;
     }
     //?Set a property that already exists
     set fullName(name) {
       if (name.includes(" ")) {
         this._fullName = name;
       } else {
         console.log(`${name} is not a full name`);
       }
     }

     get fullName() {
       return this._fullName;
     }

     static hey() {
       console.log(`Hello there! 👋`);
     }
   }


   class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
      //?Always need to happen first
     super(fullName, birthYear);
     this.course = course;
    }

    introduce(){
      console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calcAge() {
      console.log(
        `I'm ${2026 - this.birthYear} years old, but as a student I feel more like ${
          2026 - this.birthYear + 10
        }`
      );
    }
   }


   const david = new StudentCl("David Raphael", 1996, "Computer Science");
   console.log(david);
   david.calcAge();
   david.introduce();
   
}


{
//? inheritance between classes: Object.create
const PersonProto = {
  calcAge() {
    console.log(2026 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.info = "StudentProto info";
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init("Jay", 1996, "Computer Science");
console.log(jay);
jay.calcAge();
jay.introduce()


}




{
//?ES6 classes
class Acount{
  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  //? Public interface - methods(API)
  deposit(val){
    this.movements.push(val);
  }
  withDrawal(val){
    this.movements.push(-val);
  }

  approveLoan(val){
    return true;
  }

  requestLoan(val){
    if(this.approveLoan(val)){
      this.movements.push(val);
      console.log(`Loan approved`);
    }
  }

  balance(){
    return this.movements.reduce((acc, mov) => acc + mov, 0);
  }
}

const acct1 = new Acount("Raphael", "USD", 1111);
console.log(acct1);
acct1.deposit(250);
acct1.withDrawal(140);
console.log(acct1.movements);
console.log(acct1.balance());

acct1.requestLoan(1000);
console.log(acct1.movements);
console.log(acct1.balance());


}
