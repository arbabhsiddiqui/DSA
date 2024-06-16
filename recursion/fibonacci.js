function fib(value) {
  let n0 = 0;
  let n1 = 1;

  for (let i = 0; i < value; i++) {
    let temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }

  return n0;
}
console.log(fib(5));
console.log(fib(6));

function fibRtc(value) {
  if (value <= 1) {
    return value;
  }

  return fibRtc(value - 1) + fibRtc(value - 2);
}
console.log('fibRtc', fib(5));
console.log('fibRtc', fib(6));
