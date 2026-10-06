//qs1
function func1(arr,num){
    for(n of arr){
        if(n>num){
            console.log(n);  
        }
    }
}
func1([12,19,25,20,1],15);

//qs2
function func2(str){
    let ans="";
    for(char of str){
        if(ans.indexOf(char)==-1){
            ans+=char;
        }
    }
    return ans;
}
console.log(func2("aabbccdd"));

//qs3
function func3(list){
    let max="";
    for(country of list){
        if(country.length>max.length){
            max=country;
        }
    }
    return max;
}
console.log(func3(["Australia","Germany","United States of America"]));

//qs4
function func4(str){
    let c=0;
    let vowels="aeiouAEIOU";
    for(char of str){
        if(vowels.indexOf(char)!=-1){
            c+=1;
        }
    }
    return c;
}
console.log(func4("balloon"));

//qs5
let func5 = function(start,end){
    return Math.floor(Math.random()*(end-start+1))+(start);
}
console.log(func5(1,5));
console.log(func5(6,10));
console.log(func5(9,12));
console.log("Hello h")