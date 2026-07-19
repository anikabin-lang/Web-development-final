//qs1
let arr=[1,2,3,4,5,6,2,3];
let num=2;

for(let i=0;i<arr.length;i++){
    if(num==arr[i]){
        arr.splice(i,1);
    }
}
console.log(arr)

//qs2
let numbe=287152;
let c=0;
let n=numbe;
while(n>0){
    n=Math.floor(n/10);
    c+=1;
}
console.log(c);

//qs3
let s=0;
let no=numbe;
let r;
while(no>0){
    r=no%10;
    s+=r;
    no=Math.floor(no/10);
}
console.log(s);

//qs4
let numb=5;
let fact=1;
let t=numb;
while(t>0){
    fact*=t;
    t=t-1;
}
console.log(fact);

//qs5
let a=[19,12,25,20];
let max=0;
for(num of a){
    if(num>max){
        max=num;
    }
}
console.log(max);