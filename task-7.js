const filterArray = function (array) {
  'use strict';
  const numbers = [];
  for (const arr of array) {
    console.log(arr);
    if (Number.isFinite(arr) === true) {
      numbers.push(arr);
    }
    // Write code under this line
  }
  console.log(numbers);
  return numbers;
};
filterArray([1, 'w', null, 22, 'rt']);
