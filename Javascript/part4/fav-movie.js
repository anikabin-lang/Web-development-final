const favMovie="Yeh Jawaani Hai Deewani";
let guess=prompt("guess my favourite movie");
while((guess!=favMovie) ){
    if(guess=="quit"){
        console.log("You quit");
        break;
    }
    guess=prompt("wrong guess. please try again");
}
if(guess==favMovie){
    console.log("Congratulations!");
}