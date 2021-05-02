'use strict';
let score=0;
let userName = prompt('Whats your name please?').toUpperCase();
alert ('Welcome '+ userName +' we wil ask you a few questions about Sereen Aldaqamsih.');
let userApprove = prompt('Are you ready?').toLowerCase();
switch (userApprove) {
case 'no':
break;
case 'n':
break;
default: 
let qustion1 = function(){
let userFrom = prompt('Are you in Jordan?').toLowerCase();

switch (userFrom) 
{

case 'yes':
             alert ('Sereen lives in Jordan too.');
             score= score+1;
         break;
case 'y':
              alert ('Sereen lives in Jordan too.');
              score= score+1;


          break;
case 'no':
             alert ('Sereen lives in Jordan .');

         break;
case 'n':
             alert ('Sereen lives in Jordan .');

         break;

    default:
         break;
}

}
qustion1();


let qustion2 =function(){
let userWork = prompt('Is Sereen engineer?').toLowerCase();

switch (userWork)
{
    case 'yes':
        
        alert ("That's true, Im electrical  power engineer");
        score= score+1;

        break;
    case 'y':
        
        alert ("That's true, Im electrical  power engineer");
        score= score+1;


        break;
    case 'no':
        
        alert ('false answer,Sereen studied Electrical power engineering.');
        break;
    case 'n':
       
        alert ('false answer,Sereen studied Electrical power engineering.');

        break;
 default:
     
     break;
}
}

qustion2();

let qustion3 =function(){
let userExp = prompt("Sereen didn't work any where befor?").toLowerCase();
switch (userExp)
{
    case 'yes':
        
        alert ("False answer,i've experience");
        break;
        case 'y':
            
            alert ("False answer,i've experience");

            break;
        
case 'no':
    alert ('I have 4 years experience as electrical engineer');
    
    score= score+1;


     break;
    case 'n':
        alert ('I have 4 years experience as electrical engineer');
       
        score= score+1;

    break;
    default:
       
        break;}
}

qustion3();

let qustion4 = function(){

let userUni= prompt("Sereen graduated from Just university?").toLowerCase();

switch (userUni){
    case 'yes':
        alert ('False answer,sereen graduted from yarmouk university');
    break;
    case 'y':
        alert ('False answer,sereen graduted from yarmouk university');

    break;
        case 'no':
        alert('Sereen graduted from Yarmouk University 2014');
        score= score+1;

    break;
        case 'n':
                alert('Sereen graduted from Yarmouk University 2014');
                score= score+1;
                break;
    default:
            break;
}
}
qustion4();

let qustion5 =function(){
let userChild= prompt("Is Sereen a mother?").toLowerCase();
switch (userChild){
    case 'yes':
        alert('Sereen mother for one child,her name Yara');
        score= score+1;

        break;
        case 'y':
            alert('Sereen mother for one child,her name Yara');
            score= score+1;

            break;
            case 'no':
         alert('False answer,Sereen mother for one child,her name Yara')
           break;
           case 'n':
               break;
               default:
                   break;
        }
    }
    qustion5();
    let qustion6 = function(){
        let flag =false;
        let fla =false;
        let answer=false;

    let userYear= parseInt(prompt('Guess when year Sereen born? '));

   for (let i=0; i<3; i++)
   {
       if (userYear==1991){
       alert ('Yes, You are true, Sereen born 14/5/1991');
        flag= true;
         fla=true;
         answer=true;
         score= score+1;
;       break;}
       else {    
if (userYear<1991) { 
alert ('too low');
userYear= parseInt(prompt('Guess when year Sereen born? '));
 }
if (userYear>1991){
    alert('too high');
userYear= parseInt(prompt('Guess when year Sereen born? '));
}}
if (userYear==1991){
    alert ('Yes, You are true, Sereen born 14/5/1991');
     flag= true;
      fla=true;
      answer=true;
      score= score+1;
;       break;}}
if (answer===false){ 
alert ('Thank you for trying, Sereen born in 1991');
    
    }
    qustion6();
let userAnswer=['irbid','amman','salt','aqaba','petra'];

let qustion7 = function(){
let userKnow=prompt('Guess the name of jordanian city sereen like it?').toLowerCase();
let final=false;
let result=false;
let books=false;
for ( let j=0; j<5;j++){
for (let i=0; i<userAnswer.length;i++)
{    if (userKnow === userAnswer[i])
    {
        alert ('Great, true answer!');
        score= score+1;
        final=true;
        result=true;
        books=true;
        break;
    }
   }
   if (books===false)   
    {alert ('False answer, try again');
        userKnow=prompt('Guess the name of jordanian city sereen like it?').toLowerCase();}
else {break;}}
if (result===false){ alert('sorry youre answer wrong, the true answer is irbid or amman or salt,aqaba,petra.');}

}
qustion7();
for (let i=0; i<userAnswer.length ;i++){
    let one=userAnswer[0];
    let two=userAnswer[1];
    let three=userAnswer[2];
    let four=userAnswer[3];
    let five=userAnswer[4];
    if (i>=4){
    alert ('this is my favourit city '+one+two+three+four+five);
}}

alert( 'welcome '+userName+', Thank you for your time.your score in this game its '+score);
    break;
    }