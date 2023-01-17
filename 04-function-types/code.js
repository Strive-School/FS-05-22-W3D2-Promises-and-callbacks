const a = 10;

// 1.standard function with name
function sayHello() {
  console.log("sayHello");
}

// 2. anonymous function

const sayHelloAnonymous = function () {
  console.log("hello");
};

// 3. arrow functions

// font that I use : https://github.com/tonsky/FiraCode

const sayHelloArrowFunction = () => {
  console.log("hello");
};

// 4. IIFE Immediately Invoked Function Expressions

/* (function sayHello(){
    console.log('hello')
})() */

// 5. Constructor  - To generate object

/* function User(name,age){
    this.name=name;
    this.age=age;
    return {
        name:this.name,
        age:this.age,
        sayYourName :() =>{
            console.log(`My name is ${this.name}`)
        },
        sayYourAge:() => {
            console.log(`My age is ${this.age}`)
        }
    }
}

const user = new User('ubeyt',29)
const diana = new User('Diana',26)
//user.sayYourName()
diana.sayYourName()
diana.sayYourAge() */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
  sayAge() {
    console.log(`My age is ${this.age}`);
  }
}

class Student extends Person {
    constructor(name,age){
        super(name,age)
        this.title='student'
    }
    sayYourTitle(){
        console.log(`My title is ${this.title}`)
    }
}

/* const diana = new Person("diana", 29);
const riccardo = new Person("riccardo", 50);
diana.sayName();
diana.sayAge();

riccardo.sayName();
riccardo.sayAge();
 */

/* 
const piotr = new Student('piotr',13)
piotr.sayName()
piotr.sayAge()
piotr.sayYourTitle() */