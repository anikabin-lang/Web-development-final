// let arr11=[1,2,3];

// arr1.getHello=()=>{
//     console.log("Hello");
// }

// let arr2=[1,2,3];

// arr2.getHello=()=>{
//     console.log("Hello");
// }

////** */ Factory function ****

// function personMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi,my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// let p1=personMaker("anika",19); //copy of talk function
// let p2=personMaker("krish",19); //copy of talk function


////******Constructors ***** - does not return anything n start with capital letter
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.talk=function(){
//     console.log(`My name is ${this.name}`);
// }

// let p1=new Person("anika",19);
// let p2=new Person("krish",19)

////********** Classes ***********/

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`My name is ${this.name}`);
//     }
// }
// let p1=new Person("anika",19);
// let p2=new Person("krish",19);

////***** Inheritance */

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// class Student extends Person{
//     constructor(name,age,marks){
//         super(name,age);
//         this.marks=marks;
//     }
// }

// let stu1  = new Student("anika",19,88);
// let stu2 = new Student("krish",19,89);

// class teacher extends Person{ 
//     constructor(name,age,subject){
//         super(name,age);   //parent class constructor is being called
//         this.subject=subject;
//     }
// }



class Mammal{ //parent
    constructor(name){
        this.name=name
        this.type="warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mammal{ //child
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woof..");
    }
    eat(){
        console.log("Dog is eating")
    }
}

class Cat extends Mammal{ //child
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow..");
    }
}

let dog1=new Dog("Tuffy");
dog1.eat();