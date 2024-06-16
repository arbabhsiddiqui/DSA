const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 8],
  [9, 10],
];

// a: [b,c]
// b: [c,d]
// c: [d]
// d:[e]
// e:[f]

function createGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    const [key1, key2] = edge;

    if (!graph.hasOwnProperty(key1)) {
      graph[key1] = [];
    }
    if (!graph.hasOwnProperty(key2)) {
      graph[key2] = [];
    }

    graph[key1].push(key2);
    graph[key2].push(key1);
  }

  return graph;
}

console.log(createGraph(edges));
