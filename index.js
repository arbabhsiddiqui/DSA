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

class Queue2 {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  show() {
    let printQueueValue = '';
    this.queue.map((item) => (printQueueValue += item));
    return printQueueValue;
  }

  dequeue() {
    return this.queue.shift();
  }
}

const Queue2Calling = new Queue2();

Queue2Calling.enqueue(4);
Queue2Calling.enqueue(7);
Queue2Calling.enqueue(8);

console.log(Queue2Calling.show());
Queue2Calling.dequeue();
console.log(Queue2Calling.show());
