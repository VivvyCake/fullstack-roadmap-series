
Do the following two blocks of code result in the same answer?  
If not, which one would you recommend using and why?


Snippet 2
result = false because firstNumer is an int and secondNumber is a str
and === performs a strict equality comparison with no type coercion
```javascript
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);
```

Snippet 2
result = true because == foes a type coercion to make the comparsion possible
so the computer is comparing "20" = "20" or 20 = 20 */
```javascript
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);
```

A rule of thumb is to use === for comparsions in JS.