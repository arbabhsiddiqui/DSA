class Queue {
  constructor() {
    this.arr = [];
  }

  add(value) {
    this.arr.push(value);
  }

  show() {
    let printQueueValue = '';
    this.arr.map((item) => (printQueueValue += item));

    return printQueueValue;
  }

  remove() {
    for (let index = 0; index < this.arr.length; index++) {
      this.arr[index] = this.arr[index + 1];
    }
    this.arr.pop();
  }

  removeWithShift() {
    this.arr.shift();
  }
}

const QueueCalling = new Queue();

QueueCalling.add(4);
QueueCalling.add(3);
QueueCalling.add(5);
QueueCalling.add(7);
QueueCalling.add(8);

console.log(QueueCalling.show());
QueueCalling.remove();
console.log(QueueCalling.show());
