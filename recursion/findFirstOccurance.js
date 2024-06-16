function findFirstOccurrence(arr, findMe) {
  let occurrenceIndex = 0;
  let index = 0;
  while (arr.length != index) {
    if (findMe == arr[index]) {
      occurrenceIndex = index;
      break;
    }
    index++;
  }
  if (occurrenceIndex === 0) {
    return -1;
  }
  return occurrenceIndex;
}

function findFirstOccurrenceRev(arr, currentIndex, findMe) {
  console.log(`current ${currentIndex} value of findMe ${findMe}`);
  if (findMe == arr[currentIndex]) {
    console.log('base case hit', arr[currentIndex]);
    console.log('base currentIndex value', currentIndex);
    return currentIndex;
  }

  if (arr.length === currentIndex) {
    return -1;
  }

  let result = findFirstOccurrenceRev(arr, currentIndex + 1, findMe);

  console.log(`value of currentIndex ${currentIndex}, result : ${result}`);
  return result;
}

let arr = [1, 3, 4, 5, 6, 7, 6, 9, 7, 33, 6, 3];
console.log(findFirstOccurrence(arr, 6));
console.log(findFirstOccurrenceRev(arr, 0, 6));
console.log(findFirstOccurrenceRev(arr, 0, 77));
