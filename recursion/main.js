const reverseAString = (str) => {
  let result = '';

  while (str.length != 0) {
    let last = str[str.length - 1];
    str = str.substring(0, str.length - 1);
    result += last;
  }
  return result;
};

// const reverseAString = (str) => {
//   console.log('first', str);
//   // base case
//   if (str == '') {
//     return str;
//   }

//   return str[str.length - 1] + reverseAString(str.substring(0, str.length - 1));
// };

// console.log(reverseAString('ABC'));

// function printNumberTillZero(number, sum) {
//   // base case
//   if (number === 0) {
//     return 1;
//   }

//   let num = printNumberTillZero(number - 1, sum);

//   return (num += num);
// }

// console.log(printNumberTillZero(4, 0));

function printTable(count, numberForTable, results = []) {
  if (count == 0) {
    return 1;
  }

  let reversedPart = printTable(count - 1, numberForTable, results);
  let result = count * numberForTable;
  results.push(result);
  console.log(
    `reversed part ${reversedPart} and  final result ${result} and numberForTable ${numberForTable} count ${count}`
  );
  return results;
}

console.log(printTable(10, 2));
