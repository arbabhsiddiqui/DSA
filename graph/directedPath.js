const graph = {
  a: ['b', 'c'],
  b: ['a', 'c', 'd'],
  c: ['a', 'b', 'd'],
  d: ['b', 'c'],
  e: ['f'],
  f: ['e'],
};

function hasPathDFS(graph, start, dest) {
  let stack = [start];
  let visited = new Set();

  while (stack.length != 0) {
    const node = stack.pop();

    if (node === dest) {
      return true;
    }

    if (!visited.has(node)) {
      visited.add(node);
      for (const innerNode of graph[node]) {
        // if (innerNode === dest) return true;

        // if (!visited.has(innerNode)) {
        //   visited.add(innerNode);
        stack.push(innerNode);
        // }
      }
    }
  }
}

function hasPathBFS(graph, start, dest) {
  let queue = [start];
  let visited = new Set();

  while (queue.length != 0) {
    const node = queue.shift();
    if (node === dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (const innerNode of graph[node]) {
        if (!visited.has(innerNode)) {
          queue.push(innerNode);
        }
      }
    }
  }

  return false;
}

console.log(hasPathBFS(graph, 'a', 'e'));
