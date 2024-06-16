// for case 1
const removeAdjacent = (str) => {
  let newStr = '';
  for (let index = 0; index < str.length; index++) {
    if (!newStr.includes(str[index])) {
      newStr += str[index];
    }
  }
  return newStr;
};

// console.log(removeAdjacent('aabbcc'));

function removeAdjacentRtc(str) {
  if (str.length <= 1) {
    return str;
  }

  if (str[0] != str[1]) {
    return str[0] + removeAdjacentRtc(str.slice(1));
  }

  return removeAdjacentRtc(str.slice(1));
}

// console.log('removeAdjacentRtc', removeAdjacentRtc('aabccdd'));
// console.log('removeAdjacentRtc', removeAdjacentRtc(''));

const removeAdjacentCaseTwo = (str) => {
  let newStr = '';
  for (let index = 0; index < str.length; index++) {
    if (!newStr.includes(str[index])) {
      newStr += str[index];
    } else {
      //   console.log('hai usme', str[index]);
      //   console.log('uska index', newStr.indexOf(str[index]));
      //   console.log('last index pe kya hai', newStr[newStr.length - 1]);
      if (newStr[newStr.length - 1] == str[index]) {
        newStr = newStr.substring(0, newStr.length - 1);
      }
    }
  }
  return newStr;
};

// todo: complete this
function removeAdjacentRtcCaseTwo(str) {
  if (str.length <= 1) {
    return str;
  }

  if (str[0] == str[1]) {
    return removeAdjacentRtc(str.slice(1));
  }
  return '';
}

console.log('removeAdjacentRtcCaseTwo', removeAdjacentRtcCaseTwo('aabcc'));
console.log(
  'removeAdjacentRtcCaseTworemoveAdjacentRtcCaseTwo',
  removeAdjacentRtcCaseTwo('aadb4eccss')
);
