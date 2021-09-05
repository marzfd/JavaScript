'use strict';

function addToShoppingCart(list, item) {
  
  const newShoppingCart = [...list, item];
  
  if (newShoppingCart.length > 3) {
    newShoppingCart.shift();
  }
  return newShoppingCart;
}

const shoppingCart = ["bananas", "milk"];

const cartAfterFirst = addToShoppingCart(shoppingCart, 'chocolate');
const cartAfterSecond = addToShoppingCart(cartAfterFirst, 'waffles');
const cartAfterThird = addToShoppingCart(cartAfterSecond, 'tea');

console.log('Original shopping cart', shoppingCart); // => ['bananas', 'milk']
console.log('After adding first item', cartAfterFirst); // => ['bananas', 'milk', 'chocolate'] 
console.log('After adding second item', cartAfterSecond); // => ['milk', 'chocolate', 'waffles']
console.log('After adding third item', cartAfterThird); // => ['chocolate', 'waffles', 'tea']