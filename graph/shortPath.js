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

function shortestPath(edges, start, dest) {
  let graph = createGraph(edges);

  const queue = [[start, 0]];

  const visited = new Set([start]);

  while (queue.length != 0) {
    const [node, distance] = queue.shift();

    if (node === dest) {
      return distance;
    }

    for (const innerNode of graph[node]) {
      if (!visited.has(innerNode)) {
        visited.add(innerNode);
        queue.push([innerNode, distance + 1]);
      }
    }
  }
  return visited;
}

console.log(shortestPath(edges, 1, 7));
