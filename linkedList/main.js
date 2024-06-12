class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtBeginning(value) {
    const newNode = new Node(value);
    this.head = newNode;
  }

  addAtLast(value) {
    const newNode = new Node(value);
    // check kare ga ki head null hai kya
    if (this.head == null) {
      // agr null hai to newNode ko add kardo head pe  (churan hai ek dum)
      this.head = newNode;
      return;
    }

    // agr head pe kuch hai to ek last naam ka variable bana ke usko head ki value dedo
    let last = this.head;

    // ab check karte raho jb tk last null na mil jaye
    while (last.next != null) {
      last = last.next;
    }
    // next null hai to value add karo last pe
    last.next = newNode;
  }

  //   addAtGiveNode(value, nodePosition) {
  //     const newNode = new Node(value);
  //        let last = this.head;

  //     while (last.value != nodePosition) {
  //       last = last.next;
  //     }
  //     let moveNode = last;
  //     console.log('moveNode', moveNode);
  //     // console.log(newNode);
  //     last.value = newNode.value;
  //   }

  // inta sb nhi karna hai simply prevNode ke next ko add kardo newNode ke next pe aur prevNode ko next ko assign kardo new node

  insertAfter(prevNode, value) {
    if (!prevNode) {
      console.log('node not found');
      return;
    }
    const newNode = new Node(value, prevNode.next);
    prevNode.next = newNode;
  }

  removeFromHead() {
    console.log('from head', this.head);
    this.head = this.head.next;
  }

  removeFromLast() {
    // empty check karlo
    if (!this.head) {
      console.log('node not found');
      return;
    }
    // agr head pe kuch hai to ek last naam ka variable bana ke usko head ki value dedo
    let last = this.head;

    let secondLast;

    // ab check karte raho jb tk last null na mil jaye
    while (last.next != null) {
      // aur har bar last value to update karne se phle move kardo secondLast pe
      secondLast = last;
      //   last ko update kardo new last se
      last = last.next;
    }
    // ab to kuch karna nhi hai second last ke null ko empty kardo aur secondLast ko last node bana do
    // console.log('secondList', secondLast);
    secondLast.next = null;
    // console.log('secondList after', secondLast);
    // last = secondLast; // thank @Ranjan for pointing this out
  }

  removeNodeOfGivenValue(value) {
    // empty check karlo
    if (!this.head) {
      console.log('node not found');
      return;
    }
    if (this.head.value == value) {
      this.head = this.head.next;
      return;
    }
    let last = this.head;

    let secondLast;

    while (last.value != value) {
      secondLast = last;
      last = last.next;
    }
    secondLast.next = last.next;
    // last = secondLast; // thank @Ranjan for pointing this out
  }

  showHead() {
    console.debug('final value of head', this.head);
  }
}

let usingLinkedList = new LinkedList();

usingLinkedList.addAtLast(4);
usingLinkedList.addAtLast(55);
usingLinkedList.addAtLast(66);
usingLinkedList.addAtLast(78);

// usingLinkedList.insertAfter(usingLinkedList.head.next, 44);
// usingLinkedList.removeFromHead();
// usingLinkedList.removeFromLast();
usingLinkedList.removeNodeOfGivenValue(4);
usingLinkedList.showHead();
