'use strict';

const list = [1721, 979, 366, 299, 675, 1456];
let result;


list.forEach((item, index) => {
  
    for (let i = index + 1; i < list.length; i++) {

      let j = index + 2;
      for ( j; j < (list.length - 1); j++) {

        if ((item + list[i] + list[j]) == 2020) {
          result = item * list[i] * list[j];
        }
      }
    }
});

// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);

