const formatString = function (string, maxLength = 40) {
  // Write code under this line
  let slicedString = '';
  if (string.length <= maxLength) {
    return string;
  }
  slicedString = string.slice(0, maxLength);
  let modefiedString;
  return (modefiedString = `${slicedString}...`);
};
formatString(
  'vfdv vfgmgblm fgbgfbmkbfbfrsdccsjgdfjhdq hdqkwhdkqkkkkw wewhrhjrjjer e',
);
