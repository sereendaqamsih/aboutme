'use strict';
let userName = prompt('Whats your name please?');

alert ('welcome '+ userName +' we wil ask you a few questions about Sereen Aldaqamsih.');

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
             alert ('same as me');
         break;
case 'y':
              console.log('the user in jordan');
              alert ('same as me');

          break;
case 'no':
             console.log('the user outside Jordan ');
         break;
case 'n':
             console.log('the user outside Jordan ');
         break;

    default:
         console.log (userFrom);
         break;
}


let userWork = prompt('am i engineer?').toLowerCase();

switch (userWork)
{
    case 'yes':
        console.log ('welcome engineer');
        alert ("That's true, im electrical engineer");
        break;
    case 'y':
        console.log ('welcome engineer');
        alert ("That's true, im electrical engineer");

        break;
    case 'no':
        console.log ('welcome');
        break;
    case 'n':
        console.log ('welcome');
        break;
 default:
     console.log(userWork);
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
     break;
    case 'n':
        alert ('I have 4 years experience as electrical engineer');
    break;
    default:
        console.log(userExp);
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
            break;
            case 'n':
                alert('Sereen graduted from Yarmouk University 2014');
                break;
                default:
                    console.log(userUni);
                    break;
}


}