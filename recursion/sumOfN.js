function sunOFn(number) {
  if (number == 1) {
    return 1;
  }

  return number + sunOFn(number - 1);
}

console.log(sunOFn(5, 0));
