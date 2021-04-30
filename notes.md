
//Q6
    let qustion6 = function(){
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
    }

    qustion6();

    a {
    text-decoration: none;
    color: brown;
    font-style: bold;}
    #menu {
      border:solid rosybrown 10px;
  }
.one {
    margin: 80px;
    color: brown;
    border: 1px solid brown;
    display: inline-block;
  }