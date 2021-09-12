'use strict';

const list = [1721, 979, 366, 299, 675, 1456];
let result;


list.forEach((item, index) => {

  for (let i = index + 1; i < list.length; i++) {
  
    if ((item + list[i]) == 2020) {
      result = item * list[i];
    }
  }
  
});

// TEST CODE, do not change
console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);