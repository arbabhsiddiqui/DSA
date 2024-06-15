class Node {
  constructor(data, next = null, prev = null) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  //------------   meri theory  ------------
  // isline me ek confusion create ho rhi hai agr code ko ap sahi se read na kare to
  //   isliye isko thoda modify kiya hai -- jo new node ka next hai usko head pe bhi point karwana hai is liye is process ko niche if me move kiya hai taki aur clear ho jaye
  // ------------- meri theory end ------------
  //   const newNode = new Node(data, this.head);
  const newNode = new Node(data);
  if (this.head !== null) {
    newNode.next = this.head;

    this.head.prev = newNode;
  }

  this.head = newNode;

  if (this.tail == null) {
    this.tail = newNode;
  }
};

DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  if (this.tail !== null) {
    newNode.prev = this.tail;
    this.tail.next = newNode;
  }

  this.tail = newNode;

  if (this.head == null) {
    this.head = newNode;
  }
};

DoublyLinkedList.prototype.insertAtGivenNode = function (prevNode, data) {
  const newNode = new Node(data);

  prevNode.next.prev = newNode;
  newNode.next = prevNode.next;
  newNode.prev = prevNode;
  prevNode.next = newNode;
};

DoublyLinkedList.prototype.traverse = function () {
  let result = [];
  current = this.head;

  if (!current) {
    return [];
  }

  while (current) {
    result.push(current.data);

    current = current.next;
  }

  return result;
};

DoublyLinkedList.prototype.deleteFirstNode = function () {
  if (this.head === null) {
    return;
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
};

DoublyLinkedList.prototype.deleteLastNode = function () {
  if (this.tail === null) {
    return;
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

DoublyLinkedList.prototype.revers = function () {
  let current = this.head;
  let temp = null;

  while (current) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    current = current.prev;
  }
  if (temp != null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.insertAtBeginning(41);
doublyLinkedList.insertAtBeginning(55);
doublyLinkedList.insertAtEnd(77);
doublyLinkedList.insertAtEnd(53);
doublyLinkedList.insertAtEnd(51);

// doublyLinkedList.insertAtGivenNode(doublyLinkedList.head.next, 6);
// doublyLinkedList.insertAtGivenNode(doublyLinkedList.head.next.next.next, 78);

console.log(doublyLinkedList.traverse());
// doublyLinkedList.deleteFirstNode();
// console.log(doublyLinkedList.traverse());

// doublyLinkedList.deleteLastNode();

doublyLinkedList.revers();
console.log(doublyLinkedList.traverse());
// console.log(doublyLinkedList.traverse());

// console.log('tail', doublyLinkedList.tail);
