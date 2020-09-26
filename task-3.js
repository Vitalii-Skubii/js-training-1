const findLongestWord = function (string = '') {
  // Write code under this line
  let stringArray = string.split(' ');
  console.log(stringArray);
  let longestWord = stringArray[0];
  for (const stringArr of stringArray) {
    if (stringArr.length > longestWord.length) {
      longestWord = stringArr;
    }
  }
  console.log(longestWord);
  return longestWord;
};
findLongestWord('sdjcv xnfcv mcs cskbbknkh csed csjkneb');
