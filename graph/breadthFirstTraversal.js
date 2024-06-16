const graph = {
  a: ['b', 'c'],
  b: ['a', 'c', 'd'],
  c: ['a', 'b', 'd'],
  d: ['b', 'c'],
  e: ['f', 'd'],
  f: ['e', 'a'],
};

const breathFTI = (graph, start) => {
  const queue = [start];
  const visited = new Set();

  while (queue.length != 0) {
    node = queue.shift();

    for (const innerNode of graph[node]) {
      if (!visited.has(innerNode)) {
        visited.add(innerNode);
        queue.push(innerNode);
      }
    }
  }
  return visited;
};

console.log(breathFTI(graph, 'a'));
