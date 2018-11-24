/**
 * Ternary Operator and Switch Statements
 
 */

 var firstName = 'Aaron';
 var age = 26;

//TERNARY OPERATOR
//condition then if block then else block. 
 age >= 18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks juice.');

 //what Aaron can drink
 //beer if age >= 18____juice if not
 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);
  
 //SWITCH STATEMENT
 var job = 'nCino';
 switch (job) {
     case 'teacher':
     case 'instructor': // can have multiple cases for one clause
        console.log(firstName + ' teaches people how to code') ;
        break; //without break it will keep evaluating next cases
     case 'driver':
        console.log(firstName + ' drives an uber in Wilmington');
        break;
     case 'designer':
        console.log(firstName + ' designs awesome websites');
        break;
    default:
        console.log(firstName + ' is a support engineer');
 }
 //case that is true is executed
 switch (true){
     case age < 13:
        console.log(firstName + ' is a boy');
        break;
     case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
     case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
     default:
        console.log(firstName + ' is a peasant');        
 }


