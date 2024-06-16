function isVowel(character) {
  const vowels = 'aeiou';
  character = character.toLowerCase();
  if (vowels.indexOf(character) === -1) {
    return false;
  }
  return true;
}

function countVowels(str) {
  let vowelCount = 0;

  while (str.length > 0) {
    let lastCharacter = str[str.length - 1];

    if (isVowel(lastCharacter)) {
      vowelCount++;
    }

    str = str.substring(0, str.length - 1);
  }

  return vowelCount;
}

function countVowelsREV(str, count) {
  //   console.log(`value of str ${str},value of count ${count}`);
  if (str.length == 1) {
    return Number(isVowel(str[0]));
  }

  //   console.log('on Return');
  //   console.log('value of str', countVowelsREV(str.substring(0, str.length - 1)));
  //   console.log('value of checking', isVowel(str[str.length - 1]));

  let result =
    countVowelsREV(str.substring(0, str.length - 1)) +
    isVowel(str[str.length - 1]);

  //   console.log('result', result);

  return result;
}

console.log(countVowelsREV('loremEEFSD', 0));
