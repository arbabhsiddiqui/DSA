function removeSpaceTabs(str) {
  let newStr = '';
  while (str.length > 0) {
    firstChar = str[0];
    // console.log(firstChar);
    if (firstChar != ' ' && firstChar != '\t') {
      //   console.log('in for if ', firstChar);
      newStr += firstChar;
    }
    str = str.slice(1);
  }
  return newStr;
}

// console.log(removeSpaceTabs('abd\tfsfs ffs ff'));
// console.log(removeSpaceTabs('Arbab Hussain'));

function removeSpaceTabsRtc(str) {
  if (str.length == 0) {
    return '';
  }

  const firstChar = str[0];
  const remaning = str.slice(1);

  if (firstChar == ' ' || firstChar == '\t') {
    return removeSpaceTabsRtc(remaning);
  }

  return firstChar + removeSpaceTabsRtc(remaning);
}

console.log(removeSpaceTabsRtc('lorem  ipsum'));
