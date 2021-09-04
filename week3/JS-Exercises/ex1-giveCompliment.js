'use strict'

function giveCompliment(name) {
  const compliments = [
                      "great", "awesome", "amazing", "a true gift", "incredible",
                      "admirable", "adorable", "fascinating", "delightful", "graceful"
                      ];
  let compliment = compliments[Math.floor((Math.random() * compliments.length))];

  return `You are ${compliment}, ${name} !`;
}

console.log(giveCompliment("Marzieh"));
console.log(giveCompliment("Marzieh"));
console.log(giveCompliment("Marzieh"));