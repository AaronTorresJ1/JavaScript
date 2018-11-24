var firstName = 'John';
var civilStatus = 'single';


//test whether civil status is married or not
if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

//test whether civil status is married using boolean variable
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
}else{
    console.log(firstName + ' will hopefully marry soon');
}

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

//testing if bmiMark is higher than bmiJohn
if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');    
}
//console.log(bmiMark);
//var higherBMI = (bmiJohn > bmiMark);
//console.log("Is John's BMI higher than Mark's? " +higherBMI);