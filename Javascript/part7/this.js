// const student={
//     name:"Anika",
//     eng:92,
//     math:98,
//     sci:95,
//     average(){
//         console.log(this);
//         let avg=(this.eng + this.math + this.sci)/3;
//         console.log(`${this.name} got avg marks ${avg}`);
//     }
// };
// student.average();

// function average(){
//     console.log(this);  //window object
// }
// average();

//this with arrow functions
//arrow function have lexical scope

const student={
    name:"Krish",
    age:19,
    prop:this,
    getName: function(){
        console.log(this); //this means calling object for normal functions
        return this.name;
    },
    getAge:()=>{
        console.log(this);  //this means parent's scope for arrow funcs ie parent of arrow func is object and parents scope is global hence this is globalscope hence this=window
        return this.age;
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this) //this=student object
        },2000);
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this) //this=window object because settimeout is called by window object hence calling object is window
        },2000);
    }
};
// console.log(student);
console.log(student.getName()); //this=student object
console.log(student.getAge()); //this=parents scope ie global(scope of student)
console.log(student.getInfo1()); 
console.log(student.getInfo2()); 