const mapArray = function (array) {
  'use strict';

  const numbers = new Array(array.length);

  for (let i = 0; i < array.length; i += 1) {
    numbers[i] = array[i] * 10;
    // Write code under this line
  }

  return numbers;
};
mapArray([1, 4, 3]);
//console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
