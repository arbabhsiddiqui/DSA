const graph = {
  1: [2],
  2: [1, 3],
  3: [2],
  4: [5],
  5: [4, 6, 7],
  6: [5],
  7: [5, 8],
  8: [7],
  9: [],
};
const connectedIsland = (graph, start) => {
  let stack = [start];
  let visited = new Set();
  let count = 0;

  while (stack.length != 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);
      for (const innerNode of graph[node]) {
        if (!visited.has(innerNode)) {
          visited.add(innerNode);
          stack.push(innerNode);
        }
      }
    }
    count++;
  }

  return count;
};

// const connectedIsland = (graph) => {
//   let visited = new Set();
//   let count = 0;

//   function dfs(node) {
//     if (!visited.has(node)) {
//       visited.add(node);
//       for (const innerNode of graph[node]) {
//         dfs(innerNode);
//       }
//     }
//   }

//   for (const node in graph) {
//     if (!visited.has(node)) {
//       dfs(node);
//       count++;
//     }
//   }

//   return count;
// };

function biggestIsland(graph) {
  const visited = new Set();
  let largest = 0;

  function dfs(node) {
    if (visited.has(node)) {
      return 0;
    }
    visited.add(node);
    let size = 1;
    //find neighbour
    for (const neighbour of graph[node]) {
      size += dfs(neighbour);
      // size = size + dfs(neighbour)
    }
    return size;
  }

  // iterate over graph

  for (const node in graph) {
    if (!visited.has(node)) {
      const componentSize = dfs(node);
      if (componentSize > largest) {
        largest = componentSize;
      }
    }
  }
  return largest;
}

console.log(connectedIsland(graph, 1));
console.log(biggestIsland(graph));
