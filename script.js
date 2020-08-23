var uscore= 0;
var cscore= 0;
const user_score= document.getElementById("user-score");
const comp_score= document.getElementById("comp-score");
const score_board=document.querySelector(".score-board");
const result=document.querySelector(".result > p");
const rock=document.getElementById("r")
const paper=document.getElementById("p");
const scissor=document.getElementById("s");

function getcompchoice(){
    const choices = ["r","p","s"];
    const random = Math.floor(Math.random()*3);
    return choices[random];
}
function convert(value){
    if(value=="r")
    return "Rock";
    if(value=="p")
    return "Paper";
    else
    return "Scissor";
}
function win(user,comp){
    const user_ch="User".fontsize(3).sub();
    const comp_ch="Comp".fontsize(3).sub();
    console.log("win");
    uscore++;
    user_score.innerHTML = uscore;
    comp_score.innerHTML = cscore;
    result.innerHTML=`${convert(user)}${user_ch} beats ${convert(comp)}${comp_ch}<br><br>Congrats You Win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(e => {document.getElementById(user).classList.remove('green-glow')},500);
}
function lost(user,comp){
    const user_ch="User".fontsize(3).sub();
    const comp_ch="Comp".fontsize(3).sub();
   
    console.log("lost");
    cscore++;
    user_score.innerHTML = uscore;
    comp_score.innerHTML = cscore;
    result.innerHTML=`${convert(user)}${user_ch} beaten by ${convert(comp)}${comp_ch}<br><br>Oops..You Lost`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(e => {document.getElementById(user).classList.remove('red-glow')},500);

}
function draw(user,comp){
    const user_ch="User".fontsize(3).sub();
    const comp_ch="Comp".fontsize(3).sub();

    console.log("draw");

    user_score.innerHTML = uscore;
    comp_score.innerHTML = cscore;
    result.innerHTML=`${convert(user)}${user_ch} equals ${convert(comp)}${comp_ch}<br><br>Oii.. It's a Draw`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(e => {document.getElementById(user).classList.remove('gray-glow')},500);

}
function game(uchoice){
    const cchoice= getcompchoice();
    switch(uchoice+cchoice)
    {
        case "rs": 
        case "pr": 
        case "sp":
            win(uchoice,cchoice);
            break;
        
        case "sr": 
        case "rp": 
        case "ps":
           lost(uchoice,cchoice);
           break;
       
       case "rr": 
       case "pp": 
       case "ss":
           draw(uchoice,cchoice);
           break;
    }
}
function main(){
    
    rock.addEventListener('click',function(){
        game("r");  
      });
    paper.addEventListener('click',function(){
        game("p");   
      });
    scissor.addEventListener('click',function(){
        game("s");  
      });
}
main();