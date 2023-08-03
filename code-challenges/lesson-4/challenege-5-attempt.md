This one is meant to be a tough challenge.  You probably will need to Google this and it might take you a while to complete.

What does `result` evaluate to?

```javascript
const myObj = {
  nestedObject1: {
    price: 100,
    quantity: 5
  },
  nestedObject2: {
    price: 150,
    quantity: 2
  }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 
```

myArray = [{price: 100, quantity: 5}, {price: 150, quantity: 2}]

myArray[0].price * myArray[0].quantity
100 * 5 = 500

myArray[1].price * myArray[1].quantity
150 * 2 = 300

result = 500 > 300
result = true