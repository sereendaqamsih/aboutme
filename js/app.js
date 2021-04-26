'use strict';

let userFrom = prompt('Are you in Jordan?').toLowerCase();

switch (userFrom) 
{

case 'yes':
             console.log('The user in Jordan');
         break;
case 'y':
              console.log('the user in jordan');
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