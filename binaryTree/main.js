class Node {
  constructor(data, left = null, right = null) {
    this.left = left;
    this.data = data;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

BinarySearchTree.prototype.insertion = function (data) {
  const newNode = new Node(data);

  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};

BinarySearchTree.prototype.insertNode = function (root, newNode) {
  if (newNode.data < root.data) {
    if (root.left === null) {
      root.left = newNode;
    } else {
      this.insertNode(root.left, newNode);
    }
  } else {
    if (root.right === null) {
      root.right = newNode;
    } else {
      this.insertNode(root.right, newNode);
    }
  }
};

BinarySearchTree.prototype.deletion = function (data) {
  this.root = this.deleteNodeInOrderSuccessor(this.root, data);
};

BinarySearchTree.prototype.deleteNodeInOrderSuccessor = function (root, data) {
  if (root === null) {
    return null;
  }

  if (data < root.data) {
    root.left = this.deleteNodeInOrderSuccessor(root.left, data);
  } else if (data > root.data) {
    root.right = this.deleteNodeInOrderSuccessor(root.right, data);
  } else {
    if (root.left === null && root.right === null) {
      return null;
    } else if (root.left == null) {
      return root.right;
    } else if (root.right == null) {
      return root.left;
    } else {
      let tempNode = this.findMinNode(root.right);
      root.data = tempNode.data;
      root.right = this.deleteNodeInOrderSuccessor(root.right, tempNode.data);
    }
  }
  return root;
};

BinarySearchTree.prototype.findMinNode = function (node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
};

BinarySearchTree.prototype.inOrderTraversal = function () {
  const result = [];
  console.log('root', this.root);
  this.inOrder(this.root, result);
  return result;
};

BinarySearchTree.prototype.inOrder = function (root, result) {
  if (root !== null) {
    this.inOrder(root.left, result);
    result.push(root.data);
    this.inOrder(root.right, result);
  }
};

BinarySearchTree.prototype.depthFirst = function () {
  let stack = [this.root];
  let value = [];

  while (stack.length > 0) {
    let x = stack.pop();

    x.right !== null && stack.push(x.right);
    x.left !== null && stack.push(x.left);

    value.push(x.data);
  }

  return value;
};

BinarySearchTree.prototype.breathFirst = function () {
  let queue = [this.root];
  let value = [];

  while (queue.length > 0) {
    let node = queue.shift();
    value.push(node.data);

    node.left !== null && queue.push(node.left);
    node.right !== null && queue.push(node.right);
  }

  return value;
};

const bst = new BinarySearchTree();

// bst.insertion(42);
// bst.insertion(2);
// bst.insertion(44);
// bst.insertion(3);
// bst.insertion(4);
// bst.insertion(7);
// console.log('n', JSON.stringify(bst.root, null, 2));

// bst.deletion(2);

// console.log('d', JSON.stringify(bst.root, null, 2));

bst.insertion(2);
bst.insertion(102);
// bst.insertion(55);
bst.insertion(60);
bst.insertion(65);
bst.insertion(40);
bst.insertion(70);
bst.insertion(103);
bst.insertion(104);
bst.insertion(206);

// console.log('n', JSON.stringify(bst.root, null, 2));

// bst.deletion(55);

// console.log('d', JSON.stringify(bst.root, null, 2));
console.log(bst.depthFirst());
console.log(bst.breathFirst());

// console.log(bst.inOrderTraversal());
