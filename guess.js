"use strict";

let randomNumber = Math.trunc(Math.random()*10+1);
let chances=5;
const messages=function(message)
{
    document.querySelector(".message").textContent=message;
}
document.querySelector("#match_value").addEventListener('click',function(){
const userNumber=Number(document.querySelector(".guess").value);
console.log(userNumber,typeof userNumber);


if(userNumber)
{
if(chances>=1){
    if(userNumber>randomNumber){
        messages("guess lower");
    }
    else if(userNumber<randomNumber){
        messages("guess higher");
    }
    else{
        messages("🥳YOU WIN🥳");
        // document.getElementsByClassName("match").disabled=true;
        document.querySelector(".number").textContent=`${randomNumber}`;
        document.querySelector(".match").disabled="true";
        document.body.style.background="green";
        
        
    }
}else{
    messages("😟YOU LOST😟");
    document.querySelector(".match").disabled="true";
    document.querySelector(".number").textContent=`${randomNumber}`;
    document.body.style.background="red";
}
chances--;
document.querySelector(".score").textContent = `${chances}`;
} 
else{
    messages("😠No Value😠");
}
});
document.querySelector("#again").addEventListener('click',function(){
    chances=5;
    messages("Let's start");
    document.querySelector(".score").textContent=chances;
    randomNumber = Math.trunc(Math.random()*10+1);
    document.querySelector(".number").textContent="??";
    document.querySelector(".guess").value="";

});

