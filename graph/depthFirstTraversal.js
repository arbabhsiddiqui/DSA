const graph = {
  a: ['b', 'c'],
  b: ['a', 'c', 'd'],
  c: ['a', 'b', 'd'],
  d: ['b', 'c'],
  e: ['f'],
  f: ['e'],
};

function depthFSI(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length != 0) {
    let node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);

      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
        }
      }
    }
  }

  return visited;
}

console.log(depthFSI(graph, 'a'));

function depthFSR(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start);
    for (const innerNode of graph[start]) {
      return depthFSR(graph, innerNode, visited);
    }
  }
}

console.log(depthFSR(graph, 'a'));
