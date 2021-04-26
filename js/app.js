'use strict';
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
         break;
case 'y':
              console.log('The user in jordan');
              alert ('Sereen lives in Jordan too.');

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
        break;
    case 'y':
        console.log ("That's true, Im electrical  power engineer");
        alert ("That's true, Im electrical  power engineer");

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

     break;
    case 'n':
        alert ('I have 4 years experience as electrical engineer');
        console.log("I have 4 years experience as electrical engineer");
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
            break;
            case 'n':
                alert('Sereen graduted from Yarmouk University 2014');
                console.log('sereen graduted from yarmouk university');
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
        break;
        case 'y':
            alert('Sereen mother for one child,her name Yara');
            console.log('Sereen mother for one child,her name Yara');
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
    
    alert( 'welcome '+userName+', Thank you for your time.');
    break;
    }