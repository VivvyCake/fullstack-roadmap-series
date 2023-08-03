What does `expression5` evaluate to?  How could you write this in a single line of code (for exercise purposes only; you would never want to combine all this in one line)?

```javascript
const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);
```

100 % 50  = 0
100 / 50 = 2
0 < 2 = true
true && 300 + 5 === 305 = true
!true = false

expression5 = false

in one line it would look like...
```javascript
const x = !(((100 % 50) < (100 / 50)) && 305 + 5 === 305);
console.log(x);
```