'use strict';

const passwordList = [
  { times: '1-3', letter: 'a', password: 'abcde'},
  { times: '1-3', letter: 'b', password: 'cdefg'},
  { times: '2-9', letter: 'c', password: 'ccccccccc'}
];

passwordList.forEach(item => {

  const { password, times, letter } = item; // Convert object to array !

  const onlyLetter = Array.from(password).filter(character => character === letter);
  const amountOfInstancesOfLetter = onlyLetter.length;
  const minimumAmount = parseInt(times.slice(0, 1));
  const maximumAmount = parseInt(times.slice(2));

  if (amountOfInstancesOfLetter >= minimumAmount && amountOfInstancesOfLetter <= maximumAmount) {
      console.log(`${password} is VALID, ${letter} is present ${amountOfInstancesOfLetter} times and should have been present at least ${minimumAmount} and at most ${maximumAmount} times`);
  }
  else {
      console.log(`${password} is INVALID, ${letter} is present ${amountOfInstancesOfLetter} times and should have been present at least ${minimumAmount} and at most ${maximumAmount} times`);
  }
});