'use strict';

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
