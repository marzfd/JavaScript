'use strict'

const a = ["Hello", 3, true, {name: "Marzieh"}];

const b = ["bye", 30, [1, 2, 3], 2021, "Iran", {year: "2021"}, "Best"];

console.log('a = ',a);
let x = a.length;
console.log('The length of the array "a" is : ' + x);

console.log('b = ',b);
let y = b.length
console.log('The length of the array "b" is : ' + y);

if ( x==y ) {
  console.log('They are the same!');
} else {
  console.log('Two different sizes !');
} 
