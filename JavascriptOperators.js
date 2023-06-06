console.log("Hello Dosto");

let a = 100;
let b = 10;
let c = 2
let d = '50'


console.log("Arithmetic Operators");
console.log( a + b); // 110
console.log( a - b); // 90
console.log( a * b); // 1,000
console.log( a / b); // 10
console.log( a % b); // 0
console.log( a ** c); // 10,000


console.log("Playing more with Arithmetic Operators");
console.log( a + d); // 100 + '50' = 10050 as string
console.log( a - d); // 100 - '50' = 50 as Number
console.log( a * d); // 100 * '50' = 5000 as Number
console.log( a / d); // 100 / '50' = 2 as Number 
console.log( d ** c); // '50' ** 2 = 2500 
console.log( d + c); // '50' + 2 = 502 as string //concatenation
console.log( d - c); // 48
console.log( d * c); // 100
console.log( d / c); // 25
console.log( d % c); // 0



console.log("Increment Operators");
let e = 10;
console.log(e);   // print 10, e = 10
console.log(e++); // print 10, e = 11
console.log(e);   // print 11, e = 11
console.log(++e); // e = 12, print 12 
console.log(e);   // e = 12, print 12


console.log("Decrement Operators");
let f = 10;
console.log(f);   // 10
console.log(f--); // 10
console.log(f);   // 9
console.log(--f); // 8
console.log(f);   // 8


console.log("Playing More with Increment, Decrement & Arithmetic Operators");
let g = 10;
console.log(g++ + g++); // 21 (10 + 11)
console.log(g);         // 12
console.log(g++ + ++g); // 26 (12 + 14)
console.log(g);         // 14
console.log(++g + g++); // 30 (15 + 15)
console.log(g);         // 16
console.log(++g + ++g); // 35 ( 17 + 18)
console.log(g);         // 18




console.log("Comparison Operators ");
let h = 10;
let i = "I";
let j = "10";
let k = 55;

console.log(h > k);  //false
console.log(h < k);  // true
console.log(h >= k); // false
console.log(h <= k); // true
console.log(h == k); // false
console.log(h === k); // false
console.log(h != k);  // true
console.log(h !== k); // true

console.log("Playing with Comparison Operators")
console.log(h > j);   // false
console.log(h < j);   // false
console.log(h >= j);  // true
console.log(h <= j);  // true
console.log(h == j);  // true
console.log(h === j); // false
console.log(h != j);  // false
console.log(h !== j); // true

console.log("Going extreme with Comparison Operators.")
console.log(h > i);   // f
console.log(h < i);   // f
console.log(h >= i);  // f
console.log(h <= i);  // f
console.log(h == i);  // f
console.log(h === i);  // f
console.log(h != i);   // true
console.log(h !== i);  // true




console.log("Logical Operators");
let l = 10;
let m = 12;
let n = 18

console.log("Logical && ");
console.log( l > m && l > n); // false 
console.log( l > m && l < n); // false 
console.log( l < m && l > n); // false 
console.log( l < m && l > n); // false 
console.log( l < m && l < n); // true

console.log("Logical || ");
console.log( l > m || l > n);  // false
console.log( l > m || l < n);  // true
console.log( l < m || l > n);  // true
console.log( l < m || l > n);  // true
console.log( l < m || l < n);  // true

console.log("Logical ! ");
console.log(!true);  // false
console.log(!false);  // true
console.log(!1);  // false
console.log(!0);  // true



console.log("Some extra comparison");
console.log(true == true); // true
console.log(true === true); // true
console.log(true == 'true'); // false
console.log(true === 'true'); // false
console.log(true == 1); // true
console.log(true == '1') // true
console.log(true === 1); // false

console.log("Thank You from Anurag Affection");