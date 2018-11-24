/**
 * BOOLEAN LOGIC
 */

 var firstName = 'John';
 var age = 16;

 if (age < 13) {
     console.log(firstName + ' is a boy. ');
//age is greater or equal to 13 AND less than 20
 } else if (age >= 13 && age < 20) { 
     console.log(firstName + ' is a teenager ');
//age is greater or equal to 20 and less than 30
 }else if(age >= 20 && age <30){
    console.log(firstName + ' is a young man. ');
 }else{
     console.log(firstName + ' is a man. ');
 }
 
 

