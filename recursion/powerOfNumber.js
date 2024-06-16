function powerOfNumberRtc(number, power) {
  if (power === 0) {
    return 1;
  }

  return number * powerOfNumberRtc(number, power - 1);
}

// console.log('powerOfNumberRtc', powerOfNumberRtc(2, 4));
// console.log('powerOfNumberRtc', powerOfNumberRtc(2, 3));
// console.log('powerOfNumberRtc', powerOfNumberRtc(2, 2));
console.log('powerOfNumberRtc', powerOfNumberRtc(2, 1));
console.log('powerOfNumberRtc', powerOfNumberRtc(2, 0));
