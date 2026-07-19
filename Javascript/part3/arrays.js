let students=["anika","krish","soumya","janis"];
console.log(students);

let nums=[2,4,6,8];
console.log(nums);
console.log(nums[2]);
console.log(nums.length);
console.log(typeof nums);

let info=["mahi",12,"A",true,8.9];
console.log(info);

let emptyArr=[];
console.log(emptyArr);
console.log([].length);

console.log(info[0][2]);
console.log(info[2].length);

fruits=["Apple","Mango","Orange"];
console.log(fruits);
fruits[2]="Litchi"; //Arrays are mutable
console.log(fruits);
fruits[10]="Papaya"
console.log(fruits); // ['Apple', 'Mango', 'Litchi', empty × 7, 'Papaya']

//Array Methods

let cars=["audi","mercedes","bmw"];

cars.push("toyota"); //adds at end
console.log(cars)

car=cars.pop()
console.log(cars,car);

cars.unshift("xuv");
console.log(cars);

car2=cars.shift();
console.log(car2,cars);

followers=["a","b","c"];
let blocked=followers.shift();
console.log(blocked,followers);

//Practice question
let start=["january","july","march","august"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);


//Array methods (more)

let colors=["red","yellow","blue","white","black"];

console.log(colors.indexOf("red"));
console.log(colors.indexOf("green"));

console.log(colors.includes("blue"));
console.log(colors.includes("pink"));

let primary=["red","yellow","blue"];
let secondary=["orange","green","violet"];
console.log(primary.concat(secondary)); //new array created
console.log(primary);

primary.reverse();
console.log(primary);
primary.reverse();
console.log(primary);


console.log(colors.slice()); //it creates a copy
console.log(colors.slice(2));
console.log(colors.slice(2,4));
console.log(colors.slice(-2));
console.log(colors.slice(colors.length)); //returns []

// let colors=["red","yellow","blue","white","black"];
//IMPORTANT

console.log(colors.splice(3)); // works like slice but makes changes in original array
console.log(colors); //Now only ['red', 'yellow', 'blue'] are left in the array

console.log(colors.splice(0,1)); //starting from index 0 delete 1 element ie red
console.log(colors); // ['yellow', 'blue']

console.log(colors.splice(0,1,"grey","beige")); // delte 1 element starting from index 0 and then add "grey" and "beige" starting from index 0
console.log(colors);

colors.splice(2,0,"pink","lavender","green");
console.log(colors); // ['grey', 'beige', 'pink', 'lavender', 'green', 'blue']

//to replace beige:
colors.splice(1,1,"brown");
console.log(colors);

//sort
let chars=['b','a','g','e','z'];
chars.sort();
console.log(chars);

let squares=[1,16,25,4,9]  // It does not work well with numbers
squares.sort();
console.log(squares.sort()); // does not sorts

//Practice Question
let months=["january","july","march","august"];
months.splice(0,2,"july","june");
console.log(months);

let lang=["c","c++","html","javascript","python","java","c#","sql"];
console.log(lang.reverse().indexOf("javascript"));

//Array References // references mean address in memory
console.log([1]==[1]); //false
console.log([1]===[1]); //false //address is compared

let arr=["a","b"];
let arrCopy=arr;
console.log(arr==arrCopy);
console.log(arr===arrCopy);
arr.unshift("c");
console.log(arrCopy); //any changes made in arr will also reflect on arrCopy

//Constant arrays
const g=9.8;
console.log(g);
const a=[1,2,3,4];
console.log(a);
a.push(4);
console.log(a);
console.log(a.pop());
console.log(a);
// a=[1,2,3]; This is not allowed
// a=colors This is also not allowed
console.log(a)

//Nested Arrays or multidimensional arrays

let n=[[1,2],[3,4,[7,8]],[5,6]];
console.log(n);
console.log(n[1][2][0]);

//Practice Question
let tttGame=[['X',null,'O'],[null,'X',null ],['O',null,'X']];
console.log(tttGame);
tttGame[0][1]='O';
console.log(tttGame);

