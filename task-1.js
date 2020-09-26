const getItemsString = function (array) {
  'use strict';
  // Write code under this line
  let string = '';
  for (let i = 0; i < array.length; i += 1) {
    let indexModefy = i + 1;

    let result = `${indexModefy} - ${array[i]}\n`;
    string += result;
  }
  return string;
};
getItemsString([1, 4, 9]);
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
