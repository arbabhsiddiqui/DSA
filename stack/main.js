class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  clear() {
    this.stack = [];
  }

  reverse() {
    this.stack.reverse();
  }

  includes(value) {
    return this.stack.includes(value);
  }

  print() {
    let str = '';

    this.stack.map((item) => (str += item));
    return str;
  }
}

const stack = new Stack();

stack.push(44);
stack.push(54);
stack.pop();
stack.push(31);

console.log('peek', stack.peek());
console.log('includes', stack.includes(44));
console.log('print', stack.print());
