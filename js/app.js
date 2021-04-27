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

let userFrom = prompt('Are you in Jordan?').toLowerCase();

switch (userFrom) 
{

case 'yes':
             console.log('The user in Jordan');
             alert ('Sereen lives in Jordan too.');
             score= score+1;
         break;
case 'y':
              console.log('The user in jordan');
              alert ('Sereen lives in Jordan too.');
              score= score+1;


          break;
case 'no':
             console.log('the user outside Jordan, Sereen lives in Jordan.');
         break;
case 'n':
             console.log('the user outside Jordan,Sereen lives in Jordan.');
         break;

    default:
         console.log (userFrom);
         console.log('the user outside Jordan,Sereen lives in Jordan.');
         break;
}


let userWork = prompt('Is Sereen engineer?').toLowerCase();

switch (userWork)
{
    case 'yes':
        console.log ("That's true, Im electrical  power engineer");
        alert ("That's true, Im electrical  power engineer");
        score= score+1;

        break;
    case 'y':
        console.log ("That's true, Im electrical  power engineer");
        alert ("That's true, Im electrical  power engineer");
        score= score+1;


        break;
    case 'no':
        console.log ('Sereen studied Electrical power engineering.');
        break;
    case 'n':
        console.log ('Sereen studied Electrical power engineering.');
        break;
 default:
     console.log(userWork);
     console.log ('Sereen studied Electrical power engineering.');
     break;
}

let userExp = prompt("Sereen didn't work any where befor?").toLowerCase();
switch (userExp)
{
    case 'yes':
        console.log("i've experience");
        
        break;
        case 'y':
            console.log("i've experience");
            break;
        
case 'no':
    alert ('I have 4 years experience as electrical engineer');
    console.log("I have 4 years experience as electrical engineer");
    score= score+1;


     break;
    case 'n':
        alert ('I have 4 years experience as electrical engineer');
        console.log("I have 4 years experience as electrical engineer");
        score= score+1;

    break;
    default:
        console.log(userExp);
        console.log("I have 4 years experience as electrical engineer");
        break;}

 let userUni= prompt("Sereen graduated from Just university?").toLowerCase();

switch (userUni){
    case 'yes':
        console.log('sereen graduted from yarmouk university');
    break;
    case 'y':
        console.log('sereen graduted from yarmouk university');
        break;
        case 'no':
            alert('Sereen graduted from Yarmouk University 2014');
            console.log('sereen graduted from yarmouk university');
            score= score+1;

            break;
            case 'n':
                alert('Sereen graduted from Yarmouk University 2014');
                console.log('sereen graduted from yarmouk university');
                score= score+1;

                break;
                default:
                    console.log(userUni);
                    console.log('sereen graduted from yarmouk university');
                    break;
}

let userChild= prompt("Is Sereen a mother?").toLowerCase();
switch (userChild){
    case 'yes':
        alert('Sereen mother for one child,her name Yara');
        console.log('Sereen mother for one child,her name Yara');
        score= score+1;

        break;
        case 'y':
            alert('Sereen mother for one child,her name Yara');
            console.log('Sereen mother for one child,her name Yara');
            score= score+1;

            break;
            case 'no':
         
           console.log('Sereen mother for one child,her name Yara');
           break;
           case 'n':
               console.log('Sereen mother for one child,her name Yara');
               break;
               default:
                   console.log(userChild);
                   console.log('Sereen mother for one child,her name Yara');
                   break;
        }

        let flag =false;
        let fla =false;
        let answer=false;
    
    let userTry =[1990,1992,1993,1994];
    let userYear= parseInt(prompt('Guess when year Sereen born? '));
   for (let i=0;i<3;i++){if (userYear==1991)
       {alert ('Yes, You are true, Sereen born 14/5/1991'); flag= true; fla=true;answer=true;console.log('question 6 right answer');             score= score+1;
;       break;}
       else {    
for (let i=0; i <userTry.length;i++) {
if (userYear==userTry[i]) { 
alert ('you are draw near,try again.');
userYear= parseInt(prompt('Guess when year Sereen born? '));
flag=true;
fla=true;
break; }}
if (flag===false) {alert ('You are faraway try again.');
userYear= parseInt(prompt('Guess when year Sereen born? ')); }}}
if (answer===false){ alert ('Thank you for trying, Sereen born in 1991');console.log ('question 6 wrong answer.');}

let userKnow=prompt('Guess the name of jordanian city sereen like it?').toLowerCase();
console.log(userKnow);
let userAnswer=['irbid','amman','salt','aqaba','petra'];
console.log(userAnswer);
let final=false;
let result=false;
let books=false;
for ( let j=0; j<5;j++){
for (let i=0; i<userAnswer.length;i++)
{    if (userKnow === userAnswer[i])
    {
        alert ('Great, true answer!');
        console.log('true question 7');
        score= score+1;
        final=true;
        result=true;
        books=true;
        break;
    }
   }
   if (books===false)    {userKnow=prompt('Guess the name of jordanian city sereen like it?').toLowerCase();}
else {break;}}
if (result===false){ alert('sorry youre answer wrong, the true answer is irbid or amman or salt,aqaba,petra.');}




    alert( 'welcome '+userName+', Thank you for your time.your score in this game its '+score);
    alert ('This is the true answer for all 7 question: serren in jordan,shes an engineer,she was worked as electrical engineer,graduated from yarmouk university,sereen mother for one child, was born in 1991,sereen like irbid city and amman,aqaba,petra and salt.');
    break;
    }