const checkForSpam = function (str) {
  'use strict';
  // Write code under this line
  let strLowerCase = str.toLowerCase();
  if (strLowerCase.includes('spam') || strLowerCase.includes('sale')) {
    return true;
  }

  return false;
};

checkForSpam('pam let it be');
//console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
