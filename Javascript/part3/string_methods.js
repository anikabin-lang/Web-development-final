let msg="          Hello  ";
// console.log(msg.trim());

// let pass=prompt("set your password");
// newPass=pass.trim();
// console.log(pass);
// console.log(newPass);

let str=msg.trim();
console.log(msg);
console.log(str);

let s="Random string";
console.log(s.toUpperCase());
console.log(s.toLowerCase());

index=s.indexOf("hello");
console.log(index);

console.log(msg.trim().toUpperCase().indexOf("E"));

console.log(s.slice(0,5)); //last index is exclusive
console.log(s.slice(7));
console.log(s.slice(-6));

newString=s.replace("string","line");
console.log(newString);
newLetters=s.replace("o","i");
console.log(newLetters);

let message="Hello";
console.log(message.repeat(4));

//Practice Question:
let m="help!";
console.log(m.trim().toUpperCase());
//2.
let name="ApnaCollege";
//Colle
//2
// OurCollege
//3
i=name.indexOf("College");
newName=name.slice(i).replace("l","t").replace("l","t");
console.log(newName);

