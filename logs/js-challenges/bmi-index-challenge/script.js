/**
 * BMI Coding Challenge
 */
//Store Mark's and John's mass and height in variables
//Calculte their BMIs = mass / height ^2
//Create a boolean wheter Mark or John has higher BMI
//print a string from ^

var heightMark, heightJohn, massMark, massJohn, bmiMark, bmiJohn;
heightJohn = 1.7; // height in meters
heightMark = 1.6; 
massJohn = 68.04 //weight in kilograms
massMark = 72.58;
//calculates bmi for John
bmiJohn = massJohn / (heightJohn * heightJohn);
//console.log(bmiJohn);
//calculates bmi for Mark
bmiMark = massMark / (heightMark * heightMark);
//console.log(bmiMark);
var higherBMI = (bmiJohn > bmiMark);
console.log("Is John's BMI higher than Mark's? " +higherBMI);


