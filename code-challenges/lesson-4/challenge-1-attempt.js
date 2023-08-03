/* 
Why doesn't this code work? 
Try to make it work and guess what the result will be
(hint: this is a little bit of a review from last lesson).
const numberVariable = 0;
*/

/* 
const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);
*/

//cannot change a const variable
//change to let
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);