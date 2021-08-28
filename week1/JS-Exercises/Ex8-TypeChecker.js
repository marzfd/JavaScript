'use strict'

function typeChecker (one, two) {
  if (typeof one === typeof two) {
    console.log("SAME TYPE");
  } else {
    console.log("Not the same ...");
  }
}

let x = "Tehran";
let y = "Iran";

let a = { name: 'Marzieh'};
let b = { Passion: 'Coding !'};

console.log(x, 'and', y, 'are :');
typeChecker(x, y);

console.log(x, 'and', a, 'are :');
typeChecker(x, a);

console.log(x, 'and', b, 'are :');
typeChecker(x, b);

console.log(y, 'and', a, 'are :');
typeChecker(y, a);

console.log(y, 'and', b, 'are :');
typeChecker(y, b);

console.log(a, 'and', b, 'are :');
typeChecker(a, b);