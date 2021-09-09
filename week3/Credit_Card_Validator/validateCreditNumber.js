'use strict';

function validateCreditNumber(str) {

   // Are all input numbers the same ??
   function isNotSameNumber(s) {
    for (let i = 0; i < (s.length); i++) {
      if (s.charAt(i) !== s.charAt(i + 1)) {
        return true;
      } else {
        return false;
      };
    };
  };
  
  
  // Add the numbers in the input to get the sum !!
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum + parseFloat(str.charAt(i));
  };


  // Validation of Credit Card Numbers :
  if (str.length !== 16) {
    console.log(`"Invalid! The input ${str} must be 16 characters!"`);

  } else if (isNaN(str)) {
    console.log(`"Invalid! The input ${str} should contain only numbers!"`);

  } else if (parseFloat(str) % 2 !== 0) {
    console.log(`"Invalid! The last number of input ${str} should be even!"`);

  } else if (sum < 16) {
    console.log(`"Invalid! The sum of all numbers in input ${str} should be equal to or greater than 16!"`);

  } else if (!isNotSameNumber(str)) {
    console.log(`"Invalid! The input ${str} should contain at least 2 different types of numbers!"`);

  } else if (isNotSameNumber(str)){
    console.log(`"Success! The input ${str} is a valid credit card number!"`);
  };
};


validateCreditNumber('92332119011112');
validateCreditNumber('a92332119c011112');
validateCreditNumber('4444444444444444');
validateCreditNumber('6666666666666661');
validateCreditNumber('1111111111111110');
validateCreditNumber('9799799788880000');
validateCreditNumber('6166666665666666');
