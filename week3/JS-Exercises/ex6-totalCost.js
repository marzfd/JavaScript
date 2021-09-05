'use strict';

const cartForParty = {
                      beers: 1.75,
                      chips: 0.99,
                      bread: 1.5,
                      egg: 0.5,
                      cake: 2.01
                    };

function calculateTotalPrice(list) {
  
  let sum = 0;
  for (let item in list) {
      sum += list[item];

  }

  return `Total : €${sum}`;
}

console.log(calculateTotalPrice(cartForParty));