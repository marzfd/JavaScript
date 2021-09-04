'use strict'

const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(item) {
  
  if (shoppingCart.length <= 2) {
    shoppingCart.push(item);

  } else {
    shoppingCart.shift();
    shoppingCart.push(item);
  }
  let newList = shoppingCart.join(', ');
  return `You bought ${newList} !`;

}

console.log(addToShoppingCart('chocolate'));
console.log(addToShoppingCart('waffles'));
console.log(addToShoppingCart('tea'));