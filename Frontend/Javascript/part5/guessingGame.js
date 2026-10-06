const max=prompt("Enter the maximum number");
const random=Math.floor(Math.random()*max)+1;
let user=prompt("Guess the number");
let guess=0;
while(true){
    guess+=1;
    if(user=="quit"){
        console.log(`User quit , total guesses ${guess}, correct number ${random}`);
        break;
    }
    if(user==random){
        console.log(`Your guess is correct, Congrats!, your guess count: ${guess}`);
        break;
    }else{
        if(user>random){
            user=prompt("Your guess was incorrect, please enter a lower number");
        }else{
            user=prompt("Your guess was incorrect, please enter a higher number");
        }
    }
}